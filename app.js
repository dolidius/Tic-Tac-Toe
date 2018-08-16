const winPosibilities = [ ['0','1','2'], ['3','4','5'], ['6','7','8'], ['0','3','6'], ['1','4','7'], ['2','5','8'], ['0','4','8'], ['2','4','6'] ];
const Xcords = [];
const Ocords = [];

const boardPlaces = document.querySelectorAll('#board td');
const popup = document.querySelector('.popup');
const result = document.querySelector("#result");
const playAgain = document.querySelector("#playagain");
const currently = document.querySelector('.currently');

let XPlaying = true;
let OPlaying = false;

boardPlaces.forEach(boardPlace => boardPlace.addEventListener('click', tictactoe));


function tictactoe(){
    if(XPlaying){
        this.textContent = "X";
        this.removeEventListener('click', tictactoe);
        Xcords.push(this.dataset.num);
        XPlaying = false;
        OPlaying = true;
        console.log(Xcords);
    }else if(OPlaying){
        this.textContent = "O";
        this.removeEventListener('click', tictactoe);
        Ocords.push(this.dataset.num);
        XPlaying = true;
        OPlaying = false;
    }

    winPosibilities.forEach(winPosibility => {

        if(winPosibility.every(r=> Xcords.indexOf(r) >= 0)){
            popup.style.visibility = "visible";
            popup.style.opacity = "1";
            result.textContent = "PLAYER X WON";
        };

        if(winPosibility.every(r=> Ocords.indexOf(r) >= 0)){
            popup.style.visibility = "visible";
            popup.style.opacity = "1";
            result.textContent = "PLAYER O WON";
        };

    });

    if(XPlaying){
        currently.innerHTML = "X";
    }else{
        currently.innerHTML = "O";
    }

}


playAgain.addEventListener('click', () => location.reload());