function nElement(list, index) {
    let loop_end = list.length

    let result = []
    for (let i = 0; i < loop_end; i += index) {

        result.push(list[i])
    }

    return result

}

console.log(nElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
))
console.log(nElement(['dsa',
    'asd',
    'test',
    'tset'],
    2
))

console.log(nElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6
))