// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
                $(document).ready(function () {
                    var i, j;
                    var appString="";
                    for (i = 0; i < 15; i++) {
                        for (j = 0; j < 15; j++) {
                            appString = "<div class='gridcell";
                            if (i == 0) appString += " topcell";
                            if (i == 15) appString += " bottomcell";
                            if (j == 0) appString += " leftcell";
                            if (j == 15) appString += " rightcell";
                            appString += "'></div>";
                            $("#gridcontainer").append(appString);
                        }
                    }
                });













            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
