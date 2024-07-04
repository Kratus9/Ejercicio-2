// Fibonacci: Escribe una función llamada fibonacci que tome un número n como entrada y devuelva los primeros n números de la secuencia de Fibonacci.
function fibonacci(n) {
  if (n <= 0) return []; //Si n es menor o igual que 0, devuelve una array vacía
  if (n === 1) return [0]; //Si n es igual a 1, devuelve una array con el primer número de la secuencia de Fibonacci: 0
  if (n === 2) return [0, 1]; //Si n es igual a 2, devuelve una array con los primeros dos números de la secuencia de Fibonacci: 0 y 1
  let fibSeq = [0, 1]; //Se inicializa una array con los primeros dos números de la secuencia de Fibonacci: 0 y 1
  for (let i = 2; i < n; i++) {
    // Se itera sobre los primeros n - 2 números de la secuencia de Fibonacci
    fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]); //Se añade a la array el siguiente número de la secuencia de Fibonacci, que es la suma de los dos anteriores
  }
  return fibSeq; //Devuelve la array con los primeros n números de la secuencia de Fibonacci
}

// Palíndromo: Escribe una función llamada is_palindrome que tome una cadena de texto como entrada y devuelva true si es un palíndromo y false en caso contrario.
function is_palindrome(str) {
  const strLimpio = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase(); //Creamos una variable llamada strLimpio que contiene la cadena de texto sin caracteres especiales y en minúsculas
  const reversedStr = cleanedStr.split("").reverse().join(""); //Creamos una variable llamada reversedStr que contiene la cadena de texto invertida, separando primero por caracteres en una array, invirtiendo los caracteres y por último volviendolos a unir todos juntos
  return strLimpio === reversedStr; //Comparamos las dos variables strLimpio y reversedStr, y devuelve true si strLimpio es igual a reversedStr, y false en caso contrario
}

// Números Primos: Escribe una función llamada prime_numbers que tome un número n como entrada y devuelva todos los números primos menores o iguales a n.
function prime_numbers(n) {
  let numPrimo = []; //Creamos una variable para almacenar todos los números primos encontrados
  for (let i = 2; i <= n; i++) {
    //Iteramos sobre los primeros n números
    let primo = true; //Creamos una variable para comprobar si es primo o no
    for (let j = 2; j * j <= i; j++) {
      //Creamos un segundo bucle para comprobar si el número es divisible por algun número entre 2 y el número actual
      if (i % j === 0) {
        //Si el número es divisible por un número entre 2 y el número actual, no es primo
        primo = false; //En el caso de que no sea primo, que nos devuelva false
        break; //Terminamos el bucle si encontramos un false
      }
    }
    if (isPrime) primes.push(i); //Despues de comprobar con el bucle anterior si es primo, en caso afirmativo, lo agregamos a la array de primos
  }
  return numPrimo; //Devuelve la array de números primos
}

// Ordenamiento de Burbuja: Implementa el algoritmo de ordenamiento de burbuja en una función llamada bubble_sort que tome una lista de números como entrada y devuelva la lista ordenada de menor a mayor.
function bubble_sort(arr) {
  let n = arr.length; //Se crea una variable llamada n que contiene el número de elementos de la lista
  for (let i = 0; i < n - 1; i++) {
    //Se itera sobre todos los números de la lista
    for (let j = 0; j < n - 1 - i; j++) {
      //Se crea un segundo bucle para poder comparar todos los números de la lista con los del bucle anterior
      if (arr[j] > arr[j + 1]) {
        //Verifica si el primer número es mayor al siguiente
        let temp = arr[j]; //Si se cumple el caso anterior, se guarda el primer número en una variable temporal
        arr[j] = arr[j + 1]; //Reemplaza el primer número por el siguiente
        arr[j + 1] = temp; //Reemplaza el segundo número por el número almacenado en la variable temporal anterior
      }
    }
  }
  return arr; //Devuelve la lista ordenada
}

// Búsqueda Binaria: Escribe una función llamada binary_search que implemente el algoritmo de búsqueda binaria. La función debe tomar una lista ordenada y un elemento como entrada, y devolver la posición del elemento en la lista o -1 si el elemento no está en la lista.
function binary_search(arr, target) {
  let inicio = 0;
  let fin = arr.length - 1;
  while (inicio <= fin) {
    //Se itera mientras el inicio sea menor o igual que el fin
    let mid = Math.floor((inicio + fin) / 2); //Se calcula el punto medio y le quitamos los decimales
    if (arr[mid] === target)
      return mid; //Si el punto medio es igual al target, se devuelve la posición
    else if (arr[mid] < target)
      inicio =
        mid +
        1; //Si el punto medio es menor al target, se actualiza la variable inicio y pasamos al siguiente número de la lista reajustando los límites de búsqueda
    else fin = mid - 1; //Si el punto medio es mayor al target, se actualiza la variable fin y pasamos al anterior número de la lista reajustando los límites de búsqueda
  }
  return -1; //Si no se encuentra el target, se devuelve -1
}
