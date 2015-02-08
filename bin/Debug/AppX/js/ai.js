
function Arti() {
    var x = grid;
    var h = Hori(x);
    //console.log(h);
    if (h != 0) {
        amove(2, h[0] * 15 + h[1]);
    }
    else {
        var v = Vert(x);
        if (v != 0) {
            amove(2, v[1] * 15 + v[0]);
        }
        else {
            var d = Diag();
            if (d != 0) {
                console.log(d);
                amove(2, d[0] * 15 + d[1]);
            }
            else {
                var r = rand();
                amove(2, r[0] * 15 + r[1]);
            }
        }
    }
}
function Hori(gr) {
    var c = 0, pos = 0, test, ig, n = 0, flag, ret;
    ig = new Array(100);
    //Horizontal
    Outer:
        for (var i = 0; i < 15; i++) {
            Middle:
                for (var j = 0; j < 12; j++) {
                    if ((gr[i][j] != 1)) {
                        continue Middle;
                    }
                    //Ignoring
                    for (var a = 0; a < n; a++) {
                        if ((ig[a][0] <= (i * 15 + j)) && (ig[a][1] >= (i * 15 + j)))
                            continue Middle;
                    }
                    test = [gr[i][j], gr[i][j + 1], gr[i][j + 2], gr[i][j + 3], gr[i][j + 4]];
                    //Counting
                    c = 0; pos = 5, flag = 0;
                    if (gr[i][j - 1] == 2)
                        flag = 1;
                    for (var k = 0; k < 5; k++) {
                        //console.log(i+"  "+j+"  "+flag + "  " + test[k]);
                        if (test[k] == 1)
                            c++;
                        else if ((flag == 1) && (test[k] == 2)) {
                            ig[n] = new Array(2);
                            ig[n][0] = i * 15 + j - 1;
                            ig[n][1] = i * 15 + j + k;
                            //console.log(ig[n][0] + "  " + ig[n][1]);
                            n++;
                        }
                        else {
                            if (pos == 5)
                                pos = k;
                        }

                    }
                    //Good Move Search
                    if ((c == 4)) {
                        //console.log(i+"  "+j+"  "+test[1]);
                        if (gr[i][j + pos] == 0) {
                            if ((j + pos) <= 14) {
                                ret = new Array(2);
                                ret[0] = i;
                                ret[1] = j + pos;
                                return ret;
                            }
                        }
                        else if ((test[1] == 2)) { //&& (test[4] == 1)) {
                            //console.log("Special");
                            if (gr[i][j + 5] == 0) {
                                ret = new Array(2);
                                ret[0] = i;
                                ret[1] = j + 5;
                                return ret;
                            }
                        }
                        else if (gr[i][j - 1] == 0) {
                            //console.log(pos);
                            if (j > 0) {
                                ret = new Array(2);
                                ret[0] = i;
                                ret[1] = j - 1;
                                return ret;
                            }
                        }
                        else if (gr[i][j - 1] == 0) {
                            //console.log(pos);
                            if (j > 0) {
                                ret = new Array(2);
                                ret[0] = i;
                                ret[1] = j - 1;
                                return ret;
                            }
                        }
                    }
                    if (c == 3) {
                        //console.log(i + " " + j + " " + c1 + " " + pos);
                        if (test[4] == 1) {
                            //console.log(i + " " + j + "test[4]");
                            continue;
                        }
                        else if ((test[3] == 1) && (gr[i][j + pos] == 0)) {
                            ret = new Array(2);
                            ret[0] = i;
                            ret[1] = j + pos;
                            return ret;
                        }
                        else if ((test[2] == 1) && (gr[i][j + 3] == 0)) {
                            ret = new Array(2);
                            ret[0] = i;
                            ret[1] = j + 3;
                            return ret;
                        }
                        else
                            continue Middle;

                    }
                }
        }
    return 0;
}
function Vert(gr) {
    var temp = new Array(15);
    for (var i = 0; i < 15; i++) {
        temp[i] = new Array(15);
        for (var j = 0; j < 15; j++) {
            temp[i][j] = gr[j][i];
        }
    }
    var x = Hori(temp)
    //console.log(x);
    if (x != 0) {
        return x
    }
    else {
        return 0;
    }
}
function Diag() {
    var a = 0, b = 0, p = 0, q = 0;
    var ctr = 1;

    //diagonal blocking
    var x = 0; var y = 0;
    var flag = 0;
    /* for (i = 0; i<=3;i++){
         four(i) == 0;
         if (i < 3)
             thr(i) == 0;
     }*/

    for (var m = 0; m < 11; m++) {
        i = 10 - m; j = 0;
        x = 0; y = 0;
        //console.log("entry");
        while (i < 13) {



            if (grid[i][j] == 1 && grid[i + 1][j + 1] == 1 && grid[i + 2][j + 2] == 1) {
                if (grid[i - 1][j - 1] == 0)
                { p = i - 1; q = j - 1; flag = 1; }//return 0; }
                if (grid[i + 3][j + 3] == 0)
                { p = i + 3; q = j + 3; flag = 1; }//return 0; }
                else if (grid[i - 1][j - 1] == 2 || grid[i - 1][j - 1] == 2)
                { flag = 0; break; }
            }
            if (grid[i][j] == 1 && grid[i + 1][j + 1] == 0 && grid[i + 2][j + 2] == 1) {

                p = i + 1; q = j + 1; flag = 1; //return 0;
            }
            if (grid[i][j] == 1 && grid[i + 1][j + 1] == 1 && grid[i + 2][j + 2] == 0) {
                p = i + 2; q = j + 2; flag = 1; //return 0;
            }


            i++; j++;
        }
    }
    if (flag == 0) {
        for (var n = 0; n < 11; n++) {
            i = 0; j = 10 - n;
            x = 0; y = 0;
            //console.log("entry1");
            while (j < 13) {
                //console.log(i); console.log(j);


                if (grid[i][j] == 1 && grid[i + 1][j + 1] == 1 && grid[i + 2][j + 2] == 1) {
                    if (grid[i - 1][j - 1] == 0)
                    { p = i - 1; q = j - 1; flag = 1; }// return 0; }
                    if (grid[i + 3][j + 3] == 0)
                    { p = i + 3; q = j + 3; flag = 1; }// return 0; }
                    else if (grid[i - 1][j - 1] == 2 || grid[i - 1][j - 1] == 2)
                    { flag = 0; break; }
                }
                if (grid[i][j] == 1 && grid[i + 1][j + 1] == 0 && grid[i + 2][j + 2] == 1) {

                    p = i + 1; q = j + 1; flag = 1;// return 0;
                }
                if (grid[i][j] == 1 && grid[i + 1][j + 1] == 1 && grid[i + 2][j + 2] == 0) {
                    p = i + 2; q = j + 2; flag = 1;// return 0;
                }


                i++; j++;

            }
        }

    }

    for (var m = 0; m < 11; m++) {
        i = 0; j = 4 + m;
        x = 0; y = 0;
        //console.log("entry");
        while (j > 1) {



            if (grid[i][j] == 1 && grid[i + 1][j - 1] == 1 && grid[i + 2][j - 2] == 1) {
                if (i != 0) {
                    if (grid[i - 1][j + 1] == 0)
                    { p = i - 1; q = j + 1; flag = 1; }// return 0; }

                    if (grid[i + 3][j - 3] == 0)
                    { p = i + 3; q = j - 3; flag = 1; }// return 0; }
                    else if (grid[i - 1][j - 1] == 2 || grid[i - 1][j - 1] == 2)
                    { flag = 0; break; }
                }
            }
            if (grid[i][j] == 1 && grid[i + 1][j - 1] == 0 && grid[i + 2][j - 2] == 1) {

                p = i + 1; q = j - 1; flag = 1;// return 0;
            }
            if (grid[i][j] == 1 && grid[i + 1][j - 1] == 1 && grid[i + 2][j - 2] == 0) {
                p = i + 2; q = j - 2; flag = 1;// return 0;
            }


            i++; j--;
        }


    }

    if (flag == 0) {
        for (var n = 0; n < 11; n++) {
            i = 10 - n; j = 14;
            x = 0; y = 0;
            //console.log("entry1");
            while (i < 13) {
                //console.log(i); console.log(j);


                if (grid[i][j] == 1 && grid[i + 1][j - 1] == 1 && grid[i + 2][j - 2] == 1) {
                    if (i != 0) {
                        if (grid[i - 1][j + 1] == 0)
                        { p = i - 1; q = j + 1; flag = 1; }// return 0; }
                        if (grid[i + 3][j - 3] == 0)
                        { p = i + 3; q = j - 3; flag = 1; }// return 0; }
                        else if (grid[i - 1][j + 1] == 2 || grid[i - 1][j + 1] == 2)
                        { flag = 0; break; }
                    }
                }
                if (grid[i][j] == 1 && grid[i + 1][j - 1] == 0 && grid[i + 2][j - 2] == 1) {

                    p = i + 1; q = j - 1; flag = 1;// return 0;
                }
                if (grid[i][j] == 1 && grid[i + 1][j - 1] == 1 && grid[i + 2][j - 2] == 0) {
                    nextmove(i + 2, j - 2); flag = 1;// return 0;
                }


                i++; j--;

            }
        }

    }
    if (flag == 0)
        return 0;
    else {
        if (grid[p][q] == 0) {
            //console(p+"  "+q+"  "+grid)
            ret = new Array(2);
            ret[0] = p;
            ret[1] = q;
            return ret;
        }
    }
}
function nextmove(p, q) {
    var ret;
    var cell = 15 * p + q;
    //console.log(p + "  " + q + "  " + grid);
    if (grid[p][q] == 0) {
        //console(p+"  "+q+"  "+grid)
        ret = new Array(2);
        ret[0] = p;
        ret[1] = q;
        return ret;
    }
    else
        return 0;
}

function rand() {
    //console.log("random");
    do {
        var ran = Math.floor(Math.random() * 225) + 1;
        var ret;
        console.log("Random " + ran);
        var a = Math.floor(ran / 15);
        var b = ran % 15;
        //console.log(a + "  " + b + "  " + grid[a][b]);
        if (grid[a][b] == 0) {
            //console(a + "  " + b + "  " + grid[a][b]);
            ret = new Array(2);
            ret[0] = a;
            ret[1] = b;
            console.log(ret);
            return ret;
        }
    } while (true)
}



