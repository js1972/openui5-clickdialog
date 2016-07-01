// local controller
sap.ui.controller("my.controller", {
	onInit: function() {
	},

	onPress: function() {
		var _dialog;

		sap.ui.require(["programic/ClickDialog"], function (ClickDialog) {
			_dialog = new ClickDialog({
				title: "Click Dialog Test",
				content: new sap.m.Text({ text: "This is some text..." }),
				beginButton: new sap.m.Button({
					text: "Close",
					press: function () {
						_dialog.close();
					}
				}),
				afterClose: function () {
					_dialog.destroy();
				}
			});

			_dialog.open();
		});
	},

	onPressFragment: function () {
		if (!this._fragmentDialog) {
			this._fragmentDialog = sap.ui.xmlfragment("programic.TestClickDialog");
		}
		this._fragmentDialog.open();
	},

	fragmentButtonPress: function () {
		this.byId("idClickDialog1").close();
	},

	fragmentAfterClose: function () {
		this.byId("idClickDialog1").destroy();
	}
});


var oView = sap.ui.xmlview({
	viewContent: jQuery('#myView').html()
});
oView.placeAt('content');
