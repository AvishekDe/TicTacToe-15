// Making the grid (GLOBAL)
var grid = new Array(15);
for (var i = 0; i < 15; i++) {
    grid[i] = new Array(15);
}



//Initialize grid elements to 0
function initialize() {
    var i, j;
    for (i = 0; i < 15; i++) {
        for (j = 0; j < 15; j++) {
            grid[i][j] = 0;
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
            document.getElementById(cellid).style.backgroundImage = "url('/images/greenx.png')";
            document.getElementById(cellid).style.backgroundSize = "cover";
        }
        else {
            grid[i][j] = 2;
            document.getElementById(cellid).style.backgroundImage = "url('/images/blueo.png')";
            document.getElementById(cellid).style.backgroundSize = "cover";
        }

        return true;
    }
}