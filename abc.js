export interface User {
  name: string
  age: number
  isValid?: boolean
}

const neo = {
  name: 'Neo',
  age: 20,
  sayHello: function () {
    console.log('Hello, my name is Neo')
  }
}

function hello(user) {
  const { name, age } = user
  console.log(`Hello, my name is ${name} and I'm ${age} years old`)
}

hello(neo)  