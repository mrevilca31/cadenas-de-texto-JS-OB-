let nombre = "Misael";
let apellido = "Vilca";

let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let cantidadDeLetras = estudiante.length;
console.log(cantidadDeLetras);

let primeraLetra = nombre[0];
console.log(primeraLetra);

let ultimaLetra = apellido[apellido.length - 1];
console.log(ultimaLetra);

let cadenaSinEspacios = estudiante.replace(/\s+/g, "");
console.log(cadenaSinEspacios);

let contieneNombre = estudiante.includes("Misael");
console.log(contieneNombre);
