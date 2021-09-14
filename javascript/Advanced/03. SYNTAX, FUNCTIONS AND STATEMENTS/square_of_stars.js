function SquareStars(size) {

    if (typeof (size) == 'undefined') {
        console.log('* * * * *')
        console.log('* * * * *')
        console.log('* * * * *')
        console.log('* * * * *')
        console.log('* * * * *')
    } else {

        let str = '* '
        let result = str.repeat(size)
        for (let i = 0; i < size; i++) {
            console.log(result)
        }
    }
}

SquareStars()
