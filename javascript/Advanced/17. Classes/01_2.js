class Person {
    constructor(firstName, lastName, age, email) {
        Object.assign(this, {
            firstName,
            lastName,
            age,
            email
        })
    }

    toString() {
        return `${this, this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`

    }
}