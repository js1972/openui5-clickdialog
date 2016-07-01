//
// New Control ClickDialog.
//
// This is a minor enhancement to the sap.m.Dialog control.
//
// Features:
// - Allows a click anywhere outside of the dialog to close the dialog (same as bootstrap dialogs)
//
sap.ui.define(['jquery.sap.global', 'sap/m/Dialog'],
	function($, Dialog) {
	"use strict";

	return Dialog.extend("programic.ClickDialog", {
		init: function () {
			Dialog.prototype.init.apply(this, arguments);

			// Setup a click handler on the popup block layer - whenever it appears
			// Note: Can't use $().click as the selector doesn't exist yet. Also
			// need to be careful to get rid of the event handler after click and
			// only call close() if the control still exists as the handler seems to
			// get called multiple times...
			function clickDialogClose() {
				$("#sap-ui-blocklayer-popup").off();

				var c = $(".sapMDialogOpen").control()[0];
				if (c) {
					c.close();
				}
			}

			$(document).on("click", "#sap-ui-blocklayer-popup", clickDialogClose);
		},

		renderer: {}  // add nothing, just use the underlying Dialog renderer
	});
}, /* bExport= */ true);
