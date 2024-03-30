(function(){
	
	/**
	*  Dialog is an abstract dialog notification for onscreen alerts
	*  @class LunchLab.dialogs.DialogManager
	*/
	var DialogManager = function()
	{
		if (_instance)
		{
			throw "DialogManager is already initialized, use DialogManager.instance";
		}

		/**
		*  The collection of dialogs to display
		*  @property {Array} dialogs
		*/
		this.dialogs = [];

		/**
		*  The jquery node to cointain notifications
		*  @property {jquery} container
		*/
		this.container = $("#notifications");

		/** Save the singleton instance */
		_instance = this;

		// Check for the first time login
		if (this.container.data('first-time-login'))
		{
			LunchLab.dialogs.MagnetDialog.firstTimeLogin();
		}
	},

	// Reference to the prototype
	p = DialogManager.prototype,

	/**
	*  Singleton instance of the manager
	*  @property {DialogManager} _instance
	*  @private
	*/
	_instance = null;

	/**
	*  The number of MS until we auto destroy dialog
	*  @property {int} TIMER
	*  @static
	*/
	DialogManager.TIMER = 8000;

	/**
	*  Setup the singleton of the manager
	*  @property {DialogManager} init
	*  @static
	*/
	DialogManager.init = function()
	{
		new DialogManager();
	};

	/**
	*  Singleton instance of the manager
	*  @property {DialogManager} instance
	*  @static
	*  @readOnly
	*/
	Object.defineProperty(DialogManager, "instance", {
		get : function()
		{
			return _instance;
		}
	});

	/**
	*  Open The dialog and display
	*  @method open
	*  @param {Dialog} dialog The dialog to add
	*/
	p.add = function(dialog)
	{
		this.dialogs.push(dialog);
		dialog.open();

		// Auto destroy on timeout
		dialog.timerId = setTimeout(
			this.remove.bind(this, dialog), 
			DialogManager.TIMER
		);

		this.container.append(dialog.content);
		dialog.content.slideToggle();
	};

	/**
	*  Remove the dialog from the queue, dialogs should call this manually
	*  @method remove
	*  @param {Dialog} dialog The dialog to remove
	*/
	p.remove = function(dialog)
	{
		// Clear the timer
		clearTimeout(dialog.timerId);
		dialog.timerId = 0;

		var index = this.dialogs.indexOf(dialog);
		if (index > -1)
		{
			this.dialogs.splice(index, 1);
		}
		dialog.content.slideToggle(400, this.removeDialog.bind(this, dialog));
	};

	/**
	*  Remove the dialog after jquery slide animation
	*  @method removeDialog
	*  @param {Dialog} dialog The dialog to remove
	*/
	p.removeDialog = function(dialog)
	{
		dialog.content.remove();
		dialog.close();
	};

	// Assign to the namespace
	namespace("LunchLab.dialogs").DialogManager = DialogManager;

}());