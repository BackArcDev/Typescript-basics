// Printing into console //
const salute: string = 'Hi, math!'
console.log(salute)

// Inputs & outputs //
console.log(process.argv)

const a: number = Number(process.argv[3])
const b: number = Number(process.argv[2])

console.log(`Sum result of ${a} and ${b} is ${a+b}.`)

