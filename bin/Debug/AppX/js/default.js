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

                //Global Variables
                var count = 0, player;

                //create the 15x15 grid and add ids and classes
                $(document).ready(function () {
                    var i, j,id="";
                    var appString="";
                    for (i = 0; i < 15; i++) {
                        for (j = 0; j < 15; j++) {
                            id = (i * 15) + j;
                            appString = "<div class='gridcell";
                            if (i == 0) appString += " topcell";
                            if (i == 14) appString += " bottomcell";
                            if (j == 0) appString += " leftcell";
                            if (j == 14) appString += " rightcell";
                            appString += "' id='" + id;
                            appString += "'></div>";
                            $("#gridcontainer").append(appString);
                        }
                    }
                });


                // The click event handler for button1
                $(".gridcell").click(function(){
                    var clickedcell = this.id;
                    count++;
                    player = count % 2;
                    newClickReceived(player, clickedcell);
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

    //User defined functions
    

    //Function when a new click is received
    function newClickReceived(player , cellid) {
        if (player == 1) {
            document.getElementById(cellid).style.backgroundImage = "url('/images/greenx.png')";
            document.getElementById(cellid).style.backgroundSize = "cover";
            //$("#cellid").css("background", "url(/images/greenx.png)");
            console.log(player+" "+cellid);
        }
        else {
            document.getElementById(cellid).style.backgroundImage = "url('/images/blueo.png')";
            document.getElementById(cellid).style.backgroundSize = "cover";
            //$("#cellid").css("background", "url(/images/blueo.png)");
            console.log(player+" "+cellid);
        }
    }

    app.start();
})();
