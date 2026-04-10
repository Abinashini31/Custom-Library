"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = filter;
function filter(fn, arr) {
    if (!arr)
        return [];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
