"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = reduce;
function reduce(fn, initial, arr) {
    if (!arr)
        return initial;
    let acc = initial;
    for (let i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i], i, arr);
    }
    return acc;
}
