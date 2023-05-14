// Arithmetic //
let a: number = 10
let b: number = 5

console.log(a + b) // Suma: Imprime 15
console.log(a - b) // Resta: Imprime 5
console.log(a * b) // Multiplicación: Imprime 50
console.log(a / b) // División: Imprime 2
console.log(a % b) // Módulo (resto de la división): Imprime 0
console.log(a++) // Incremento: Imprime 10 y luego incrementa a en 1
console.log(a--) // Decremento: Imprime 11 y luego decrementa a en 1


// relational //
console.log(a == b) // Igual a: Imprime false
console.log(a != b) // Diferente de: Imprime true
console.log(a > b)  // Mayor que: Imprime true
console.log(a < b)  // Menor que: Imprime false
console.log(a >= b) // Mayor o igual que: Imprime true
console.log(a <= b) // Menor o igual que: Imprime false

// With strings
let c: string = "hola"
let d: string = "Hola"
console.log(c == d) // Imprime false
console.log(`Lexografy: ${c > d}`)  // Imprime true porque "hola" es lexicográficamente mayor que "Hola"

// logical //

let e: boolean = true
let f: boolean = false
console.log(e && f) // And: Imprime false
console.log(e || f) // Or: Imprime true
console.log(!e)     // Not: Imprime false

// Number filtering
let numeros: number[] = [1, 2, 3, 4, 5, 6]
let mayoresQueTres: number[] = numeros.filter(numero => numero > 3)

console.log(mayoresQueTres) // Imprime [4, 5, 6]
