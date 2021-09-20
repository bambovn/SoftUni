/**
 * 
 * @param {Array} matrix 
 */

 function magicMatrix(matrix) {

    let arr = []
    let sum

    for ( let c = 0; c < matrix[0].length; c++){
        for (let r = 0 ; r< matrix.length; r++){
            console.log(matrix[r][c])

        }

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