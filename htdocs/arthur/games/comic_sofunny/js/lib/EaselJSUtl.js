
// private functions 
function logger(message){
	if(console){
		console.log(message);
	}else{
		alert(message);
	}
}

// library Helper	
function createSquare(width, height, x, y, fillColor, strokeColor, radius, strokeWidth){
	var square;
	var g = new createjs.Graphics();
	
	if(!strokeWidth){
		strokeWidth = 1;
	}

	if(strokeColor){
		g.setStrokeStyle(strokeWidth);
		g.beginStroke(strokeColor);
		//if(debug) console.log("stroke Color " + strokeColor); 
	}
	
	if(fillColor){
		g.beginFill(fillColor);
		//if(debug) console.log("fill Color " + fillColor); 
	}
	
	if(radius){
		g.drawRoundRect(x, y, width, height, radius);
	}else{
		g.drawRect(x, y, width, height);
	}
	
	g.endFill();
	square = new createjs.Shape(g);
	return square;
}

function createCircle(radius, x, y, fillColor, strokeColor){
	var circle;
	var g = new createjs.Graphics();
	
	if(strokeColor){
		g.setStrokeStyle(1);
		g.beginStroke(strokeColor);
		//if(debug) console.log("stroke Color " + strokeColor); 
	}
	
	if(fillColor){
		g.beginFill(fillColor);
		//if(debug) console.log("fill Color " + fillColor); 
	}
	
	g.drawCircle(x, y, radius);
	g.endFill();
	circle = new createjs.Shape(g);
	return circle;
}

function createText(text, fontSettings, hexColor, x, y, width, height){
	var txtField = new createjs.Text(text, fontSettings, hexColor); //"20px Arial" "#000000"
	txtField.x = x;
	txtField.y = y;
	txtField.width = width;
	txtField.height = height;
	txtField.font = fontSettings;
	txtField.color = hexColor;
	txtField.align = "left";
	return txtField;
}

createjs.Graphics.prototype.dashedLineTo = function(x1, y1, x2, y2, dashLen) {
    this.moveTo(x1, y1);
    
    var dX = x2 - x1;
    var dY = y2 - y1;
    var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen);
    var dashX = dX / dashes;
    var dashY = dY / dashes;
    
    var q = 0;
    while (q++ < dashes) {
        x1 += dashX;
        y1 += dashY;
        this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
    }
    this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x2, y2); 
}

function createDottedLine(lineWidth, color, lengthOfDash){
	var line;
	var g = new createjs.Graphics();
	
	if(!lengthOfDash){
		lengthOfDash = 1;
	}

	if(color){
		g.setStrokeStyle(lengthOfDash, 1, 1);
		g.beginStroke(color);
		//if(debug) console.log("stroke Color " + strokeColor); 
	}

	//g.moveTo(0,0).lineTo(0, lineWidth);
	g.dashedLineTo(1,0,lineWidth,0, lengthOfDash);

	//shape.graphics.setStrokeStyle(2).beginStroke("#ff0000").moveTo(0,0).lineTo(100,100)
	
	line = new createjs.Shape(g);
	return line;
}