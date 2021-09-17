/**
 * 
 * @param {Array} user_input 
 */

function findSmallNumbers(user_input) {

    user_input.sort((a, b) => a - b)
    console.log(`${user_input[0]} ${user_input[1]}`) 
    
}

findSmallNumbers([30, 15, 50, 5])
findSmallNumbers([3, 0, 10, 4, 7, 3])