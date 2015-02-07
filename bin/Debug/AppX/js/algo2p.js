// Making the grid (GLOBAL)
var grid = new Array(15);
for (var i = 0; i < 15; i++) {
    grid[i] = new Array(15);
}



//Initialize grid elements to 0
function initialize() {
    count = 0;
    var i, j;
    for (i = 0; i < 15; i++) {
        for (j = 0; j < 15; j++) {
            grid[i][j] = 0;
            var cellid = (i * 15) + j;
            $("#" + cellid).css('background-image', 'none');
        }
    }
}


//Display grid elements (DEBUG)
function displaygrid() {
    var i;
    for (i = 0; i < 15; i++) {
        console.log(grid[i]);
    }
}

//Enter player move in grid
function move(player, cellid) {
    var i, j;
    i = Math.floor(cellid / 15);
    j = cellid % 15;
    if (grid[i][j] != 0){
        return false;
    }
    else {
        if (player == 1) {
            grid[i][j] = 1;
            xUpdate(cellid);
        }
        else {
            grid[i][j] = 2;
            oUpdate(cellid);
        }

        return true;
    }
}


//Check for winner
function checkFinal(player) {
    var flag = 0;
    if (player == 0) player = 3;
    var i, j;
    outer:for (i = 0; i < 15; i++) {
        for (j = 0; j < 15; j++) {
            //ROW Victory
            if (grid[i][j] == player) {
                if (j + 4 < 15) {
                    if ((player == grid[i][j + 1]) && (player == grid[i][j + 2]) && (player == grid[i][j + 3]) && (player == grid[i][j + 4])) {
                        console.log("ROW " + i + " " + j);
                        flag = 1;
                        break outer;
                    }
                }
            }

            //COLUMN Victory
            if (grid[i][j] == player) {
                if (i + 4 < 15) {
                    if ((player == grid[i + 1][j]) && (player == grid[i + 2][j]) && (player == grid[i + 3][j]) && (player == grid[i + 4][j])) {
                        console.log("COLUMN " + i + " " + j);
                        flag = 1;
                        break outer;
                    }
                }
            }

            //PRINCIPAL DIAGONAL Victory
            if (grid[i][j] == player) {
                if ((i + 4 < 15)&&(j+4<15)) {
                    if ((player == grid[i + 1][j+1]) && (player == grid[i + 2][j+2]) && (player == grid[i + 3][j+3]) && (player == grid[i + 4][j+4])) {
                        console.log("PDIAGONAL " + i + " " + j);
                        flag = 1;
                        break outer;
                    }
                }
            }

            //OFF DIAGONAL Victory
            if (grid[i][j] == player) {
                if ((i + 4 < 15) && (j - 4 >= 0)) {
                    if ((player == grid[i + 1][j - 1]) && (player == grid[i + 2][j - 2]) && (player == grid[i + 3][j - 3]) && (player == grid[i + 4][j - 4])) {
                        console.log("ODIAGONAL " + i + " " + j);
                        flag = 1;
                        break outer;
                    }
                }
            }
        }
    }
    if (flag == 1) return true;
    else return false;
}

//Update x Cell
function xUpdate(cellid) {
    audio1.play();
    document.getElementById(cellid).style.backgroundImage = "url('/images/whitex.svg')";
    document.getElementById(cellid).style.backgroundSize = "cover";
    console.log("FIRST");
}

//Update o Cell
function oUpdate(cellid) {
    audio2.play();
    document.getElementById(cellid).style.backgroundImage = "url('/images/whiteo.svg')";
    document.getElementById(cellid).style.backgroundSize = "cover";
    console.log("SECOND");
}

//Update view
