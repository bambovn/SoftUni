/**
 * 
 * @param {Array} arr 
 */


function solve(arr) {

    let biggest = Number.MIN_SAFE_INTEGER

    let result = arr.filter((el) => {
        if (el >= biggest) {
            biggest = el
            return true
        } else {
            return false
        }


    })

    return result

}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)
solve([1,
    2,
    3,
    4]
)

solve([20,
    3,
    2,
    15,
    6,
    1]
)