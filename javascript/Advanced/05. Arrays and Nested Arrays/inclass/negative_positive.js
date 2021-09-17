function negativePositive(user_input) {

    const result = [];

    for (let num of user_input) {

        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }


        `
        for (let num of result){
            console.log(num)
        }
`
        console.log(result.join('\n'))
    }
}


negativePositive([7, -2, 8, 9])