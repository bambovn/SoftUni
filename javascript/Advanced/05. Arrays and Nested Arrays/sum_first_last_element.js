/**
 * 
 * @param {Array} user_input 
 */
function sumElements(user_input) {
    let arrey_lenght = user_input.length
    let sum = Number(user_input[0]) + Number(user_input[arrey_lenght - 1])
    console.log(sum)

}

sumElements(['20', '30', '40'])