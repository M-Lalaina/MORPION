// Récupérer les éléùents du DOM

let items = [...document.getElementsByClassName("grid-item")];
let YOU = document.getElementById("YOU");
let CPU = document.getElementById("CPU");
let myScore = document.getElementById("my-score");
let pcScore = document.getElementById("pc-score");
let restartGame = document.getElementsByClassName("restart-game");

/*valeur par défaut des éléments*/

let state = {
    joueurEnCours: 1,
    You: 0, //score du joueur
    pC: 0, // score du CPU
    i1: 0,
    i2: 0,
    i3: 0,
    i4: 0,
    i5: 0,
    i6: 0,
    i7: 0,
    i8: 0,
    i9: 0,
};

/**fonction reset
 * Recommence le jeu,
 * Vide toutes les cases et remet la valeur 0,
 */
const resetAllItems = () => {
    state.i2 = 0;
    state.i3 = 0;
    state.i4 = 0;
    state.i5 = 0;
    state.i6 = 0;
    state.i7 = 0;
    state.i8 = 0;
    state.i9 = 0;
};

//possibilités de victoires

const verifyIfWinOrLose = () => {
    if (
        (state.i1 == state.i2 && state.i2 == state.i3 && state.i1 > 0) ||
        (state.i1 == state.i4 && state.i4 == state.i7 && state.i1 > 0) ||
        (state.i1 == state.i5 && state.i5 == state.i9 && state.i1 > 0) ||
        (state.i2 == state.i5 && state.i5 == state.i8 && state.i2 > 0) ||
        (state.i3 == state.i6 && state.i6 == state.i9 && state.i3 > 0) ||
        (state.i4 == state.i5 && state.i5 == state.i6 && state.i4 > 0) ||
        (state.i7 == state.i8 && state.i8 == state.i9 && state.i7 > 0)
    ) {
        return true;
    } else if (
        state.i1 !== 0 &&
        state.i2 !== 0 &&
        state.i3 !== 0 &&
        state.i4 !== 0 &&
        state.i5 !== 0 &&
        state.i6 !== 0 &&
        state.i7 !== 0 &&
        state.i8 !== 0 &&
        state.i9 !== 0
    ) {
        return null;
    } else {
        return false;
    }
};

// Fonctions qui se joue lorsqu'un joueur clique sur une des cases

const jouerCase = (e) => {
    let idItem = e.target.id;

    /* console.log(e);*/ // affiche tout les évènements possible danas chaque case

    //console.log(idItem); // récupère les 'id' des case

    if (state[idItem] !== 0) return;

    state[idItem] = state.joueurEnCours;

    let WinTheGame = verifyIfWinOrLose();

    if (WinTheGame === true) {
        /******s'il ya un gagnant : (soit 'YOU', soit 'CPU')******/
        if (state.joueurEnCours == 1) {
            alert("Congrats You win the game! ");
            //si le gagnant est 'YOU'
            state.Me++;
            myScore.textContent = state.Me;
        } else {
            alert("Oups, You lose!. ");
            //si le gagnant est'CPU'
            state.pC++;
            pcScore.textContent = state.pC;
        }
        resetAllItems();
        items.forEach((c) => (c.textContent = "")); //pour vider le contenu des cases
    } else if (WinTheGame === null) {
        /******si le match est null******/
        alert("Match null");
        resetAllItems();
        items.forEach((c) => (c.textContent = ""));
    } else if (WinTheGame === false) {
        /******Un coup Simple (on ne peut pas encore det s'y a un gagnant ou pas) ******/
        if (state.joueurEnCours === 1) {
            e.target.textContent = "X";
            state.joueurEnCours = 2;
        } else {
            e.target.textContent = "O";
            state.joueurEnCours = 1;
        }
        resetAllItems();
        items.forEach((c) => (c.textContent = ""));
    }
};

items.forEach((el) => {
    el.addEventListener("click", jouerCase);
});
