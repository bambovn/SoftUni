/**
 * 
 * @param {Array} matrix 
 */

function search(matrix) {

    let count = 0
    let colCount = matrix[0].length
    let rolCount = matrix.length


    for (let c = 0; c < rolCount; c++) {
        for (let r = 0; r < colCount; r++) {
            //console.log(matrix[c][r])
            if (r === colCount || c === rolCount - 1) {
                if (matrix[c][r] == matrix[c][r + 1]) {
                    count++
                    //console.log(matrix[c][r], matrix[c][r + 1])
                }
                continue
            } else {
                let a = matrix[c][r]
                let b = matrix[c][r + 1]
                if (matrix[c][r] == matrix[c][r + 1]) {
                    count++
                    //console.log(matrix[c][r], matrix[c][r + 1])
                }
                if (matrix[c][r] == matrix[c + 1][r]) {
                    //console.log(matrix[c][r], matrix[c + 1][r])
                    count++
                }

            }
            //console.log(c ,r)
        }
    }


    return count

}

console.log(search([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]
))


console.log(search([['2', '3', '4', '7', '0'],
                    ['4', '0', '5', '3', '4'],
                    ['2', '3', '5', '4', '2'],
                    ['9', '8', '7', '5', '4']]
))
console.log(search([['test', 'yes', 'yo', 'ho'],
                    ['well', 'done', 'yo', '6'],
                    ['not', 'done', 'yet', '5']]
))

