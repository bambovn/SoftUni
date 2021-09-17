/**
 * 
 * @param {Array} arr 
 */

function solve(arr){

    let result = []
    let a = arr
    

    //arr.sort((a, b) => a - b)


    for (let i = 0; i < a.length; i+=1){
        if(i% 2 != 0){
            result.push(arr.pop(arr.sort((a, b) => a - b)))
        }else{
            result.push(arr.pop(arr.sort((a, b) => b - a)))
        }

    }
    console.log(result)

}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
solve([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48])