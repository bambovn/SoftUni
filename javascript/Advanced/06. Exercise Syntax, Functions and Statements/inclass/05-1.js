/**
 * 
 * @param {Array} arr 
 */


 function solve(arr) {

    let result = []
    let biggest = Number.MIN_SAFE_INTEGER

    
    arr.forEach((el) => {
        if(el >= biggest){
            result.push(el)
            biggest = el
        }
    })

    return result

}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))
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