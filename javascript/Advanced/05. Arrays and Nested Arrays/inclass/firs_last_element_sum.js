function firstLast(user_input){

    let fisrt = Number(user_input.shift())
    let last = Number(user_input.pop())

    return fisrt + last

}

console.log(firstLast(['20', '30', '40']))