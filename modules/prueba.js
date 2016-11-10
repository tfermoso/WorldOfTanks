/*
metodo info, obtiene los objetos contenidos hasta fila-1 y columna-1. Corregir
Metodo girar - corregir
Metodo mover - Mueve solo una vez.
*/
"use strict";
const tablero = require("./tablero.js");
const elementos = require("./elementos.js");

let tablero1 = new tablero('test',5,5);
let tanque1 = new elementos.tanque('tantest1');
let roca1 = new elementos.roca();
let roca2 = new elementos.roca();

//tablero1.insertar(roca1, 1,3);
//tablero1.insertar(roca2,2,2);

tanque1.o = "sur";
tablero1.insertar(tanque1,1,1);
/*
//Pruebas de movilidad, choque con roca y fuera de tablero
console.log(tablero1.info);
console.log('Movemos el tanque...')
tablero1.mover(tanque1);
console.log(tablero1.info);
console.log('Giramos el tanque...')
tablero1.girar(tanque1,"izquierda");
tablero1.mover(tanque1);
console.log(tablero1.info);
console.log('Movemos el tanque...')
tablero1.mover(tanque1);
console.log(tablero1.info);
console.log('Movemos el tanque...')
tablero1.mover(tanque1);
console.log(tablero1.info);
console.log('Movemos el tanque...')
tablero1.mover(tanque1);
console.log(tablero1.info);
*/
// tablero1.disparar(tanque1);
// tablero1.girar(tanque1,"izquierda");
// tablero1.disparar(tanque1);

//Pruebas de chocar un tanque con otro tanque
// let tanque2 = new elementos.tanque('tantest2');
// tanque2.o="norte"
// tablero1.insertar(tanque2,1,3);
// console.log(tablero1.info);
// console.log('Movemos tanque1')
// tablero1.mover(tanque1);
// tablero1.mover(tanque1);
// console.log(tablero1.info);
// tablero1.mover(tanque2);
// console.log(tablero1.info);