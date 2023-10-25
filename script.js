var canvas = document.getElementById("myCanvas");var ctx = canvas.getContext("2d");
var canvasg = document.getElementById("CanvasGame");var ctxg = canvasg.getContext("2d");
var canvasg2 = document.getElementById("CanvasGame2");var ctxg2 = canvasg2.getContext("2d");
var Diff = "Könnyű"
var mode = 5;
function DiffChange(input,v){
    if(input.classList.contains("AktivDiff") == false){
        document.getElementsByClassName('AktivDiff')[0].classList.remove("AktivDiff");
        input.classList.add("AktivDiff");
        Diff = input.value;
    }
    mode = v;
}

function Inditas(){
    setTimeout(BezarDiff,400);
    console.log(Diff,mode);
    canvas.style.opacity = 1;
    canvasg.style.opacity = 1;
    canvasg2.style.opacity = 1;
    generate();
}

function BezarDiff(){
    document.getElementById('DifficultySet').classList.remove('SetAktiv');
}

function KinyilDiff(){
    document.getElementById('DifficultySet').classList.add('SetAktiv');
}

function Main(){
    setTimeout(KinyilDiff,400);
}
Main();

var r = Math.floor(Math.random() * 2);var positions = [];var placed = [];
function generate(){
    if(r == 0){negyzet(mode)
    }else{canvas.className = "circle";canvasg.className = "circle";canvasg2.className = "circle";kor(mode);}
}
function load(){
    setTimeout(function(){    
        if(r == 0){ctxg.beginPath();ctxg.rect(0, 0, 600, 600);ctxg.stroke();
        }else{ctxg.beginPath();var center_x = 300;var center_y = 300;var radius = 300;ctxg.arc(center_x, center_y, radius, 0, 2 * Math.PI);ctxg.stroke();}
        if(r == 0){ctxg2.beginPath();ctxg2.rect(0, 0, 600, 600);ctxg2.stroke();
        }else{ctxg2.beginPath();var center_x = 300;var center_y = 300;var radius = 300;ctxg2.arc(center_x, center_y, radius, 0, 2 * Math.PI);ctxg2.stroke();}   
    },1000)

    canvasg.addEventListener('click', event =>
    {
        if (inhand != -1){
            var rect = canvasg.getBoundingClientRect();
            let x = event.clientX -rect.left;
            let y = event.clientY -rect.top;
            document.onmousemove = null;
            placed.push([x-1,y-1,inhand]);
            document.getElementById("tmp").id = "placed";
            inhand = -1;
            if(placed.length == positions.length){
                Ertekeles();
            }
        }
    }); 
}
var kulonbseg = 0;
function Ertekeles(){
    for (let index = 0; index < positions.length; index++) {        
        var asd = [];
        var tmp = placed.filter((x) => x[2] == positions[index][2]);
        var tmp2 = positions.filter((x) => x[2] == positions[index][2]);
        for (let i = 0; i < tmp.length; i++) {
            for (let i2 = 0; i2 < tmp2.length; i2++) {
                asd.push([i,i2,Math.sqrt((Math.pow(tmp[i][0]-tmp2[i2][0],2)+Math.pow(tmp[i][1]-tmp2[i2][1],2)))]);
            }
        }

        asd.map
        console.log(asd); 
    }
}
function negyzet(nehezseg){
    ctx.beginPath();ctx.rect(0, 0, 600, 600);ctx.stroke();
    function drawPoint(x,y){
        var path = "ph/"+ Math.floor(Math.random() * 10)+".png";const img = new Image();img.src = path;
        ctx.beginPath();ctx.drawImage(img, x, y,80,80);ctx.fill();positions.push([x,y,path]);
    }
    var c = 0;var draw = setInterval(function(){drawPoint(Math.floor(Math.random() * 540),Math.floor(Math.random() * 540));c++;if (c == nehezseg) {canvas.classList.add("generated");load();clearInterval(draw);}},300)
}
function kor(nehezseg){
    ctx.beginPath();var center_x = 300;var center_y = 300;var radius = 300;ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);ctx.stroke();
    function drawPoint(angle,distance){
        var x = (center_x + radius * Math.cos(-angle*Math.PI/180) * distance)-30;var y = (center_y + radius * Math.sin(-angle*Math.PI/180) * distance)-30;
        var path = "ph/"+ Math.floor(Math.random() * 10)+".png";const img = new Image();img.src = path;
        ctx.beginPath();ctx.drawImage(img, x, y,80,80);ctx.fill();positions.push([x,y,path]);
    }
    var c = 0;var draw = setInterval(function(){drawPoint(Math.floor(Math.random() * 360),Math.floor(Math.random() * 10)/10);c++;if (c == nehezseg) {canvas.classList.add("generated");load();clearInterval(draw);}},300)
}
var inhand = -1;
function Valaszt(png){
    console.log(png);
    if(document.getElementById("tmp") != undefined){document.getElementById("tmp").remove();}
    var tmp = document.createElement("img");
    tmp.src ="ph/"+ png +".png";
    tmp.width = 80;
    tmp.height = 80;
    tmp.style.position ="absolute";
    document.body.append(tmp);
    tmp.id = "tmp";
    tmp.style.top ="-100px";
    inhand = "ph/"+ png +".png";
    tmp.style.zIndex ="-3";
    document.onmousemove = update;
    function update( e )
    {
        var avatar = document.getElementById("tmp");
        avatar.style.left = e.x+1 + "px";
        avatar.style.top = e.y+1 + "px";
    }
}