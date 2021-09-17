function sequence(n,k){

    let list = [1]
    let sum = 0
    result = []
    for (let i = 0; i < n; i++){
        for ( let a = 0; a < 3; a++){
            let b = list.pop()
            if (b == undefined){
                continue
            }else{
                sum += b
            }
        }
        console.log(result)
        result.push(sum)
        console.log(result)
        list = result
        console.log(list)
    }

    return result

}


console.log(sequence(6, 2))