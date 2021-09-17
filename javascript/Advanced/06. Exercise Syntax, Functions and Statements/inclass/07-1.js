/**
 * 
 * @param {Array} arr 
 */

function solve(arr) {

    arr = arr.sort((a, b) => a - b)

    let result = []

    while (arr.length != 0) {

        result.push(arr.shift(), arr.pop())

    }

    return result

}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
solve([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48])