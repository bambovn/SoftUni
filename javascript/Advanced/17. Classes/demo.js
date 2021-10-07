class Person {

    constructor(name, age) {
        this.name = name
        this.age = age

    }

    sayHello() {

        console.log(`Hello ${this.name} you are ${this.age} old.`)

    }

    static cheer(){
        console.log(`Woo hoo!`)
    }

}



const person1 = new Person('Bambi', 23)
const person2 = new Person('Nick', 36)

person1.height = 175;

person1.sayHello()
person2.sayHello()

console.log(person1)
console.log(person2)


console.log(person1 instanceof Person)


Person.cheer()