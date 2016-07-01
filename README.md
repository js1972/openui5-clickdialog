# openui5-clickdialog
A replacement sap.m.Dialog for OpenUI5 that allows you to close it be clicking anywhere outside the dialog.

This control allows for:
+ Clicking anywhere outside the dialog to close

The included sample application (index.html and application.js) shows two ways of using ClickDialog. Two buttons appear on the page. The first opens up a ClickDialog programmatically in JavaScript. The second uses a ClickPanel defined in an XML fragment.
Note: ClickDialog uses CSS selectors to find the dialog and its background (modal) layer. These are subject to change and are not guaranteed in future versions like the OpenUI5 API is.

## OpenUI5 version
Test on version 1.36.11.

## How to use?
+ To test ClickDialog you can simply git clone this repo and launch index.html from your favourite web server. Else, if you have Node.js and npm (why wouldn't you?) then run `$ npm install connect serve-static` followed by `$ node server.js` and you'll have a basic server to run the sample application with: `https://localhost:8080/`.
+ To use ClickDialog in your own app just copy the ClickDialog.js file to your project. I've used the 'progamic' namespace so adjust your bootstrap tag's resource roots to add: "programic": "./" (specify whatever directory you placed ClickPanel.js in). See the sample app: Application.js for how this is done.

## What next
+ Add tests?
+ Wrap in library (probably not worth it unless bundling with other controls)
+ ...

## Contributions
Contributions are most welcome if you can see better ways to do this or enhancements... Please send a pull-request.  ;-)
