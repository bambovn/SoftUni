const myPerson = {
    name: 'Bambi',
    age: 36,
    'last name': 'Bambov'
}


console.log(myPerson)
console.log(myPerson.age)


myPerson.age = 37

console.log(myPerson)


console.log(myPerson['name'])

console.log(myPerson['last name'])


myPerson['midle name'] = 'Stoyanov'

console.log(myPerson)

delete myPerson.age

console.log(myPerson)