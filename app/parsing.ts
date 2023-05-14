// Number //
let numero: number = 123.4;
let texto: string = numero.toString();  // Convierte el número a texto
let numeroNuevo: number = parseFloat(texto);  // Convierte el texto a número
// console.log(numeroNuevo)

// Json objects //
let objeto: any = { nombre: "Juan", edad: 30 };
let textoJson: string = JSON.stringify(objeto);  // Convierte el objeto a texto JSON
let objetoNuevo: any = JSON.parse(textoJson);  // Convierte el texto JSON a objeto
// console.log(numeroNuevo)

// Dates //
let fecha: Date = new Date();
let textoFecha: string = fecha.toISOString();  // Convierte la fecha a texto ISO
let fechaNueva: Date = new Date(textoFecha);  // Convierte el texto ISO a fecha

// Numbers and booleans //
let num: number = 1;
let booleano: boolean = Boolean(num);  // Convierte el número a booleano (true si el número no es 0)

let booleanoNuevo: boolean = false;
let numNuevo: number = Number(booleanoNuevo);  // Convierte el booleano a número (0 para false, 1 para true)

// String to arrays and backwards //
let cadena: string = 'hola, mundo';
let array: string[] = cadena.split(', ');  // Convierte la cadena a array ['hola', 'mundo']

let arrayNuevo: string[] = ['hola', 'mundo'];
let cadenaNueva: string = arrayNuevo.join(', ');  // Convierte el array a cadena 'hola, mundo'
