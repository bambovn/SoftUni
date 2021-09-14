function PreviousDay(year, month, day) {

     let yesterday = new Date(year, month, day)
     let str = String(yesterday)

     let result = str.split('')
    console.log(str)
     console.log(result)



}

PreviousDay(2016, 9, 30, 0)
PreviousDay(2016, 10, 1, 0)