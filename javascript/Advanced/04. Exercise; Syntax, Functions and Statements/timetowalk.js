function timeToWalk(arg1, arg2, arg3) {
    let steps = Number(arg1)
    let step_lenght = Number(arg2)
    let kminh = Number(arg3)

    let distance_in_meters = steps * step_lenght
    let break_time_seconds = parseInt(distance_in_meters / 500) * 60
    let walking_time_seconds = Math.ceil(distance_in_meters / 1000 / kminh * 60 * 60)
    let total_time = walking_time_seconds + break_time_seconds

    let minutes = parseInt(total_time / 60)
    let seconds = parseInt(total_time % 60)

    let hours = 0

    if (seconds >= 60) {
        minutes += 1
        seconds = seconds % 60
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    if (minutes >= 60) {
        hours += 1
        minutes = minutes % 60
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (hours < 10) {
        hours = '0' + hours
    }

    console.log(hours + ':' + minutes + ':' + seconds)


}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)