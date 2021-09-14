function CircleArea(arg) {

    if (typeof (arg) == 'number') {

        let circle_area;
        circle_area = (arg ** 2 * Math.PI.toFixed(2))
        console.log(circle_area)

    } else {
        console.log(`We can not calculate the circle area, because we recive a ${typeof (arg)}.`)
    }
}

CircleArea('5')
CircleArea(5)