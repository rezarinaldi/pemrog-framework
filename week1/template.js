let fname = "Cristian"; // firstname
let lname = "Ronaldo"; // lastname
let age = prompt("Masukkan umur Cristian Ronaldo!"); // input umur

// Cara lama
// let result = fname + ' ' + lname + 'is' + age + 'years old';
// alert(result);

// Memakai template strings
let result = `${fname} ${lname} is ${age} years old`; // output kalimat
alert(result);
