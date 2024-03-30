(function(namespace) {
	var IosModal = function() {
		this.message = 'Tap <span class="ios-modal-home"></span> and then<br /><strong>Add to Home Screen</strong><br /> for the best play experience.';
		this.html = '<div id="ios-modal"><div class="ios-modal-box"><div class="ios-modal-inner"><div class="ios-modal-game"></div><div class="ios-modal-message">'+this.message+'</div><div class="ios-modal-target"></div></div><div class="ios-modal-close">X</div></div><div class="ios-modal-arrow"></div></div>';
		this.body = document.querySelectorAll("body")[0];

		if(this.isModalRequired()) {
			this.showModal();
		}
	};

	/**
	 * Show modal
	 */
	IosModal.prototype.showModal = function() {
		var that = this;
		
		this.body.innerHTML += this.html;

		this.modal = document.getElementById("ios-modal");

		this.modal.addEventListener("click", function() {
			that.hideModal();
		});
	};

	/**
	 * Hide modal
	 */
	IosModal.prototype.hideModal = function() {
		this.body.removeChild(this.modal);
	};

	/**
	 * isModalRequired
	 */
	IosModal.prototype.isModalRequired = function() {
		if(/iP(hone|od)/.test(navigator.platform)) {
			var versionString = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
			var version = [parseInt(versionString[1], 10), parseInt(versionString[2], 10), parseInt(versionString[3] || 0, 10)];

			if(version[0] >= 7 && !window.navigator.standalone) {
				return true;
			}
		}

		return false;
	};

	window[namespace] = new IosModal();
})("IosModal");