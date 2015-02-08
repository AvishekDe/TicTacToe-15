function ainitialize() {
    count = 0;
    var i, j;
    for (i = 0; i < 15; i++) {
        for (j = 0; j < 15; j++) {
            grid[i][j] = 0;
            var cellid = ((i * 15) + j) + 700;
            $("#" + cellid).css('background-image', 'none');
        }
    }
}


//Enter player move in grid
function amove(player, cellid) {
    if (player == 1) var mod = cellid - 700;
    else {
        cellid += 700;
        mod = cellid - 700;
    }
    var i, j;
    i = Math.floor(mod / 15);
    j = mod % 15;
    console.log(i + " " + j);
    if (grid[i][j] != 0) {
        return false;
    }
    else {
        if (player == 1) {
            grid[i][j] = 1;
            axUpdate(cellid);
        }
        else if (player == 2) {
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



//Update x Cell
function axUpdate(cellid) {
    audio1.play();
    document.getElementById(cellid).style.backgroundImage = "url('/images/whitex.svg')";
    document.getElementById(cellid).style.backgroundSize = "cover";
    console.log("FIRST");
}

//Update o Cell
function aoUpdate(cellid) {
    audio2.play();
    document.getElementById(cellid).style.backgroundImage = "url('/images/whiteo.svg')";
    document.getElementById(cellid).style.backgroundSize = "cover";
    console.log("SECOND");
}