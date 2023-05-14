// Printing into console //
const salute: string = 'Hi, math!'
console.log(salute)

// Inputs & outputs //
console.log(process.argv)

const a: number = 1
const b: number = 1

console.log(`Sum result of ${a} and ${b} is ${a + b}.`)

// control of arguments //
console.log(`Input two numbers into the console.`)

const parse2num = (args: string[]) => {
    if (args.length !== 4) throw new Error("Invalid number of parameters")

    const na: number = Number(args[2])
    const nb: number = Number(args[3])

    if (isNaN(na) || isNaN(nb)) throw new Error("The inputs aren't numbers")
    return { na, nb }
}


const na: number = parse2num(process.argv).na
const nb: number = parse2num(process.argv).nb

console.log(`Inputed numbers were ${na} and ${nb}.`)

// Using libraries //
import * as readline from 'readline';

let reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('Por favor ingresa algo: ', (response) => {
    console.log(`Ingresaste: ${response}`);
    reader.close();
});

// Parsings //
let numy: number = 123;
let texty: string = numy.toString();  // Convierte el número a texto
let newNumy: number = parseFloat(texty);  // Convierte el texto a número