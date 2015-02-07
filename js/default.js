//Global Variables
var count = 0, player;


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

                

                //create the 15x15 grid and add ids and classes
                $(document).ready(function () {
                    
                    initialize();
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


                // The click event handler for gridcells
                $(".gridcell").click(function(){
                    var clickedcell = this.id;
                    count++;
                    player = count % 2;
                    newClickReceived(player, clickedcell);
                    displaygrid();
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
    function newClickReceived(player, cellid) {
        var win = false;
        var moveResp = move(player, cellid);
        if (!moveResp) count--;
        else {
            win = checkFinal(player);
            if (win) showPopUp(player);
        }
    }

    function showPopUp(player) {
        console.log("DONE");
        var resultDiv = document.getElementById('resultDiv');

        //Creating message dialog box
        var messagedialogpopup = new Windows.UI.Popups.MessageDialog
        ('Allow to use your location ', 'Location Application');

        // adding command to message dialog box
 
        messagedialogpopup.commands.append(new Windows.UI.Popups.UICommand('yes', function () {
            //calling callback function for Yes command
            resultDiv.innerHTML = "<h2>Yes</h2>";
        }));
 
        messagedialogpopup.commands.append(new Windows.UI.Popups.UICommand('no', function () {
            //calling callback function for No command
 
            resultDiv.innerHTML = "<h2>no</h2>";
        }));
 
        messagedialogpopup.showAsync();
    }

    app.start();
})();
