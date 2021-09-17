` {

    let result = ''

    for (let i = 0; i < user_input.length; i++) {

        if (i % 2 == 0) {
            result += user_input[i]
            result += ' '
        }
    }

    console.log(result)

}




function finder(user_input) {

    let result = ''

    for (let i = 0; i < user_input.length; i += 2) {

            result += user_input[i]
            result += ' '
    }

    console.log(result)
}

finder(['20', '30', '40', '50', '60'])

`


function finder(user_input) {

    let result = []

    for (let i = 0; i < user_input.length; i += 2) {

            result[result.length]= user_input[i]
            
    }

    console.log(result.join())
}

finder(['20', '30', '40', '50', '60'])