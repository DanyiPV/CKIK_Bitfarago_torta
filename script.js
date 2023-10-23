var Diff = "Könnyű"
function DiffChange(input){
    if(input.classList.contains("AktivDiff") == false){
        document.getElementsByClassName('AktivDiff')[0].classList.remove("AktivDiff");
        input.classList.add("AktivDiff");
        Diff = input.value;
    }
}

function Inditas(){
    setTimeout(BezarDiff,400);
    console.log(Diff);
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