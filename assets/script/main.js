// Récupération des cases à clicker
let items = [...document.getElementsByClassName("grid-item")];
let player = document.getElementById("player");
let myScore = document.getElementById("my-score");
let pcScore = document.getElementById("pc-score");
let restartGame = document.getElementsByClassName("restart-game");

let state = {
    joueurEnCours: "YOU",
    Me: 0,
    pC: 0,
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

const resetAllItems = () => {
    state.i1 = 0;
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

const verifyWinOrLose = () => {
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

const jouerCase = (e) => {
    let idItem = e.target.id;

    /* console.log(e);*/ //affiche tout les évènements possible danas chaque case

    /* console.log(idItem);*/ //récupère les 'id' des case

    if (state[idItem] !== 0) return;

    state[idItem] = state.joueurEnCours;

    let WinTheGame = verifyWinOrLose();

    if (WinTheGame === true) {
        alert("Félicitation, vous avez gagné le jeu! ");
        resetAllItems();
        items.forEach((item) => (item.textContent = ""));
    } else if (WinTheGame === null) {
        alert("Match null");
        resetAllItems();
        items.forEach((item) => (item.textContent = ""));
    } else if (WinTheGame === false) {
        alert("Oups, vous avez perdu. ");
        resetAllItems();
        items.forEach((item) => (item.textContent = ""));
    }
};

items.forEach((el) => {
    el.addEventListener("click", jouerCase);
});
