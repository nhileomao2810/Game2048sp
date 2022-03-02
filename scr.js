function tao()
{
    var soRand = Math.random();
    soRand = soRand.toString();
    var soNumber = Number(soRand[soRand.length - 1]);
    return(soNumber);
}

var idBox, idCss;
var arrX = [3, 0, 0, 0, 0, 3, 3], arrBos;
var x, y, HiHi, slBox;
var slGame = 0;
var rtArr;

var arrTwo = [[0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0]];

var arrThr = [[0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0]];

function setGame()
{
    slGame = 0;
    arrTwo =   [[0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]];
    arrBox();
}

function artArr()
{
    for (var u = 1; u < 5; u++)
    {
        for (var v = 1; v < 5; v++)
        {
            idBox = (u-1) * 4 + v;
            idCss = idBox.toString();
            if (arrTwo[u][v] == 0)
            {
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(182, 186, 231)";
                var xetText = document.querySelector('.text' + idCss);
                // console.log(xetText);
                xetText.innerText = "";
            }
            if (arrTwo[u][v] != 0)
            {
                var xetText = document.querySelector('.text' + idCss);
                xetText.innerText = arrTwo[u][v];
            }
            if (arrTwo[u][v] == 2)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(209, 155, 155)";
            }
            if (arrTwo[u][v] == 4)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(154, 213, 206";
            }
            if (arrTwo[u][v] == 8)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(120, 216, 238)";
            }
            if (arrTwo[u][v] == 16)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(143, 137, 218)";
            }
            if (arrTwo[u][v] == 32)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(220, 133, 231)";
            }
            if (arrTwo[u][v] == 64)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(172, 238, 172)";
            }
            if (arrTwo[u][v] == 128)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(224, 221, 135)";
            }
            if (arrTwo[u][v] == 256)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(174, 235, 140)";
            }
            if (arrTwo[u][v] == 512)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(172, 238, 220)";
            }
            if (arrTwo[u][v] == 1024)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(172, 210, 238)";
            }
            if (arrTwo[u][v] == 2048)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(82, 172, 238)";
            }
            if (arrTwo[u][v] == 4096)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(228, 172, 238)";
            }
            if (arrTwo[u][v] == 8192)
            {  
                var xet = document.getElementById(idCss);
                xet.style.backgroundColor = "rgb(238, 172, 188)";
            }
        }
    }
}

function ktoArr()
{
    for (var zX = 1; zX < 5; zX++)
    {
        for (var zY = 1; zY < 5; zY++)
        {
            if (arrThr[zX][zY] != arrTwo[zX][zY])
            {
                return(28);
                break;
            }
        }
    }
    if (slGame == 0)
    {
        slGame = 10;
        rtArr = 28;
    }
    else
    {
        rtArr = 10;
    }
    return(rtArr);
}


function arrBox()
{
    var ktxArr = ktoArr();
    slBox = 0;
    for (var r = 1; r < 5; r++)
    {
        for (var e = 1; e < 5; e++)
        {
            if (arrTwo[r][e] != 0)
            {
                slBox += 1;
            }
        }
    }
    x = tao();
    y = tao();
    if (slBox < 16 && ktxArr == 28)
    {
        while (x > 4 || x < 1 || y > 4 || y < 1 || arrTwo[x][y] != 0)
        {
            x = tao();
            y = tao();
        }
        HiHi = tao();
        if (HiHi < 3)
        {
            arrTwo[x][y] = 4;
        }
        else
        {
            arrTwo[x][y] = 2;
        }
    }

    artArr();
    kTr = 10;
    for (var r = 1; r < 5; r++)
    {
        for (var e = 1; e < 5; e++)
        {
            if (arrTwo[r][e] == arrTwo[r+1][e])
            {
                kTr = 28;
            }
            if (arrTwo[r][e] == arrTwo[r][e+1])
            {
                kTr = 28;
            }
            if (arrTwo[r][e] == arrTwo[r-1][e])
            {
                kTr = 28;
            }
            if (arrTwo[r][e] == arrTwo[r][e-1])
            {
                kTr = 28;
            }
        }
    }
    if (kTr == 10)
    {
        artArr();
        console.log("thua");
        setTimeout(() => {
            alert("Thua rồi bạn à!");
            setGame();
        }, 500);
    }
}


function Tren()
{
    for (var sX = 1; sX < 5; sX++)
    {
        for (var sY = 1; sY < 5; sY++)
        {
            arrThr[sX][sY] = arrTwo[sX][sY];
        }
    }
    arrX = [3, 0, 0, 0, 0, 3, 3];
    for (var i = 1; i < 5; i++)
    {
        for (var t = 1; t < 5; t++)
        {
            arrX[t] = arrTwo[t][i];
        }


        var xT = 1, yT = 1;
        arrBos = [0, 0, 0, 0, 0];
        while (xT < 5)
        {
            if (yT > 5)
            {
                yT = 5;
            }
            while (arrX[yT] == 0)
            {
                yT += 1;
            }
            if (arrX[yT] == 3)
            {
                arrBos[xT] = 0;
            }
            else
            {
                arrBos[xT] = arrX[yT];
            }
            xT++;
            yT++;
        }
        
        for (var t = 1; t < 5; t++)
        {
            arrX[t] = arrBos[t];
        }


        for (var t = 1; t < 4; t++)
        {
            if (arrX[t] == arrX[t+1] && arrX[t] != 0)
            {
                arrX[t] += arrX[t];
                arrX[t+1] = 0;
            }
        }
        var K, H;
        K = 1;
        H = 1;
        while (H < 5)
        {
            if (K > 5)
            {
                K = 5;
            }
            while (arrX[K] == 0)
            {
                K += 1;
            }
            if (arrX[K] == 3)
            {
                arrTwo[H][i] = 0;
            }
            else
            {
                arrTwo[H][i] = arrX[K];
            }
            K += 1;
            H += 1;
        }
    }
    // console.log("Tren");
    arrBox();
}

function Duoi()
{
    for (var sX = 1; sX < 5; sX++)
    {
        for (var sY = 1; sY < 5; sY++)
        {
            arrThr[sX][sY] = arrTwo[sX][sY];
        }
    }
    arrX = [3, 0, 0, 0, 0, 3, 3];
    for (var i = 1; i < 5; i++)
    {
        for (var t = 1; t < 5; t++)
        {
            arrX[t] = arrTwo[t][i];
        }

        var xT = 4, yT = 4;
        arrBos = [0, 0, 0, 0, 0];
        while (xT > 0)
        {
            if (yT < 0)
            {
                yT = 0;
            }
            while (arrX[yT] == 0)
            {
                yT -= 1;
            }
            if (arrX[yT] == 3)
            {
                arrBos[xT] = 0;
            }
            else
            {
                arrBos[xT] = arrX[yT];
            }
            xT--;
            yT--;
        }

        
        for (var t = 1; t < 5; t++)
        {
            arrX[t] = arrBos[t];
        }


        for (var t = 4; t > 1; t--)
        {
            if (arrX[t] == arrX[t-1] && arrX[t] != 0)
            {
                arrX[t] += arrX[t];
                arrX[t-1] = 0;
            }
        }
        var K, H;
        K = 4;
        H = 4;
        while (H > 0)
        {
            if  (K < 0)
            {
                K = 0;
            }
            while (arrX[K] == 0)
            {
                K -= 1;
            }
            if (arrX[K] == 3)
            {
                arrTwo[H][i] = 0;
            }
            else
            {
                arrTwo[H][i] = arrX[K];
            }
            K -= 1;
            H -= 1;
        }
    }
    // console.log("Duoi");
    arrBox();
}

function Trai()
{
    for (var sX = 1; sX < 5; sX++)
    {
        for (var sY = 1; sY < 5; sY++)
        {
            arrThr[sX][sY] = arrTwo[sX][sY];
        }
    }
    arrX = [3, 0, 0, 0, 0, 3, 3];
    for (var i = 1; i < 5; i++)
    {
        for (var t = 1; t < 5; t++)
        {
            arrX[t] = arrTwo[i][t];
        }

        var xT = 1, yT = 1;
        arrBos = [0, 0, 0, 0, 0];
        while (xT < 5)
        {
            if (yT > 5)
            {
                yT = 5;
            }
            while (arrX[yT] == 0)
            {
                yT += 1;
            }
            if (arrX[yT] == 3)
            {
                arrBos[xT] = 0;
            }
            else
            {
                arrBos[xT] = arrX[yT];
            }
            xT++;
            yT++;
        }

        for (var t = 1; t < 5; t++)
        {
            arrX[t] = arrBos[t];
        }

        
        for (var t = 1; t < 4; t++)
        {
            if (arrX[t] == arrX[t+1] && arrX[t] != 0)
            {
                arrX[t] += arrX[t];
                arrX[t+1] = 0;
            }
        }
        var K, H;
        K = 1;
        H = 1;
        while (H < 5)
        {
            if (K > 5)
            {
                K = 5;
            }
            while (arrX[K] == 0)
            {
                K += 1;
            }
            if (arrX[K] == 3)
            {
                arrTwo[i][H] = 0;
            }
            else
            {
                arrTwo[i][H] = arrX[K];
            }
            K += 1;
            H += 1;
        }
    }
    // console.log("Trai");
    arrBox();
}

function Phai()
{
    for (var sX = 1; sX < 5; sX++)
    {
        for (var sY = 1; sY < 5; sY++)
        {
            arrThr[sX][sY] = arrTwo[sX][sY];
        }
    }
    arrX = [3, 0, 0, 0, 0, 3, 3];
    for (var i = 1; i < 5; i++)
    {
        for (var t = 1; t < 5; t++)
        {
            arrX[t] = arrTwo[i][t];
        }

        var xT = 4, yT = 4;
        arrBos = [0, 0, 0, 0, 0];
        while (xT > 0)
        {
            if (yT < 0)
            {
                yT = 0;
            }
            while (arrX[yT] == 0)
            {
                yT -= 1;
            }
            if (arrX[yT] == 3)
            {
                arrBos[xT] = 0;
            }
            else
            {
                arrBos[xT] = arrX[yT];
            }
            xT--;
            yT--;
        }

        
        for (var t = 1; t < 5; t++)
        {
            arrX[t] = arrBos[t];
        }


        for (var t = 4; t > 1; t--)
        {
            if (arrX[t] == arrX[t-1] && arrX[t] != 0)
            {
                arrX[t] += arrX[t];
                arrX[t-1] = 0;
            }
        }
        var K, H;
        K = 4;
        H = 4;
        while (H > 0)
        {
            if  (K < 0)
            {
                K = 0;
            }
            while (arrX[K] == 0)
            {
                K -= 1;
            }
            if (arrX[K] == 3)
            {
                arrTwo[i][H] = 0;
            }
            else
            {
                arrTwo[i][H] = arrX[K];
            }
            K -= 1;
            H -= 1;
        }
    }
    // console.log("Phai");
    arrBox();
}





const kTop = document.querySelector('.top');
const kBot = document.querySelector('.bot');
const kLeft = document.querySelector('.left');
const kRight= document.querySelector('.right');


arrBox();

kTop.addEventListener('click', Tren);
kBot.addEventListener('click', Duoi);
kLeft.addEventListener('click', Trai);
kRight.addEventListener('click', Phai);