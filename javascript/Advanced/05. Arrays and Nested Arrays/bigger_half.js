/**
 * 
 * @param {Array} user_input 
 */

function biggerHalf(user_input) {
    user_input.sort((a, b) => a - b)

    let array_lenght = Math.floor(user_input.length / 2)

    for (let i = 0; i < array_lenght; i++) {
        user_input.shift()
    }

    console.log(user_input)
    console.log(typeof(user_input))
}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])
