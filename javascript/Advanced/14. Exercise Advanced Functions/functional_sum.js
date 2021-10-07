function solve(num){
    let sum  = num;

    function add(num2) {
        sum += num2
        return add
    }

    add.toString = () => {
        return sum
    } 
    return add

}

console.log(solve(3)(4).toString())