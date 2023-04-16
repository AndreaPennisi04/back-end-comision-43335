/* Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.
*/

let contador = 0;

class Contador {
  constructor(contador) {
    this.contador = 2;
  }
  static contadorGlobal = 4;

  getResponsable = () => {
    console.log("Este es un metodo: getResponsable");
  };
  contar = () => {
    for (let i = 0; i == contador; i++) {
      console.log("Este es un metodo: contador");
    }
  };
  getCuentaIndividual = () => {
    console.log("Este es un metodo:getCuentaIndividual ");
  };
  getCuentaGlobal = () => {
    console.log("Este es un metodo: getcuentaGlobal");
  };
}

let contador1 = new Contador();
