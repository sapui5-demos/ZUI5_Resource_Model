sap.ui.controller("sap.training.view.LocaleSwitcher", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sap.training.view.Main
*/
	onInit: function() {
        var i18nModel = new sap.ui.model.resource.ResourceModel({
			                    bundleName: "sap.training.i18n.messageBundle"
	                        });
        sap.ui.getCore().setModel(i18nModel, "i18n");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sap.training.view.Main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sap.training.view.Main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sap.training.view.Main
*/
//	onExit: function() {
//
//	}

    setLocale: function(oEvent) {
        var sLocale = oEvent.oSource.sId.slice(-2);
        var i18nModel = new sap.ui.model.resource.ResourceModel({
			                    bundleName: "sap.training.i18n.messageBundle", bundleLocale: sLocale
                            });
        sap.ui.getCore().setModel(i18nModel, "i18n");
    }

});