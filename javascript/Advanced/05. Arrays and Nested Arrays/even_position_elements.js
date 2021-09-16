/**
 * 
 * @param {Arrey} user_input 
 */


function search(user_input){
    let loop_end = user_input.length

    let result = []
    for (let i = 0; i < loop_end; i++){
        if (i % 2 ==0){
            result += user_input[i] + ' '
        }
    }
    console.log(result)

}

search(['20', '30', '40', '50', '60'])
search(['5', '10'])