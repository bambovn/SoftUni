function mathCoocking(arg1, arg2, arg3, arg4, arg5, arg6) {
    let number = Number(arg1)
    let list = [arg2, arg3, arg4, arg5, arg6]

    for (let i = 0; i < 5; i++) {
        switch (list[i]) {
            case 'chop': number /= 2; break
            case 'dice': number = Math.sqrt(number); break
            case 'spice': number += 1; break
            case 'bake': number *= 3; break
            case 'fillet': number *= 0.8; break

        }
        console.log(number)
    }
}

//mathCoocking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
mathCoocking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')