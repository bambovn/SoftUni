function LargestNumber(first_number, second_number, third_number) {
    let max_number;
    if (first_number > second_number && second_number > third_number) {
        max_number = first_number
    } else if (second_number > first_number && first_number > third_number) {
        max_number = second_number
    } else {
        max_number = third_number
    }

    console.log(`The largest number is ${max_number}.`)

}

LargestNumber(1, 2, 3)
LargestNumber(2, 1, 3)
LargestNumber(3, 2, 1)