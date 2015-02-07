function tinitialize() {
    count = 0;
    var i, j;
    for (i = 0; i < 15; i++) {
        for (j = 0; j < 15; j++) {
            grid[i][j] = 0;
            var cellid = ((i * 15) + j) + 300;
            $("#" + cellid).css('background-image', 'none');
        }
    }
}


//Enter player move in grid
function tmove(player, cellid) {
    var mod = cellid - 300;
    var i, j;
    i = Math.floor(mod / 15);
    j = mod % 15;
    if (grid[i][j] != 0) {
        return false;
    }
    else {
        if (player == 1) {
            grid[i][j] = 1;
            txUpdate(cellid);
        }
        else if(player == 2) {
            grid[i][j] = 2;
            toUpdate(cellid);
        }
        else {
            grid[i][j] = 3;
            ttUpdate(cellid);
        }

        return true;
    }
}

//Update triangle Cell
function ttUpdate(cellid) {
    audio3.play();
    document.getElementById(cellid).style.backgroundImage = "url('/images/download.svg')";
    document.getElementById(cellid).style.backgroundSize = "cover";
    console.log("THIRD");
}

//Update x Cell
function txUpdate(cellid) {
    audio1.play();
    document.getElementById(cellid).style.backgroundImage = "url('/images/whitex.svg')";
    document.getElementById(cellid).style.backgroundSize = "cover";
    console.log("FIRST");
}

//Update o Cell
function toUpdate(cellid) {
    audio2.play();
    document.getElementById(cellid).style.backgroundImage = "url('/images/whiteo.svg')";
    document.getElementById(cellid).style.backgroundSize = "cover";
    console.log("SECOND");
}