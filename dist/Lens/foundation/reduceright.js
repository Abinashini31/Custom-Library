"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRight = reduceRight;
function reduceRight(fn, initial, arr) {
    if (!arr)
        return initial;
    let acc = initial;
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = fn(acc, arr[i], i, arr);
    }
    return acc;
}
