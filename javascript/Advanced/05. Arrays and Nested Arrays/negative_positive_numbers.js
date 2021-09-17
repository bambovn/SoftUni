/**
 * 
 * @param {Array} user_input 
 */
function sortArray(user_input) {
    let loop_end = user_input.length
    let result = []

    for (let i = 0; i < loop_end; i++) {
        if (user_input[i] >= 0) {
            result.push(user_input[i])
        } else {
            result.unshift(user_input[i])
        }
    }


    for (let y = 0; y < loop_end; y++) {
        console.log(result[y])
    }

}

sortArray([7, -2, 8, 9])
sortArray([3, -2, 0, -1])