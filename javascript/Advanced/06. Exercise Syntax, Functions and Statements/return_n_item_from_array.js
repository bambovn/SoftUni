function nElement(list, index) {
    let loop_end = list.length

    let result = []
    for (let i = 0; i < loop_end; i += index) {

        result.push(list[i])
    }

    console.log(result)
    console.log(typeof (result))

}

nElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)
nElement(['dsa',
    'asd',
    'test',
    'tset'],
    2
)

nElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6
)