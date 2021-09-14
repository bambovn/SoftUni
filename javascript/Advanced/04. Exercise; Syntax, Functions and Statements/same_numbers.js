function SameFunction(arg) {


    let str = String(arg)
    let test = str.split("")
    let loop_count = test.length

    console.log(new Set(test).size == 1)

    let sum = 0
    for (let i = 0; i < loop_count; i++) {
        sum += Number(test[i])
    }
    console.log(sum)

}

SameFunction(2222222)
SameFunction(1234)