/**
 * 
 * @param {Array} array 
 * @param {*} command 
 * @returns 
 */

function sorting(array, command) {
    if (command === 'asc') {
        return array.sort((a, b) => a - b)
    }
    return array.sort((a,b) => b - a)
}

solve()