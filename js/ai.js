var trans = new Array(15);
for (var i = 0; i < 15; i++) {
    trans[i] = new Array(15);
}

var score = new Array(15);
for (var i = 0; i < 15; i++) {
    score[i] = new Array(15);
}

var player = 2;


function generateScore() {
    trans = grid;
    var player = 2;
    // Traversing grid
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            var ti=i;
            var tj=j;
            if (trans[i][j] == 0) {
                move(2, ((i * 15) + j));
                if (checkFinal(player)) grid[ti][tj] == 10;
                else {

                }
            }
        }
    }
}