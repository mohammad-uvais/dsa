/**
 * @description You are given a cubic dice with 6 faces. All the individual faces have a number printed on them.
 * The numbers are in the range of 1 to 6, like any ordinary dice.
 * You will be provided with a face of this cube, your task is to guess the number on the opposite face of the cube.
 * @param {number} n
 * @returns {number}
 */

function oppositeFaceOfDice(n) {
    let oppositeFace;

    if (n === 1) {
        oppositeFace = 6;
    } else if (n === 2) {
        oppositeFace = 5;
    } else if (n === 3) {
        oppositeFace = 4;
    } else if (n === 4) {
        oppositeFace = 3;
    } else if (n === 5) {
        oppositeFace = 2;
    } else if (n === 6) {
        oppositeFace = 1;
    }

    return oppositeFace;
}

function oppositeFaceOfDice(n) {
    return 7 - n;
}

console.log(oppositeFaceOfDice(2));
console.log(oppositeFaceOfDice(6));
