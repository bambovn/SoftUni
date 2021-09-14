function Fruit(type_fruit, wight, price){

    let total_sum = wight * price / 1000

    console.log('I need $' + total_sum.toFixed(2) + ' to buy ' + (wight/1000).toFixed(2) + ' kilograms ' + type_fruit + '.')

}


Fruit('orange', 2500, 1.80)
Fruit('apple', 1563, 2.35)