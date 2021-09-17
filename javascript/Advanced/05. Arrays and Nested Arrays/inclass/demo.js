`const myArr = [10, 20, 30, 40,];

console.log(myArr)

console.log(myArr.length)

myArr[10] = 67

console.log(myArr.length)
console.log(myArr[9])
console.log(myArr)


myArr[myArr.length] = 100
console.log(myArr)



for (let item of myArr){
    console.log(item)
}

for ( let i = 0; i< myArr.length; i++){
    console.log({i} - {myArr[i]})
}


console.log(myArr.join())


const myArr = [10, 20, 30, 40, 50, 60, 70];



const [first, second, ...rest] = myArr


console.log(first, second, rest)



function solve(...params){

    console.log(params)
    console.log(...params)
    console.log(params.join('\n'))

}

solve(1, 2, 3, 4)






const myArr = [10, 20, 30, 40, 50, 60, 70];

console.log(myArr.join(' '))


myArr.splice(1, 1)

console.log(myArr.join(' '))

myArr.splice(3, 0, 35)

console.log(myArr.join(' '))





const myArr = [8, 1, 13, 5, 3, 7];


console.log(myArr.join(' '))

myArr.sort(compareNumbers)

console.log(myArr.join(' '))


function compareNumbers(a, b) {
    return a - b;
}




const myArr = [8, 1, 13, 5, 3, 7];

myArr.sort((a,b ) => b- a)

console.log(myArr.join(' '))


`

const myArr = ['Bambi', 'Niki', 'Albena', 'goerde'];

myArr.sort((a, b) => a.localeCompare(b))

console.log(myArr.join(' '))


