// Récupération des cases à clicker
let items = [...document.getElementsByClassName("grid-item")];
let myScore = document.getElementById("my-score");
let pcScore = document.getElementById("pc-score");
let currentResult = document.getElementsByClassName("current-result");
let item1 = document.getElementById("i1");
let item2 = document.getElementById("i2");
let item3 = document.getElementById("i3");
let item4 = document.getElementById("i4");
let item5 = document.getElementById("i5");
let item6 = document.getElementById("i6");
let item7 = document.getElementById("i7");
let item8 = document.getElementById("i8");
let item9 = document.getElementById("i9");

let state = {
    yoU: 0,
    pC: 0,
    null: 0,
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

//possibilités de victoires

const WinnerOrLoser = () => {
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

//jouer une case

const clickItem = (e) => {
    let idItem = e.target.id;
    if (state[idItem] !== 0) return;

    state[idItem] = state.yoU;

    let = WinnerOrLoser();
};

items.forEach((el) => {
    el.addEventListener("click", clickItem);
});
