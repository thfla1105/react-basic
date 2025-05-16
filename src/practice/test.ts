const a: string[] = ['1', '2', '3']

console.log(a)

//union
function add(a: string | number, b: number): number {
  if (typeof a === 'string') {
    return Number(a) + b
  }
  return a + b
}

console.log(add(1, 2))

//retunr 키워드가 없을 때는 void로 반환, 있으면 리턴값 반환
function log(msg: string): void {
  console.log(msg)
  // return undefined
}

interface UserA {
  name: string
}

interface UserB {
  age: number
}
//intersection
const k: UserA & UserB = {
  name: 'Neo',
  age: 85
}

console.log(k)

log('Hello')

const numbers: never[] = []
console.log(numbers[0])
