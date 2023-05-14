// Booleano
let esVerdadero: boolean = true

// Número
let entero: number = 6
let decimal: number = 6.0
let hexadecimal: number = 0xf00d
let binario: number = 0b1010
let octal: number = 0o744

// Cadena de texto
let color: string = "azul"
color = 'rojo'

// Arreglo
let lista: number[] = [1, 2, 3]
let lista2: Array<number> = [1, 2, 3] // Otra forma de definir un arreglo

// Tupla
let x: [string, number]
x = ["hola", 10] // OK
// x = [10, "hola"] // Error

// Enum
// enum Color {Rojo, Verde, Azul}
enum Color { Rojo = 'rojito', Verde = 'verdecito', Azul = 'azulito' }
let c: Color = Color.Verde
console.log(`Color selected is ${c}.`)

enum State { Accepted, Rejected, WaitList, Incapacitated, Rest }

// Any
let noSeguro: any = 4
noSeguro = "tal vez una cadena"
noSeguro = false // definitivamente un booleano

// Void
function alertaUsuario(): void {
    alert("¡Esta es mi advertencia!")
}

// Null y Undefined
let u: undefined = undefined
let n: null = null

// Never
function error(message: string): never {
    throw new Error(message)
}

// Object
function crear(o: object | null): void {
    console.log(`Objeto creado: ${o}`)
}
crear({ prop: 0 }) // OK
crear(null) // OK

let objetito: {
    readonly _id: number, name?: string, exists: boolean
} = {
    _id: 1, name: 'Vogel', exists: true
}

// objetito._id = 0 // No se puede
console.log(`Objeto creado manualmente: ${objetito}.`)

// Types: A better way to create objects
type Student = {
    readonly _id: number, name?: string, actualState: State, exists: boolean
}

let si: Student = {
    _id: 0, name: 'Vogel', actualState: State.Accepted, exists: true
}