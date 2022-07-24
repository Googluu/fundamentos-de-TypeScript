# Configurado nuestro proyecto

Instalación de TypeScript solo para nuestro proyecto `npm install typescript --save-dev`
Para verificar la versión instalada `npx tsc --version`
Y con eso tenemos acceso al compilador de TS, el cual lo corremos de la siguiente manera `npx tsc`

# Activando poderes de TypeScript en JavaScript 🧐

Si estás en Visual Studio Code, puedes activar el analizador de código estático de TypeScript sobre un archivo JavaScript. Para esto, en la primera línea del archivo debe ir lo siguiente `@ts-check`
NOTA: @ts-check nos da feedback y análisis de typescript. "feedback temprano".

# El compilador de TypeScript

Este compilador lo que realmente hace es transpilar, pues ni el navegador ni Node.js (a abril de 2022) pueden leer nativamente archivos TypeScript, por lo que realiza un proceso de traducción en la que su código lo convierte a JavaScript.

![image](https://user-images.githubusercontent.com/99292913/180648973-c77c83af-15a7-4ce0-8574-3d7eea27c7e0.png)

# Compilación de archivos TypeScript desde Node.js

Para realizar el proceso de transpilación en Node.js, ejecutemos lo siguiente en la terminal `npx tsc archivo_typescript.ts`

Tras esto, se creará un archivo JavaScript dentro de la misma carpeta donde este tu archivo TypeScript y con el mismo nombre. Por ejemplo, en nuestro proyecto realizamos esa operación dentro de la carpeta src con el archivo 01-hello.ts, dando como resultado:

![image](https://user-images.githubusercontent.com/99292913/180649137-0c8b65ba-b8ce-4e75-afd4-6bbeb5a811ef.png)

# Compilación a una versión específica

Compilación a una versión específica
Podemos hacer que nuestro archivo TypesSript sea transpilado a un archivo JavaScript, por ejemplo, con el estándar ECMAScript 6. Para ello ejecutemos `npx tsc archivo_typescript.ts --target es6`

# Enviando compilación a una carpeta

Si deseas que los archivos transpilados no se generen en la misma carpeta donde están tus archivos TypeScript, puedes indicarle al compilador hacia donde quieres que vayan `npx tsc archivo_typescript.ts --target es6 --outDir carpeta_destino`

También podrías indicar que deseas aplicar la anterior operación a todos los archivos con extensión TypeScript `npx tsc *.ts --target es6 --outDir carpeta_destino`

# NOTA!!🚧

Si acaso te aparece el error:

```
error TS6053: File 'src/*.ts' not found.
  The file is in the program because:   
    Root file specified for compilation
```

Se resuelve creando un archivo tsconfig.json.

Pasos:
1 Posicionarte en el directorio raíz de tu proyecto.
Ejecutar el comando `tsc --init`
Esto creará el archivo `tsconfig.json`
Ejecutar el comando `npx tsc -p ./ -w`
Esto compilará en el mismo directorio todos tus archivos .ts
Modificar el target o el destino (para enviar los compilados a /dist) En el archivo tsconfig.json busca la bandera `outDir` y modifícala para que quede así: `outDir: ./dist`,
Listo, ya tienes configurado lo necesario para seguir el curso tal cual (hasta el momento).

Nota: El tsconfig ya viene configurado para compilar a ES6, en caso de que quieras cambiar, busca la línea `target`y modifícala con el valor que necesites.

Contribución creada por: Pepe Sosa. PlatziNauta💚

# Compilación en tiempo real

Nos puede resultar tedioso estar ejecutando el comando anterior siempre después de escribir nuestro código. Para evitar esto, podemos hacer que el compilador esté detectando cada cambio que realicemos en nuestros archivos TypeScript y haga la transpilación de inmediato `npx tsc --watch`

# Proyecto

1. Creemos el archivo TSConfig.json en nuestro proyecto
2. Activamos las siguientes propiedades dentro de dicho archivo

`outDir`: indicando la carpeta `dist` como el directorio destino de los archivos transpilados

![image](https://user-images.githubusercontent.com/99292913/180649796-f80f247c-8a42-44dc-b021-0ae903461fc6.png)

`rootDir`: indicamos que nuestros archivos TypeScript, los cuales serán `compilados` luego, estarán en la carpeta src

![image](https://user-images.githubusercontent.com/99292913/180649851-95b245bc-273a-4215-b7f9-eabdff047dff.png)

3. Creamos el archivo 02-demo2.ts dentro de la carpeta src con el siguiente código
`const numbers = [1,3,4];`

4. Probemos la compilación de nuestros archivos

`npx tsc`

![image](https://user-images.githubusercontent.com/99292913/180649930-585d9126-a1dc-4d5a-8d15-a045bb5650b4.png)

Observaremos que los archivos transpilados se encuentran en nuestra carpeta `dist`.

# Resumen

Como resumen, el comando `npx tsc --init` inicializa un archivo `tsconfig.ts`. En este va estar la configuración como el `target`, `ourDir`, `strictMode`, etc. Evitándonos tener que poner esas flags en cada compilación.
.
Una vez con ese archivo, solo corremos el comando `npx tsc` y listo.
.
Y ya por ultimo, podemos evitarnos la compilación continua corriendo el comando `npx tsc --watch`

Contribución creada por: Irving Juárez. PlatziNauta💚

NOTA: `tsc` o `tsc --watch` , sin npx tambien funciona.

Contribución creada por: Fernando Peralta. PlatziNauta💚

# Qué es el tipado en TypeScript

El tipado en TypeScript hace referencia a cómo declaramos una variable, necesitamos asignar el tipo de dato, conocido como type annotation, con esto evitamos mezclar distintos tipos de datos.

# Controlando la flexibilidad

Gracias a TypeScript podemos manejar el tipado de las variables para evitar anomalías en el código.

En JavaScript, para declarar una variable constante lo realizamos así:
`const productPrice = 12;`

En TypeScript, para el caso anterior, es similar solo que añadimos : y el tipo de dato de la variable, la cual sería number. A esto último se le llama type annotation o anotación de tipo:
`const productPrice: number = 12;`

# Resumen

El tipado es una característica muy interesante que nos ayuda a mitigar riesgos, como bien explicó el profe durante la clase, en javascript podemos reasignar tipos de valores a lo largo del código, esto es un riesgo que puede provocar errores en tiempo de ejecución si no tenemos cuidado de cómo estamos manejando los datos durante la ejecución del código.

Con el tipado, mitigamos el error fozando al analizador de código a que observe esas variables y se asegure de que no estamos modificando su tipo a lo largo del código o por ejemplo si declaramos “const” nos saltará error al querer modificar su valor (no tanto su tipo).

De este modo debemos de escribir mejor código o typescript nos avisará cuando hagamos algo que en tiempo de ejecución puede fallar, PEEEEEEEEEEERO nos avisará en tiempo de codificación, capturando así muchos bugs de tipado que de otro modo se irían a producción.

Contribución creada por: Pepe Sosa. PlatziNauta💚

# 📌 Tipado y Tipos de Datos

El tipado en TS hace referencia a cómo declaramos una variable, necesitamos asignar el tipo de dato, con esto evitamos mezclar distintos tipos de datos.

En JS podemos declarar una variable de un tipo de valor y a lo largo del código ir cambiándolo si lo deseamos. Pero para proyectos de software que tienen gran escalabilidad, esto puede ser fuente de fallas en el programa

⭐ Gracias a TypeScript podemos manejar el tipado de las variables para evitar anomalías en el código

Dentro de TS podemos definir variables de manera explicita o inferida.

⭐ `Explicito`> Define el tipo de dato para la creación de variables.
`let age: number = 22`

⭐ `Inferido` > TS tiene la habilidad de deducir el tipo en dato de un valor
`nombre = 'Juan';`

Contribución creada por: Juan Ramirez. PlatziNauta💚

# Tipos inferidos

TypeScript puede inferir el tipo de dato de una variable a pesar de no haberlo declarado explícitamente.

# Inferencia de tipos

A partir de la inicialización de la variable TypeScript infiere el tipo que será a lo largo del código y este no puede variar. Por ejemplo:
`let myName = "Victoria";`

Si bien no indicamos el tipo de dato como se haría de esta manera:
`let myName: string = "Victoria";`

TypeScript infiere que la variable `myName` será del tipo `string` y en adelante no podrá tomar un valor que no sea de este tipo de dato.
```
myName = 30; 
//Nos señalará como error pues se le quiere asignar un número a una variable de tipo string.
```

# Nombres de variables iguales

TypeScript te indicará como error aquellas variables con el mismo nombre a pesar de estar en archivos distintos. Esto no sucederá en entornos preconfigurados como por ejemplo Angular o React, ya que estos trabajan de forma modular o tienen un alcance (scope) para cada variable.

Si deseas trabajar con los mismos nombres de variables en diferentes archivos, puedes crear una función anónima autoejecutada:
```
( () => {
    let myName = "Victoria";
})();
```
Lo mismo por cada variable que desees tener el mismo nombre (`myName` para este ejemplo) deberás crear este tipo de función para evitar que te den estas advertencias.

# Numbers

El tipo de dato `number` se usa para variables que contendrán números positivos, negativos o decimales.

# Operaciones
En JavaScript, una variable de tipo `number` puede fácilmente ser concatenado con otra de tipo `string`:
```
//JavaScript
let myNumber = 30;
myNumber = myNumber + "5"; //El resultado sería '305'
```

Sin embargo, esto podría llevar confusiones y errores durante la ejecución del programa, además de estar cambiando el tipo de dato de la variable. Por ello, en TypeScript solo se pueden hacer operaciones numéricas entre números valga la redundancia:
```

//TypeScript
let myNumber: number = 30;

myNumber = myNumber + 10; //CORRECTO
myNumber = myNumber + "10"; //INCORRECTO
```

# Uso de variables sin inicializar

Serán señalados como errores aquellas variables que queramos usar sin haberles dado un valor inicial:
```
//TypeScript
let productInStock: number;
console.log("Product in stock: " + productInStock);
```
Señalar que si no se va a inicializar aún la variable, definir explícitamente el tipo de dato, pues TypeScript no puede inferirlo si no tiene un valor inicial.

# Conversión de números de tipo string a tipo number
```
let discount: number = parseInt("123");

let numeroString: string = "100";
let nuevoNumero: number;
nuevoNumero = parseInt(numeroString);
```
Esto funciona si el string tiene solo y exclusivamente números que no empiecen con 0. De lo contrario, el resultado será de tipo `NaN` (Not a Number):
```
//TypeScript
let numeroPrueba: number = parseInt("palabra");
console.log(numeroPrueba); //NaN
```

# Binarios y Hexadecimales

TypeScript nos puede indicar error si intentamos definir números binarios que tengan números que no sean 0 o 1 y si declaramos hexadecimales usando valores fuera del rango:
```
//**********TypeScript**********
//Binarios: se definen colocando "0b" al inicio del valor
let primerBinario = 0b1010; //CORRECTO
let segundobinario = 0b1210; //INCORRECTO. El 2 es inválido

//Hexadecimales: se definen colocando "0x" al inicio del valor
let primerHexa = 0xfff; //CORRECTO
let segundoHexa = 0xffz; //INCORRECTO. El "z" es inválido
```
En consola, si están correctamente asignados, se hará una conversión a decimal de dichos números:
```
let primerHexa = 0xfff;
console.log(primerHexa); // 4095

let primerBinario = 0b1010;
console.log(primerBinario); // 10
```
# Consejo
Cuando definas una variable de tipo de dato `number`, es preferible que el nombre de tipo sea en minúscula. Esto como buena práctica, pues se hará referencia al tipo de dato `number` y no al objeto `Number` propio del lenguaje:
```
let myNumber: number = 20; // Buena practica.
let otherNumber: Number = 20; // Mala practica.
```

# Booleans

Este tipo de dato puede tomar dos valores: `true` o `false`.
```
let isEnable: boolean = true;
let isNew = false;
```
# Ejemplo de boolean
```
(() => {
    let isEnable = true;

    //no le puedo decir que es un string ni un número
    isEnable = "as";
    isEnable =  123;
    isEnable = false;

    //forma explicita 
    let isNew: boolean = false;
    console.log('isNew', isNew);
    isNew = true;
    console.log('isNew', isNew);

    //saca un númeor entre 0 y 1
    const random = Math.random();
    console.log('random', random);
    //vamos a asociar una condición y la asociamos a una variable 
    isNew = random >= 0.5 ? true : false;
    console.log('isNew', isNew);
})();
```
Contribución creada por: Miguel Angel Moreno Velandia. PlatziNauta💚

# Strings

Este tipo de dato nos permite almacenar una cadena de caracteres.

Podemos definir un `string` con:
1. Comillas simples:
```
let myProduct = 'Soda'; //CORRECTO
let comillasDobles = 'Puedo "usar" comillas dobles tambien'; //CORRECTO
let comillaInvalida = 'No puedo 'usar' otra vez una comilla simple'; //INCORRECTO
```
Se pueden usar comillas dobles dentro, más no otra vez comillas simples.
2. Comillas dobles:
```
let myProduct = "Soda"; //CORRECTO
let comillaSimple = "Puedo 'usar' comilla simple tambien"; //CORRECTO
let comillaInvalida = "No puedo "usar" otra vez las comillas dobles"; //INCORRECTO
```
Se puede usar comillas simples dentro, más no otra vez comillas dobles.
3. Usando backticks:
```
let myName = `Frank`;
```
Esta forma de asignar `string` trae algunas ventajas:
Declarar valores de múltiples líneas:
```
let texto = `
    Nunca
    pares
    de aprender :)
`;
```
Concatenar dentro del mismo `string`. Para esto es necesario usar este símbolo del dólar seguido de llaves `${}` y escribir lo que queremos concatenar dentro de esas llaves:
```
let variableTitulo = "TypeScript";
let summary = `
    title: ${variableTitulo}
`;
```
También respeta la indentación:
```
let html= `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    ...
  </body>
</html>
`;
```

# Arrays

Es una colección de datos ordenada. Los definimos de la siguiente manera:
```
let prices = [1,2,3,4,5];

/* Método Push para agregar un elemento al final del array */
prices.push(6);
console.log(prices); // [1,2,3,4,5,6]
```
Para el array `prices`, TypeScript, de no indicarle explícitamente, va a inferir que este solo contendrá valores del tipo `number`, por lo que si se quiere agregar un valor `string`, por ejemplo, nos indicará un error:
```
//TypeScript
prices.push("texto"); //ERROR. Se espera agregar solo números al array.
```
Esto debido a que en su inicialización se le asignó un array que solo contenía números.

También nos indicará error si pretendemos hacer operaciones exclusivas de un tipo de dato sobre la de otro tipo:
```
let meses = ["Mayo","Junio","Julio"];
meses.map( item => item * 2 ); //ERROR. Se pretende realizar una multiplicación usando strings.
```
# Tipado de arrays en TypeScript
Lo puedes definir así:

Indicar explícitamente los tipos de datos que almacenará el array:
```
let prices: (number | string)[] = ["hola",2,4,6,"mundo"];
let otherPrices: (boolean | number)[];
```
Para este caso, a menos que la variable sea una constante, no es necesario que inicialices la variable, pues ya le indicaste el tipo de dato.

En la inicialización de la variable, colocar datos con el tipo de dato que quieres que soporte tu array en adelante para que lo pueda inferir TypeScript:
```
//TypeScript
let prices = ["hola",2,4,6,"mundo"];
// "hola", "mundo" => string
// 2,4,6 => number
```
Dejamos claro que queremos que soporte los tipos de dato `string` y `number`.

# Resumen de tipado de arrays en typescript

Cuando creamos el siguiente array de puros numeros
```
const numbers = [1, 2, 3, 4, 5]
```

TS infiere que el tipo es `number[]`. Si lo quisieramos hacer de manera explicita seria asi
```
const numbers: number[] = [1, 2, 3, 4, 5]
```

Cuando agregamos mas de un tipo de dato en un array, TS lo infiera de esta manera
```
const arr: (number | boolean | string)[] = [1, true, "str"]
```

Por ultimo, cuando un array contiene otros arrays u objetos podemos usar el tipo de dato `Object`
```
const arr: Object[] = [{}, [], {}, []]
```
Contribución creada por: Irving Juárez. PlatziNauta💚

# Any

Es un tipo de dato exclusivo de TypeScript. Su traducción sería `cualquiera`, pues literalmente nos permite almacenar cualquier tipo de dato en una variable:
```
let myDynamicVar: any;

myDynamicVar = 100; // number
myDynamicVar = null;
myDynamicVar = {}; // Object
myDynamicVar = ""; // string
```
NOTA: Se recomienda no usar este tipo de dato, pues se considera mala práctica.☢️

# Importancia del Any

La utilidad de any radica cuando se quiere migrar de a pocos a TypeScript desde JavaScript, ya que incrementalmente definiríamos el tipo de dato donde sea necesario sin romper nuestro programa de golpe.

# Tratar Any como un primitivo

Se pueden realizar conversiones a tipos de datos primitivos de JavaScript:
```
//Caso 1
myDynamicVar = "HOLA";
const otherString = (myDynamicVar as string).toLowerCase();

//Caso 2
myDynamicVar = 1212;
const otherNumber = (<number>myDynamicVar).toFixed();
```
Como observamos, podemos tratar nuestra variable any como `string` en el primer caso y como `number` en el segundo. Después de esto, podemos acceder a los métodos `toLowerCase()` y `toFixed()` según el tipo de dato correspondiente.

# Resumen Any

e esta clase se puede resumir que:

El tipo de dato `any` "desactiva" el tipado de TS, volviendo de cierta forma a JS.
No es recomendado usar `any`. Sin embargo, puede ser útil cuando estamos migrando código JS a TS.
Podemos convertir de `any` a cualquier otro tipo de dato con el `as` operator. Este se usa de la siguiente forma.
```
let foo: any = null;
foo = "My name"

const name = (foo as string)
```
De esta forma, podemos acceder a los métodos de `string` desde la variable name.

Contribución creada por: Irving Juárez. PlatziNauta💚

# Este meme, desmuestra el porque no debemos de usar any![](

![image](https://user-images.githubusercontent.com/99292913/180654498-c788ed06-38b2-4160-83bf-a545fe475d34.png)

Contribución creada por: Luis Alejandro Nieto Ruth. PlatziNauta💚

# Union Types

Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.
```
let userId: string | number;

userId = 10;
userId = "10";

function helloUser(id: string | number){
    console.log(`Hola usuario con el número de id ${id}`);
}
```
Aquí indicamos que id y userId pueden ser de tipo `string` o `number`.

# Una mejor práctica

El tipo de dato `any` nos brinda la flexibilidad de JavaScript en TypeScript con respecto al tipado. Sin embargo, si deseamos eso, es mejor hacer uso de los ``Union Types``.

# Resumen de Union Types

Los Union Types nos permiten una mayor flexibilidad al momento de tipear variables. En caso de que una variable pueda ser boolean, string o number, los Union Types quedarían de la siguiente manera.
```
let foo: string | boolean | number;
```
Lo magico aqui es que al hacer validaciones, TS nos proporciona los metodos para cada tipo de data, segun sea el caso.
```
let foo: string | boolean | number = 100;

if(typeof foo === "string"){
  console.log(foo.toLowerCase())
} else if(typeof foo === "number"){
  console.log(foo.chartAt(0))
} else{
  console.log(foo)
}
```

Contribución creada por: Irving Juárez. PlatziNauta💚

# Alias y tipos literales

Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto. Un ejemplo de como se definen sería así:
```
type UserID = string | boolean | number;
```
¡Ahora ``UserID`` lo podemos usar como si fuese un tipo de dato ``string``, ``boolean`` o ``number``!
```
let dynamicVar: UserID = "300";

dynamicVar = true;
dynamicVar = 200;
```
Los Union Types que vayamos a utilizar ahora serán menos tediosos de escribir, pues con los Alias podemos utilizar el mismo conjunto de tipos de datos en la definición de varias variables, beneficiándonos en escribir menos código.
```
type UserID = string | boolean | number;

let dynamicVar: UserID = "300";

function helloUser( userId: UserID ) {
    console.log(`Un saludo al usuario con el número de id ${userId}`);
}
```
Nota: la palabra type en los Alias es algo propio de TypeScript.

# Tipos Literales (Literal Types)

Gracias a esto podemos definir explícita y literalmente los posibles valores que puede tomar nuestra variable. Por ejemplo:
```
let shirtSize: "S" | "M" | "L" | "XL";

shirtSize = "M"; //CORRECTO
shirtSize = "S"; //CORRECTO
shirtSize = "qwrty"; //ERROR. No está en las opciones.
shirtSize = "SS"; //ERROR. Letra de más.
shirtSize = "m"; //ERROR. Está en minúscula.
```
Definimos que la variable ``shirtSize`` pueda ser una de las 4 posibles opciones de valores, que estos sean de tipo ``string`` y que estén en mayúscula, por tanto, si queremos asignar un valor que no sea exactamente como lo declaramos, TypeScript nos mostrará un error.

# Alias + Tipos Literales

También podríamos combinarlas para facilitar aún más el desarrollo de nuestro programa:
```
type Sizes = 'S' | 'M' | 'L' | 'XL';

let shirtSize: Sizes;
shirtSize = "M";

function yourSize( userSize: Sizes ){
    console.log(`Tu medida es ${userSize}`);
}
```

# Resumen Literal alias
TypeScript permite crear un alias como nombre para un tipo.
El alias se puede aplicar también a un conjunto o combinación de tipos.
Se usa la palabra reservada ``type``.
Nos ayudan a evitar la redundancia en los nombres de tipos.
Los podemos usar como un tipo de dato más.

Sintaxis
```
type TypeName = datatype1 | ... | datatypeN;
```

# Resumen Literal types
Una variable con un tipo literal puede contener únicamente una cadena del conjunto.
Se usan cadenas como "tipos", combinados con el símbolo de pipe ('|') entre ellos.
Son tipos de datos "personalizados".
Lo utilizamos para tener un conjunto acotado de opciones.

Sintaxis
```
type TypeName = 'datatype1'| ... | 'datatypeN';
```

# Null y Undefined

Estos dos funcionan como dos tipos de datos, al igual que, por ejemplo, ``string`` o ``number``.

El tipo de dato ``null`` es para indicar un valor nulo y ``undefined`` para algo indefinido. Son tipos diferentes.

# Null y Undefined como tipo Any

En TypeScript, si no especificamos que va a ser ``null`` o ``undefined``, estos son inferidos como tipo ``any``:
```
//TypeScript
let myVar = null; //Tipo any
let otherVar = undefined; //Tipo any

let myNull: null = null; // Tipo null
let myUndefined: undefined = undefined; //Tipo undefined
```

# Union Types como emergencia

Hay casos en la que queremos que una variable sea de tipo ``string`` o ``number`` y que al inicializarlas sean de tipo ``null`` o ``undefined`` para luego asignarles un valor del tipo de dato de los primeros mencionados. En este contexto podríamos usar los ``Union Types``:
```
let myNumber: number | null = null;
myNumber = 50;

let myString: string | undefined = undefined;
myString = "Hola TypeScript";
```

# Funciones

Las funciones son nativas de JavaScript y esencialmente funcionan igual en TypeScript. Sin embargo, este último, con su sistema de tipado, nos ayudará a llevar a cabo una implementación más segura:

Podemos definir que los argumentos de la función tengan un determinado tipo de dato (o más de uno si se usa ``Union Types``):
```
type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
){
   return {
        title,
        createdAt,
        stock,
        size
    }
}
```

En el argumento ``createdAt`` se indica que es de tipo Date en alusión al objeto ``Date`` propio de JavaScript y no a un tipo de dato como ``string`` o ``number``. Son diferentes las definiciones.

Cuando hagamos uso de nuestra función, TypeScript comprobará que le envíes todos los parámetros en orden y con el tipo de dato que se declaró en la función:
```
const producto1 = createProductJson(
    "titulo",
    new Date('10/10/3030'),
    30,
    'M'
)
```
![image](https://user-images.githubusercontent.com/99292913/180655701-f023efc9-25d2-4344-b534-3671bf83ea08.png)
En Visual Studio Code, si dejas el cursor sobre el nombre de la función que vas a invocar, te mostrará un mensaje con los detalles de la función, lo que espera como parámetros y lo que devolverá indicando además el orden y el tipo de dato de cada variable.

Si queremos que un argumento sea opcional de enviar, podemos usar el modificador ? junto al nombre del argumento:
```
type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

function createProductJson(
    title: string,
    createdAt: Date,
    stock?: number,
    size?: Sizes
){
    /*Código de la función*/
}
```
Nota: cuando definamos argumentos opcionales en una función, estas deben ubicarse al final, si no TypeScript nos indicará un **error, ya que podría haber confusiones al momento de invocar la función y enviar los respectivos parámetros:
```
function randomFunc(title: string, amount?: number){} //CORRECTO

function otherFunc(title?: string, amount: number){} // ERROR
```

# Retorno de funciones

En TypeScript podemos especificar el tipo de dato del valor que nos retornará una función o indicar si no se devolverá dato alguno:

# Retornos tipados en TypeScript

El tipo de retorno se especificará después de los paréntesis en los que se encuentran los argumentos de la función:

1. Void: funciones sin retorno
Este tipo de función ejecuta ciertas instrucciones, pero no devuelve dato alguno. Estas son conocidas como funciones de tipo void. Se definen así:
```
//TypeScript
function imprimirNombre(yourName: string): void {
    console.log(`Hello ${yourName}`);
}
```

2. Funciones con retorno
Por el contrario, si en la función devolveremos algún valor, podemos especificar el tipo de dato de este:
```
//TypeScript
function suma(a: number, b: number): number {
    return a + b;
}

function holaMundo(): string {
    return "Hello, World!";
}
```
También los retornos pueden ser más de un tipo de dato:
```
//TypeScript
function devolverMayor(a: number, b: number): number | string {
    if(a > b){
        // Retorna un número
        return a;
    } else if( b > a ) {
        // Retorna un número
        return b;
    } else {
        // Retorna un string
        return `Los números ${a} y ${b} son iguales`;
    }
}
```

# TypeScript también lo infiere
Si no indicamos en nuestra declaración de la función el tipado del retorno, TypeScript, al igual que con las variables, lo puede inferir según si retornas datos (sea ``string``, ``number``, etc.) o si nada es devuelto (tipo ``void``).

# Objetos en funciones

Nuestras funciones pueden recibir objetos como argumentos. En TypeScript también podemos declarar el tipado de estos. Veamos un ejemplo:
```
//TypeScript
function imprimirDatos( data: { username: string, email: string } ): void {

    console.log(`Tu nombre de usuario es ${data.username} y tu email es ${data.email}`)
    
}

imprimirDatos({
      username: 'freddier',
      email: 'freddy@email.com'
})
```
En el ejemplo, el nombre ``data`` hace referencia al objeto que recibirá la función ``imprimirDatos``. Por ello, para acceder al valor de ``username`` lo definimos en el ``console.log`` como ``data.username`` y para el ``email`` como ``data.email``, pues así es como se accede a las propiedades de un objeto.

Finalmente, cuando invocamos ``imprimirDatos`` y queremos enviar el objeto que nos pide como parámetro, simplemente se colocará entre llaves los atributos del mismo sin colocar un nombre de referencia como ``data`` tal como lo hicimos en la definición de la función.

# Objetos como tipos

En TypeScript también podemos usar los Alias para definir la estructura de tipado que debería tener un objeto:
```
//TypeScript
type userData = {
    username: string,
    email: string
}
```
Y luego este "nuevo tipo" puede ser usado en un ``array``, por ejemplo, para definir el tipado de los objetos que queramos añadir:
```
//TypeScript
type userData = {
    username: string,
    email: string
}

let usersList: userData[] = [];

usersList.push({
    username: "freddier", //CORRECTO
    email: "freddy@email.com", //CORRECTO
});
usersList.push({
    username: "cvander", //CORRECTO
    email: true, // ERROR. Debe ser de tipo string y NO de tipo boolean
});
```

# Módulos: import y export

Nuestro código puede ser dividido en varios módulos (archivos), por lo que para poder usar las funciones o variables que existen en uno y queramos acceder desde otro, utilizamos ``import`` y ``export``.

# Export
```
/*---->  Archivo: funciones.ts  <----*/
export function suma(a: number, b: number): number {
    return a + b;
}

export function resta(a: number, b: number): number {
    return a - b;
}

export let numerosRandom = [1, 30, 40, 50];
export type Sizes = "S" | "M" | "L" | "XL";
```
Como observamos, tenemos un archivo llamado ``funciones.ts`` la cual contiene dos funciones: ``suma`` y ``resta``. Si estas queremos usarlas desde otro ``archivo``, necesitamos usar la palabra reservada ``export`` justo antes de definir nuestra ``función`` (lo mismo aplica para las ``variables``). De esta forma indicamos que serán ``exportados`` para ser utilizados desde otro archivo JavaScript/TypeScript.

# Import
```
/*---> Archivo: programa.ts  <---*/

import {suma, resta, Sizes} from "./funciones.ts";
```
Finalmente, las funciones o variables que queramos utilizar desde otro archivo son importadas de la siguiente manera:

1. Usamos la palabra reservada ``import``
2. Entre llaves indicamos las funciones y/o variables que queremos acceder. Hacemos una separación con ``comas``
3. Usamos la palabra reservada ``from``, seguido de, entre comillas dobles o simples, la ruta de la ubicación en la que se encuentra el archivo del cual estamos importando su código.

Nota
Si es un módulo TypeScript lo que estamos importando, es importante que en la ruta de los ``import`` figure la extensión .ts de dicho archivo. Si es un archivo JavaScript, colocar la extensión .js es opcional.

# Usando librerías que soportan TypeScript

Las librerías que tienen soporte para TypeScript nos facilitan su uso, y más aún si usas editores de código que se integran bien con este “lenguaje”, pues brindan información muy útil como indicar:

La cantidad de parámetros esperados por una función
El tipo de datos de los parámetros y variables
El tipo de dato que retornará la función
Autocompletado al usar métodos de un módulo
Mejores prácticas

# Usando librerías que NO soportan TypeScript

El ecosistema de TypeScript ha creado unos módulos para agregar manualmente el tipado a las librerías que no tienen soporte de tipos.

Por ejemplo, si quieres trabajar con la librería ``lodash``, en Visual Studio Code se te indicará que instales un sistema de tipos para que puedas desarrollar sin problemas desde TypeScript:

![image](https://user-images.githubusercontent.com/99292913/180656553-e173b287-36b3-4507-a566-f7b07a905338.png)

## Reconocimientos a:

Contribución creada por: Martín Álvarez.
