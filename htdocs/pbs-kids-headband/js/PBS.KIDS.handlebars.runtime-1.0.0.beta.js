// lib/handlebars/base.js
PBS.KIDS.Handlebars = {};

PBS.KIDS.Handlebars.VERSION = "1.0.beta.6";

PBS.KIDS.Handlebars.helpers  = {};
PBS.KIDS.Handlebars.partials = {};

PBS.KIDS.Handlebars.registerHelper = function(name, fn, inverse) {
  if(inverse) { fn.not = inverse; }
  this.helpers[name] = fn;
};

PBS.KIDS.Handlebars.registerPartial = function(name, str) {
  this.partials[name] = str;
};

PBS.KIDS.Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Could not find property '" + arg + "'");
  }
});

var toString = Object.prototype.toString, functionType = "[object Function]";

PBS.KIDS.Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;


  var ret = "";
  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      for(var i=0, j=context.length; i<j; i++) {
        ret = ret + fn(context[i]);
      }
    } else {
      ret = inverse(this);
    }
    return ret;
  } else {
    return fn(context);
  }
});

PBS.KIDS.Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var ret = "";

  if(context && context.length > 0) {
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + fn(context[i]);
    }
  } else {
    ret = inverse(this);
  }
  return ret;
});

PBS.KIDS.Handlebars.registerHelper('if', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if(!context || PBS.KIDS.Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

PBS.KIDS.Handlebars.registerHelper('unless', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  options.fn = inverse;
  options.inverse = fn;

  return PBS.KIDS.Handlebars.helpers['if'].call(this, context, options);
});

PBS.KIDS.Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context);
});

PBS.KIDS.Handlebars.registerHelper('log', function(context) {
  PBS.KIDS.Handlebars.log(context);
});
;
// lib/handlebars/utils.js
PBS.KIDS.Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  for (var p in tmp) {
    if (tmp.hasOwnProperty(p)) { this[p] = tmp[p]; }
  }

  this.message = tmp.message;
};
PBS.KIDS.Handlebars.Exception.prototype = new Error;

// Build out our basic SafeString type
PBS.KIDS.Handlebars.SafeString = function(string) {
  this.string = string;
};
PBS.KIDS.Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

(function() {
  var escape = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /&(?!\w+;)|[<>"'`]/g;
  var possible = /[&<>"'`]/;

  var escapeChar = function(chr) {
    return escape[chr] || "&amp;";
  };

  PBS.KIDS.Handlebars.Utils = {
    escapeExpression: function(string) {
      // don't escape SafeStrings, since they're already safe
      if (string instanceof PBS.KIDS.Handlebars.SafeString) {
        return string.toString();
      } else if (string == null || string === false) {
        return "";
      }

      if(!possible.test(string)) { return string; }
      return string.replace(badChars, escapeChar);
    },

    isEmpty: function(value) {
      if (typeof value === "undefined") {
        return true;
      } else if (value === null) {
        return true;
      } else if (value === false) {
        return true;
      } else if(Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };
})();;
// lib/handlebars/runtime.js
PBS.KIDS.Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: PBS.KIDS.Handlebars.Utils.escapeExpression,
      invokePartial: PBS.KIDS.Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          return PBS.KIDS.Handlebars.VM.program(fn, data);
        } else if(programWrapper) {
          return programWrapper;
        } else {
          programWrapper = this.programs[i] = PBS.KIDS.Handlebars.VM.program(fn);
          return programWrapper;
        }
      },
      programWithDepth: PBS.KIDS.Handlebars.VM.programWithDepth,
      noop: PBS.KIDS.Handlebars.VM.noop
    };

    return function(context, options) {
      options = options || {};
      return templateSpec.call(container, PBS.KIDS.Handlebars, context, options.helpers, options.partials, options.data);
    };
  },

  programWithDepth: function(fn, data, $depth) {
    var args = Array.prototype.slice.call(arguments, 2);

    return function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
  },
  program: function(fn, data) {
    return function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new PBS.KIDS.Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!PBS.KIDS.Handlebars.compile) {
      throw new PBS.KIDS.Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = PBS.KIDS.Handlebars.compile(partial);
      return partials[name](context, options);
    }
  }
};

PBS.KIDS.Handlebars.template = PBS.KIDS.Handlebars.VM.template;


PBS.KIDS.Handlebars.registerHelper('URLEscapeLoginParams', function(){
var params = Array();
var destination = arguments[0];
var reload = arguments[1];
if(destination){
   params.push('destination=' + encodeURIComponent(destination));
}
if(reload === false){
params.push('refresh=0');
}
if(params.length > 0){
return '?' + params.join('&');
}
else{
return '';
}
})

PBS.KIDS.Handlebars.registerHelper('homepage-link', function(brand){
if (brand == 'go'){
return '/go/'
}
else if (brand == 'both'){
return '/pbskidsgo/'
}
else {
return '/'
}

})

