ig.module
(
	'game.entities.buttonbase'
)
.requires
(
	'impact.entity'
)
.defines(function ()
{
    EntityButtonBase = ig.Entity.extend(
    {
	    gravityFactor: 0,
        image: null,
        focused: false,

        init: function(x, y, settings)
        {
            this.parent(x, y, settings);
            this.zIndex = 8000;
        },
        update: function ()
        {
            var f = this.inFocus();
            if(f && !this.focused) this.onMouseOver();
            if(!f && this.focused) this.onMouseOut();

            if(ig.input.pressed("leftMouse") && f)
            {
	            this.onPressed();
            }
	        if(ig.input.state("leftMouse") && f)
	            this.pressing();
            this.focused = f;
        },

        inFocus: function()
        {
            return ((this.pos.x <= (ig.input.mouse.x + ig.game.screen.x)) &&
                    ((ig.input.mouse.x + ig.game.screen.x) <= this.pos.x + this.size.x) &&
                    (this.pos.y <= (ig.input.mouse.y + ig.game.screen.y)) &&
                    ((ig.input.mouse.y + ig.game.screen.y) <= this.pos.y + this.size.y));
        },

        onPressed:function()
        {

        },
		pressing: function()
		{

		},

        onMouseOver: function ()
        {

        },

        onMouseOut: function ()
        {

        }
    });
});