/**
 * 
 * @param {Array} user_input 
 * @param {Array} arr
 */

function maxElement(user_input) {

    let maxEl = Number.MIN_SAFE_INTEGER

    for (let arr of user_input) {
        for (let num of arr) {
            if (num > maxEl) {
                maxEl = num
            }
        }

    }

    return maxEl

}



console.log(maxElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
))
console.log(maxElement([[20, 50, 10],
[8, 33, 145]]
))

