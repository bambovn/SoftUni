function DaysInMonth(arg1, arg2) {

    let month = arg1
    let year = arg2


    console.log(new Date(year, month, 0).getDate())

}

DaysInMonth(1, 2012)
DaysInMonth(2, 2021)