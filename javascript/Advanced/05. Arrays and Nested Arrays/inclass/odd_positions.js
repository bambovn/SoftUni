`
function solve(numbers){



    const oddNums = numbers.filter((v, i) => i % 2== 1)
    const double = oddNums.map(x => x * 2)
    double.reverse()

    console.log(double.join(' '))

}


solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])


`




function solve(numbers){



    const oddNums = numbers.filter((v, i) => i % 2== 1)
    const double = oddNums.map(x => x * 2)
    double.reverse()

    console.log(double.join(' '))

}


solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])