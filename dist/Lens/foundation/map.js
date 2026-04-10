"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = map;
function map(fn, arr) {
    if (!arr)
        return [];
    const result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i, arr);
    }
    return result;
}
