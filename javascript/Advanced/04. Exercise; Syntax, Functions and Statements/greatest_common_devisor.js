function GreatestCommonDevisor(xf, y) {
    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}

GreatestCommonDevisor(2154, 458)