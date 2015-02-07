var count = 0, player;

$(document).ready(function () {

    initialize();
    var i, j, id = "";
    var appString = "";
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

$(".gridcell").click(function () {
    var clickedcell = this.id;
    count++;
    player = count % 2;
    newClickReceived(player, clickedcell);
    displaygrid();
});

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
    if (player == 0) player = 2;
    var resultDiv = document.getElementById('resultDiv');
    var winString = "Player " + player + " has won";
    //Creating message dialog box
    var messagedialogpopup = new Windows.UI.Popups.MessageDialog
    ('Game Over', winString);

    // adding command to message dialog box

    messagedialogpopup.commands.append(new Windows.UI.Popups.UICommand('Replay', function () {
        //calling callback function for Yes command
        resultDiv.innerHTML = "<h2>Yes</h2>";
    }));

    messagedialogpopup.commands.append(new Windows.UI.Popups.UICommand('Exit', function () {
        //calling callback function for No command

        resultDiv.innerHTML = "<h2>no</h2>";
    }));

    messagedialogpopup.showAsync();
}