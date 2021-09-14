/**
 * 
 * @param {array} arg 
 */

function AggregateElements(arg){
    let sum = 0;
    let invert_sum = 0;
    let concatanet = '';
    let arg_length = arg.length
    for (let i = 0; i < arg_length; i++){
        sum +=arg[i]
        invert_sum +=1/arg[i]
        concatanet += String(arg[i])
    }

    console.log(sum)
    console.log(invert_sum)
    console.log(concatanet)
   
}

AggregateElements([1, 2, 3])
AggregateElements([2, 4, 8, 16])