function SumNumbers(str1, str2) {


    let start_number = Number(str1)
    let end_number = Number(str2)
    let result = 0;

    for (let i = start_number; i <= end_number; i++) {
        result += i
    }
    console.log(result)
}


SumNumbers('1', '5')
SumNumbers('-8', '20')