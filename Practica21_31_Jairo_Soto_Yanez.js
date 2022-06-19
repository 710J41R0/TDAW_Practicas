function ejercicio1() {
    let edad;
    do {
        edad = prompt("Ingresa tu edad");
        if (isNaN(edad)) {
            alert("Ingresa una edad correcta");
        }
    } while (isNaN(edad));

    if (parseInt(edad) >= 18) {
        alert('Puedes Votar');
    } else {
        alert("No puedes votar");
    }
}

function ejercicio2() {
    alert("Mayor de 3 numeros");
    let dato1;
    let dato2;
    let dato3;
    let edad;
    do {
        dato1 = prompt("Primer dato");
        if (isNaN(dato1)) {
            alert("Ingresa una dato correcto");
        }
    } while (isNaN(dato1));
    do {
        dato2 = prompt("Primer dato");
        if (isNaN(dato2)) {
            alert("Ingresa una dato correcto");
        }
    } while (isNaN(dato2));
    do {
        dato3 = prompt("Primer dato");
        if (isNaN(dato3)) {
            alert("Ingresa una dato correcto");
        }
    } while (isNaN(dato3));
    parseInt(dato1);
    parseInt(dato2);
    parseInt(dato3);
    if ((dato1 > dato2) && (dato1 > dato3)) {
        alert('El mayor entre ' + dato1 + ',' + dato2 + 'y ' + dato3 + 'es: ' + dato1);
    } else {
        if ((dato2 > dato3) && (dato2 > dato1)) {
            alert('El mayor entre ' + dato1 + ',' + dato2 + 'y ' + dato3 + 'es: ' + dato2);
        } else {
            alert('El mayor entre ' + dato1 + ',' + dato2 + 'y ' + dato3 + 'es: ' + dato3);
        }
    }
}

function ejercicio3() {
    let dato1 = '';
    dato1 = prompt("Ingresa tu nombre");
    switch (dato1.toUpperCase()) {
        case 'JAIRO': alert('Hola ' + dato1);
            break;
        case 'FRANCISCO': alert('Hola ' + dato1);
            break;
        case 'PACO': alert('Tas bn feo ' + dato1);
            break;
        default: alert('Error, el nombre no está en la lista ' + dato1);
            break;
    }
}

function ejercicio4() {
    let i;
    let arr = [];
    for (i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }

    }
    alert("Numeros pares entre [1-100] \n" + JSON.stringify(arr));
}

function ejercicio5() {
    let i;
    let suma = 0;
    for (i = 1; i <= 100; i++) {
        suma += i;
    }
    alert("La suma de los números de [1-100] es: " + suma);
}

function ejercicio6() {
    let i = 1;
    let arr = [];
    while (i <= 100) {
        if (i % 2 == 0) {
            arr.push(i);

        }
        i++
    }
    alert("Numeros pares entre [1-100] \n" + JSON.stringify(arr));
}

function ejercicio7() {
    let i = 0;
    let suma = 0;
    while (i <= 100) {
        suma += i;
        i++
    }
    alert("La suma de los números de [1-100] es: " + suma);
    //console.log(suma);
}

function ejercicio8() {
    let i = 1;
    let arr = [];
    do {
        if (i % 2 == 0) {
            arr.push(i);

        }
        i++
    } while (i <= 100);
    alert("Numeros pares entre [1-100] \n" + JSON.stringify(arr));
}

function ejercicio9() {
    let i = 0;
    let suma = 0;
    do {
        suma += i;
        i++
    } while (i <= 100);
    alert("La suma de los números de [1-100] es: " + suma);
}

function ejercicio10() {
    alert("Bubble Sort - Ingresa un arreglo de 5 numeros");
    let dato;
    let arr = [];
    let i;
    for (i = 0; i < 5; i++) {
        do {
            dato = prompt("Ingresa un numero");
            if (isNaN(dato)) {
                alert("Ingresa un numero correcto");
            }
        } while (isNaN(dato));
        arr.push(parseInt(dato));
    }

    let j;
    let temp;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }


    alert(JSON.stringify(arr));


}

function ejercicio11() {
    alert("Insertion Sort - Ingresa un arreglo de 5 numeros");
    let dato;
    let arr = [];
    let i;
    for (i = 0; i < 5; i++) {
        do {
            dato = prompt("Ingresa un numero");
            if (isNaN(dato)) {
                alert("Ingresa un numero correcto");
            }
        } while (isNaN(dato));
        arr.push(parseInt(dato));
    }

    let key, j;
    for (i = 1; i < arr.length; ++i) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    alert(JSON.stringify(arr));


}

function ejercicio12() {
    alert("Selection Sort - Ingresa un arreglo de 5 numeros");
    let dato;
    let arr = [];
    let i;
    for (i = 0; i < 5; i++) {
        do {
            dato = prompt("Ingresa un numero");
            if (isNaN(dato)) {
                alert("Ingresa un numero correcto");
            }
        } while (isNaN(dato));
        arr.push(parseInt(dato));
    }

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    alert(JSON.stringify(arr));
}

function ejercicio13() {
    let dato;
    do {
        dato = prompt("Ingresa un numero");
        if (isNaN(dato)) {
            alert("Ingresa un numero correcto");
        }
    } while (isNaN(dato));
    dato = parseInt(dato);

    if ((dato % 2) === 0) {
        alert("El numero: " + dato + "Es un número par");
    } else {
        alert("El numero: " + dato + "Es un número impar");
    }
}

function ejercicio14() {
    let dato;
    do {
        dato = prompt("Ingresa un numero");
        if (isNaN(dato)) {
            alert("Ingresa un numero correcto");
        }
    } while (isNaN(dato));
    dato = parseInt(dato);

    let arr = [];
    let i;
    for (i = 1; i < 11; i++) {
        arr.push(dato + "*" + i + "=" + (dato * i))
    }
    alert(JSON.stringify(arr));
}

function ejercicio15() {
    let num, mul, res = 0;
    let i;
    let arr = "";
    do {
        num = prompt("Ingresa un numero");
        if (isNaN(num)) {
            alert("Ingresa un numero correcto");
        }
    } while (isNaN(num));
    num = parseInt(num);
    do {
        mul = prompt("Ingresa un numero por el cual se multiplicará");
        if (isNaN(mul)) {
            alert("Ingresa un numero correcto");
        }
    } while (isNaN(mul));
    mul = parseInt(mul);
    for (i = 0; i < mul; i++) {
        arr = arr + "+" + num;
        res = res + num;
    }
    alert(arr + "\n" + "El resultado es: " + res)
}

function ejercicio16() {
    let n;
    do {
        n = prompt("Ingresa el tamaño del arreglo");
        if (isNaN(n)) {
            alert("Ingresa un numero correcto");
        }
    } while (isNaN(n));
    n = parseInt(n);
    let dato;
    let arr = [];
    let i;
    for (i = 0; i < n; i++) {
        do {
            dato = prompt("Ingresa un numero");
            if (isNaN(dato)) {
                alert("Ingresa un numero correcto");
            }
        } while (isNaN(dato));
        arr.push(parseInt(dato));
    }
    let arr2 = [];
    for (i = 0; i < arr.length; i++) {
        arr2.push(arr[i]);
    }

    let j;
    let temp;
    for (i = 0; i < arr2.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr2[j] > arr2[j + 1]) {
                temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
            }
        }
    }
    numayor = arr2[arr2.length - 1];
    //arr.indexOf(numayor)
    alert(JSON.stringify(arr) + " \nEl numero mayor es: " + numayor + " y su posicion es: " + (arr.indexOf(numayor) + 1));
}

function ejercicio17() {
    let n;
    do {
        n = prompt("Ingresa el tamaño del arreglo");
        if (isNaN(n)) {
            alert("Ingresa un numero correcto");
        }
    } while (isNaN(n));
    n = parseInt(n);
    let dato;
    let arr = [];
    let i;
    for (i = 0; i < n; i++) {
        do {
            dato = prompt("Ingresa un numero");
            if (isNaN(dato)) {
                alert("Ingresa un numero correcto");
            }
        } while (isNaN(dato));
        arr.push(parseInt(dato));
    }
    let arr2 = [];
    for (i = 0; i < n; i++) {
        do {
            dato = prompt("Ingresa un numero");
            if (isNaN(dato)) {
                alert("Ingresa un numero correcto");
            }
        } while (isNaN(dato));
        arr2.push(parseInt(dato));
    }
    arr3 = [];
    for (i = 0; i < n; i++) {
        arr3.push(arr[i] + arr2[i]);
    }


    alert(JSON.stringify(arr) + "\n" + JSON.stringify(arr2) + "\nSumatoria" + JSON.stringify(arr3));
}

function ejercicio18() {
    let n;
    do {
        n = prompt("Ingresa el tamaño del arreglo");
        if (isNaN(n)) {
            alert("Ingresa un numero correcto");
        }
    } while (isNaN(n));
    n = parseInt(n);
    let dato, acu = 0;
    let arr = [];
    let i;
    for (i = 0; i < n; i++) {
        do {
            dato = prompt("Ingresa un numero");
            if (isNaN(dato)) {
                alert("Ingresa un numero correcto");
            }
        } while (isNaN(dato));
        arr.push(parseInt(dato));
        acu = acu + parseInt(dato);
    }
    alert(JSON.stringify(arr) + "\nLa media aritmética es: " + (acu / n));
}

function ejercicio19() {
    let n;
    do {
        n = prompt("Ingresa el tamaño del arreglo");
        if (isNaN(n)) {
            alert("Ingresa un numero correcto");
        }
    } while (isNaN(n));
    n = parseInt(n);
    let dato;
    let arr = [];
    let i;
    for (i = 0; i < n; i++) {
        do {
            dato = prompt("Ingresa un numero");
            if (isNaN(dato)) {
                alert("Ingresa un numero correcto");
            }
        } while (isNaN(dato));
        arr.push(parseInt(dato));
    }
    let arr2 = [];
    for (i = 0; i < arr.length; i++) {
        arr2.push(arr[i]);
    }

    let j;
    let temp;
    for (i = 0; i < arr2.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr2[j] > arr2[j + 1]) {
                temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
            }
        }
    }
    alert("Los datos ingresados en orden son: " + JSON.stringify(arr) + "\n Ordenandolos de menor a mayor: " + JSON.stringify(arr2));
}

function ejercicio20() {
    let n;
    do {
        n = prompt("Ingresa el numero de palabras a ingresar");
        if (isNaN(n)) {
            alert("Ingresa un numero correcto");
        }
    } while (isNaN(n));
    n = parseInt(n);
    let dato;
    //let arr = [];
    let i;
    for (i = 0; i < n; i++) {
        dato = prompt("Ingresa un texto");
        //arr.push({"texto":dato,"longitud": dato.length, "Mayusculas": toUpperCase(dato)});
        alert("El dato es: " + dato + "\nLongitud: " + dato.length + "\nMinusculas: " + dato.toLowerCase() + "\nMayudaculas: " + dato.toUpperCase());
    }

    //alert("Carcateristicas: \n" + JSON.stringify(arr));
}
//Soto Yañez Jairo