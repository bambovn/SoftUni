/**
 * 
 * @param {Array} matrix 
 */

 function magicMatrix(matrix) {

    let arr = []
    let sum

    for (let r = 0; r < matrix.length; r++) {
        sum = 0
        for (let c = 0; c < matrix[r].length; c++) {
            sum += matrix[r][c]
        }
        arr.push(sum)
    }

    for (let r = 0; r < matrix.length; r++) {
        sum = 0
        for (let c = 0; c < matrix.length; c++) {
            sum += matrix[c][r]
        }
        arr.push(sum)
    }


    
    let checker = arr.filter((v, i, a) => a.indexOf(v) === i)

    if (checker.length == 1) {
        return true
    } else {
        return (false)
    }

}

console.log(magicMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
))


console.log(magicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
))

console.log(magicMatrix([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
))