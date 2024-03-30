(function(){
	
	var DialogManager = LunchLab.dialogs.DialogManager;

	/**
	*  Dialog is an abstract dialog notification for onscreen alerts
	*  @class LunchLab.dialogs.Dialog
	*/
	var Dialog = function()
	{
		/**
		*  The content for the dialog
		*  @property {jquery} content
		*/
		this.content = null;
	},

	// Reference to the prototype
	p = Dialog.prototype;

	/**
	*  The timer id
	*  @property {int} timerId
	*/
	p.timerId = 0;

	/**
	*  Open The dialog and display
	*  @method open
	*/
	p.open = function()
	{
		throw "Must override Dialog.open";
	};

	/**
	*  Close the dialog and destroy
	*  @method close
	*/
	p.close = function()
	{
		throw "Must override Dialog.close";
	};

	/**
	*  Close the dialog and destroy
	*  @method manualClose
	*/
	p.manualClose = function()
	{
		DialogManager.instance.remove(this);
	};

	// Assign to the namespace
	namespace("LunchLab.dialogs").Dialog = Dialog;

}());