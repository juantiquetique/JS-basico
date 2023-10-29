const parrafo = document.getElementById("parrafo");

const boton = document.querySelector("button");

let cita1 = "Caminando en línea recta ";
let cita2 = "no puede uno llegar muy lejos";
// concatenar cadenas
let citaCompleta = cita1 + cita2 + ". Cita del principio.";
parrafo.textContent = citaCompleta;

boton.onclick = function() {
    let nombre = prompt("¿Cual es su nombre?");
    alert("Hola " + nombre + ", encantado de conocerlo.");
}

//Concatenar números

// citaCompleta += 234;
// parrafo.textContent = citaCompleta;


let miFecha = "20" + "05";
let miNumero = Number(miFecha);
console.log(typeof miFecha);
console.log(typeof miNumero);
// parrafo.textContent = miFecha;
// parrafo.textContent = miNumero + 5;

//Longitud de una cadena

let longitud = citaCompleta.length;
console.log(longitud);
console.log(citaCompleta[longitud -1])
//esta es para hacerlo resumidamente en una linea de codigo
console.log(citaCompleta[citaCompleta.length -1])

// Encontrar una subcadena dentro de una cadenas

let indice = citaCompleta.indexOf("linea recta");
console.log(indice);

console.log(citaCompleta.slice(0,9))

let cortado = citaCompleta.slice(10,12)
console.log(cortado)

let mayus =citaCompleta.toUpperCase();
parrafo.textContent = mayus;
let minus = citaCompleta.toLowerCase();
parrafo.textContent =minus;

// Actulizar partes de cadenas de

citaCompleta = citaCompleta.replace("uno", "alguien")
parrafo.textContent = citaCompleta;

//Ejercicio
let ejercicio = "----Ejercicio----"
console.log(ejercicio);

const ejercicio1 = document.getElementById("ejercicio1")
//MAN675847583748sjt567654;Manchester Piccadilly
let codigo1 = "MAN675847583748sjt567654;Manchester Piccadilly";
// let longCodigo1 = codigo1.length;
// console.log(longitud);
console.log(codigo1.slice(0,3)+ ": " + codigo1.slice(25,75) )
ejercicio1.textContent = codigo1.slice(0,3)+ ": " + codigo1.slice(25,75)

const ejercicio2 = document.getElementById("ejercicio2")
//GNF576746577363dhg23465s;Greenfield
let codigo2 = "GNF576746577363dhg23465s;Greenfield";
// let longCodigo2 = codigo2.length;
// console.log(longitud);
console.log(codigo2.slice(0,3)+ ": " + codigo2.slice(25,75) )
ejercicio2.textContent = codigo2.slice(0,3)+ ": " + codigo2.slice(25,75)

const ejercicio3 = document.getElementById("ejercicio3")
//LIV63748827374trye738837;Liverpool Lime Street
let codigo3 = "LIV63748827374trye738837;Liverpool Lime Street";
// let longCodigo3 = codigo3.length;
// console.log(longitud);
console.log(codigo3.slice(0,3)+ ": " + codigo3.slice(25,75) )
ejercicio3.textContent = codigo3.slice(0,3)+ ": " + codigo3.slice(25,75)

const ejercicio4 = document.getElementById("ejercicio4")
//SYB4ferydh5tisztTs56478F;Stalybridge
let codigo4 = "SYB4ferydh5tisztTs56478F;Stalybridge";
// let longCodigo4 = codigo4.length;
// console.log(longitud);
console.log(codigo4.slice(0,3)+ ": " + codigo4.slice(25,75) )
ejercicio4.textContent = codigo4.slice(0,3)+ ": " + codigo4.slice(25,75)

const ejercicio5 = document.getElementById("ejercicio5")
//HUD7tyu64776490uHjGghut4;Huddersfiel
let codigo5 = "HUD7tyu64776490uHjGghut4;Huddersfiel";
// let longCodigo5 = codigo5.length;
// console.log(longitud);
console.log(codigo5.slice(0,3)+ ": " + codigo5.slice(25,75) )
ejercicio5.textContent = codigo5.slice(0,3)+ ": " + codigo5.slice(25,75)

//MAN: Manchester Piccadilly