function MathOperations(first_number, second_number, operation) {

    let result;

    switch (operation) {

        case '+': result = first_number + second_number; break;
        case '-': result = first_number - second_number; break;
        case '/': result = first_number / second_number; break;
        case '*': result = first_number * second_number; break;
        case '%': result = first_number % second_number; break;
        case '**': result = first_number ** second_number; break;

    }

    console.log(result)
}

MathOperations(5, 6, '+')
MathOperations(3, 5.5, '*')