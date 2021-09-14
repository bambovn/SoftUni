function previousDate(year, month, day){
    const date = new Date(year, month - 1, day)
    console.log('First', date)
    const resultDate = new Date()
    const millisecs = 1000 * 60 * 60 * 24
    resultDate.setTime(date.getTime() - millisecs)
    console.log('result', resultDate)
}


previousDate(2016, 9, 30)
previousDate(2016, 10, 1)



function getPreviousDay(year, month, day) {
    let today = new Date(year, month - 1, day);
    let yesterday = new Date(today);
 
    yesterday.setDate(yesterday.getDate() - 1)
 
    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`)
}
 
getPreviousDay(2016, 9, 30);
getPreviousDay(2016, 10, 1);

