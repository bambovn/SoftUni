function radar(speed, area) {

    let speed_limit = 0

    switch (area) {
        case 'motorway': speed_limit = 130; break
        case 'intersatate': speed_limit = 90; break
        case 'city': speed_limit = 50; break
        case 'residential': speed_limit = 20; break
    }

    let over_speed = Math.abs(speed_limit - speed)
    let speed_status = ''
    if (speed_limit - speed < 0) {
            if (over_speed <= 20) {speed_status = 'speeding'}
            if (over_speed <= 40) {speed_status = 'excessive speeding'}
            if (over_speed > 40) {speed_status = 'reckless driving'}
            
        }
    }
    
    if (speed_limit - speed >= 0) {
        console.log(`Driving ${speed} km/h in a ${speed_limit} zone`)
    } else {
        console.log(`The speed is ${over_speed} km/h faster than the allowed speed of ${speed_limit} - ${speed_status}`)
    }


radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')