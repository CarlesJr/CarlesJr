//  Exercixe 1
//  Pre-defined functions solution
//  let today = new Date();
//  let daysInCurrentMonth = new Date(
//    today.getFullYear(),
//    today.getMonth() + 1,
//    0
//  ).getDate();

//  console.log("This month has: ", daysInCurrentMonth, " days");

//   Without functions solution

//  let today2 = new Date();
//  let getCurrentMonth = today2.getMonth();
//  let answer = "The actual month has: ";
//  switch (12) {
//    case 0:
//      console.log(answer + 31 + " days");
//      break;
//    case 1:
//      console.log(answer + 28 + " days");
//      break;
//    case 2:
//      console.log(answer + 31 + " days");
//      break;
//    case 3:
//      console.log(answer + 30 + " days");
//      break;
//    case 4:
//      console.log(answer + 31 + " days");
//      break;
//    case 5:
//      console.log(answer + 30 + " days");
//      break;
//    case 6:
//      console.log(answer + 31 + " days");
//      break;
//    case 7:
//      console.log(answer + 31 + " days");
//      break;
//    case 8:
//      console.log(answer + 30 + " days");
//      break;
//    case 9:
//      console.log(answer + 31 + " days");
//      break;
//    case 10:
//      console.log(answer + 30 + " days");
//      break;
//    case 11:
//      console.log(answer + 31 + " days");
//      break;
//    default:
//      answer = "Unknown month";
//      console.log(answer);
//      break;
//  }

 // Exercise 2
// saving a given name by user
//  let userChoice = prompt("Please, enter a month name:");
//  console.log(userChoice);

//  switch (userChoice.toLowerCase()) {
//    case "january":
//      console.log(31);
//      alert(31); //another way to show the result
//      break;
//    case "february":
//      console.log(28);
//      break;
//    case "march":
//      console.log(31);
//      break;
//    case "april":
//      console.log(30);
//      break;
//    case "may":
//      console.log(31);
//      break;
//    case "june":
//      console.log(30);
//      break;
//    case "july":
//      console.log(31);
//      break;
//    case "august":
//      console.log(31);
//      break;
//    case "september":
//      console.log(30);
//      break;
//    case "october":
//      console.log(31);
//      break;
//    case "november":
//      console.log(30);
//      break;
//    case "december":
//      console.log(31);
//      break;

//    default:
//      console.log("That’s not a real month");
//      break;
//  }

// Exercise 3
// let temperature = prompt("what temperature is it out there?");
// console.log(typeof temperature);
// switch (true) {
//   case temperature < 15:
//     alert("Warm up");
//     break;
//   case temperature <= 25:
//     alert("Enjoy the weather!");
//     break;
//   case temperature > 25:
//     alert("Cool down");
//     break;
//   default:
//     alert("Write a real data!");
//     break;
// }

// if (temperature < 15) {
//   alert("Warm up");
// } else if (temperature <= 25) {
//   alert("Enjoy the weather!");
// } else if (temperature > 25) {
//   alert("Cool down");
// } else {
//   alert("Write a real data!");
// }

// Exercise 4
//  let isGreen = true;
// trying the negate operator
//  if (!isGreen) {
//    console.log("Please await");
//  } else {
//    console.log("Cross the road");
//  }
// more understandable and intuitive
//  if (isGreen) {
//    console.log("Cross the road");
//  } else {
//    console.log("Please await");
//  }

// Giovanna solution
//  let actualDate = new Date();
//  let currentTime = actualDate.getMinutes();
//  console.log(currentTime);
// Checks if the minutes of the current time are odd or even.
// If even, the lights are green, and if odd, the lights are red
// let isGreen = currentTime % 2 == 0;
//  switch (isGreen) {
//    case true:
//      console.log("Cross the road");
//      break;
//    case false:
//      console.log("Please await");
//      break;
//    default:
//      console.log("Watch out! The traffic lights are broken!");
//      break;
//  }

// Exercise 5
// let temperature = "Freezing Point";
// switch (temperature) {
//   case "Absolute Zero":
//     console.log((-273.15 * 9) / 5 + 32);
//     break;
//   case "Freezing Point":
//     console.log((0 * 9) / 5 + 32);
//     break;
//   case "Body Temperature":
//     console.log((37 * 9) / 5 + 32);
//     break;
//   case "Boiling Point ":
//     console.log((100 * 9) / 5 + 32);
//     break;
//   default:
//     console.log("There are more grades in my beer!");
//     break;
// }
// Erika solution
// const CELSIUS = prompt("Write temperature in grades centigrades");
// // let celsius = parseFloat(prompt("Convert to fahrenheit"));
// const FAHRENHEIT = (CELSIUS * 9) / 5 + 32;
// console.log(
//   `${CELSIUS} degree celsius is equal to ${FAHRENHEIT} degree fahrenheit.`
// );

// Exercise 6
// let email = "tolkien@lordofrings.com";
// let password = "aNBR6ZeWPY";

// let userEmail = prompt("Please, enter your email");
// let userPassword = prompt("Please, enter your password");
// if (email == userEmail && password == userPassword) {
//   alert("Welcome Mr. Tolkien");
// } else {
//   alert("Wrong password or email");
// }

// Julio solution
// let email = prompt("Please, enter your email");
// let password = prompt("Please, enter your password");
// if (email == "tolkien@lordofrings.com" && password == "aNBR6ZeWPY") {
//   alert("Welcome Mr. Tolkien");
// } else {
//   alert("Wrong password or email");
// }

// Exercise 7
// let money = 500;
// let convertTo = "libra";
// let dollar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franc = 1.03;
// switch (convertTo) {
//   case "dollar":
//     console.log(`The value of ${money} in dollars is: `, money * dollar);
//   // break;
//   case "yen":
//     console.log(`The value of ${money} in yens is: `, money * yen);
//   // break;
//   case "libra":
//     console.log(`The value of ${money} in libras is: `, money * libra);
//   // break;
//   case "francs":
//     console.log(`The value of ${money} in swiss francs is: `, money * franc);
//   // break;
//   default:
//     console.log("You don't have all that money!");
//     break;
// }

// Evaluating califications
//let calification = prompt("Please, enter your calification:");
// nota por debajo de 5 failure
// 5 => passed
// 6 => well
// 7 y 8 => remarkable
// 9 y 10 => outstanding
// solution (with switch)
// switch (parseInt(calification)) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("failure");
//     break;
//   case 5:
//     console.log("passed");
//     break;
//   case 6:
//     console.log("well");
//     break;
//   case 7:
//   case 8:
//     console.log("remarkable");
//     break;
//   case 9:
//   case 10:
//     console.log("outstanding");
//     break;
//   default:
//     console.log("out of range");
//     break;
// }

// Exercise 8
// let num1 = parseFloat(prompt("Please enter the first number:"));
// let num2 = parseFloat(prompt("Please enter the second number:"));
// let operation = prompt(
//   "Please choose one option: add, subtract, multiply, divide"
// );

// switch (operation) {
//   case "add":
//     console.log(num1 + num2);
//     break;
//   case "subtract":
//     console.log(num1 - num2);
//     break;
//   case "multiply":
//     console.log(num1 * num2);
//     break;
//   case "divide":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Please choose a valid option.");
//     break;
// }
// // Kay solution
// let x = prompt("Introduce un numerito");
// let y = prompt("Introduce otro");
// let calculo = prompt(
//   "¿Que calculo quieres hacer? (suma, resta, multiplicacion o division)"
// );
// if (calculo == "suma") {
//   console.log(parseFloat(x) + parseFloat(y));
// } else if (calculo == "resta") {
//   console.log(parseFloat(x) - parseFloat(y));
// } else if (calculo == "multiplicacion") {
//   console.log(parseFloat(x) * parseFloat(y));
// } else if (calculo == "division") {
//   console.log(parseFloat(x) / parseFloat(y));
// } else {
//   console.log(
//     "chiki, tu no ta enterao de na en las clases de mate de primaria"
//   );
// }

// Exercise 9
// let data = prompt("Please enter DNI or NIE:");
// //Verify data length
// if (data.length == 9) {
//   // checking if data begins by T or X
//   if (data.charCodeAt(0) == 84 || data.charCodeAt(0) == 88) {
//     // Checking if the last char is a letter too
//     if (
//       // data.charCodeAt(data.length - 1) >= 65 &&
//       // data.charCodeAt(data.length - 1) <= 90
//       // Jorge solution
//       65 <=
//       data.charCodeAt(data.length - 1) <=
//       90
//     ) {
//       // Checking if the other part of the string is fullfilled by numbers
//       if (
//         data.charCodeAt(1) >= 48 &&
//         data.charCodeAt(1) <= 57 &&
//         data.charCodeAt(2) >= 48 &&
//         data.charCodeAt(2) <= 57 &&
//         data.charCodeAt(3) >= 48 &&
//         data.charCodeAt(3) <= 57 &&
//         data.charCodeAt(4) >= 48 &&
//         data.charCodeAt(4) <= 57 &&
//         data.charCodeAt(5) >= 48 &&
//         data.charCodeAt(5) <= 57 &&
//         data.charCodeAt(6) >= 48 &&
//         data.charCodeAt(6) <= 57 &&
//         data.charCodeAt(7) >= 48 &&
//         data.charCodeAt(7) <= 57
//       ) {
//         console.log("valid NIE");
//       } else {
//         console.log("Please, check your NIE");
//       }
//     }
//     // if NIE fails, then check the DNI
//   } else if (
//     data.charCodeAt(0) >= 48 &&
//     data.charCodeAt(0) <= 57 &&
//     data.charCodeAt(1) >= 48 &&
//     data.charCodeAt(1) <= 57 &&
//     data.charCodeAt(2) >= 48 &&
//     data.charCodeAt(2) <= 57 &&
//     data.charCodeAt(3) >= 48 &&
//     data.charCodeAt(3) <= 57 &&
//     data.charCodeAt(4) >= 48 &&
//     data.charCodeAt(4) <= 57 &&
//     data.charCodeAt(5) >= 48 &&
//     data.charCodeAt(5) <= 57 &&
//     data.charCodeAt(6) >= 48 &&
//     data.charCodeAt(6) <= 57 &&
//     data.charCodeAt(data.length - 1) >= 65 &&
//     data.charCodeAt(data.length - 1) <= 90
//   ) {
//     console.log("valid DNI");
//   } else {
//     console.log("Please, check your DNI");
//   }
// } else {
//   console.log("Please enter valid data");
// }

// Kay solution
//Comprobador de DNI
// let identificacion = prompt(
//   "¿Se va a registrar con el DNI o con el NIE?"
// ).toUpperCase();
// switch (identificacion) {
//   case "DNI":
//     var DNI = prompt("Introduzca su DNI");
//     if (
//       DNI.charCodeAt(0) >= 48 &&
//       DNI.charCodeAt(0) <= 57 &&
//       DNI.charCodeAt(1) >= 48 &&
//       DNI.charCodeAt(1) <= 57 &&
//       DNI.charCodeAt(2) >= 48 &&
//       DNI.charCodeAt(2) <= 57 &&
//       DNI.charCodeAt(3) >= 48 &&
//       DNI.charCodeAt(3) <= 57 &&
//       DNI.charCodeAt(4) >= 48 &&
//       DNI.charCodeAt(4) <= 57 &&
//       DNI.charCodeAt(5) >= 48 &&
//       DNI.charCodeAt(5) <= 57 &&
//       DNI.charCodeAt(6) >= 48 &&
//       DNI.charCodeAt(6) <= 57 &&
//       DNI.charCodeAt(7) >= 48 &&
//       DNI.charCodeAt(7) <= 57 &&
//       DNI.charCodeAt(8) >= 65 &&
//       DNI.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your DNI number is incorrect");
//     }
//     break;
//   case "NIE":
//     var NIE = prompt("Introduzca su NIE");
//     if (
//       (NIE.charCodeAt(0) == 84 || NIE.charCodeAt(0) == 88) &&
//       NIE.charCodeAt(1) >= 48 &&
//       NIE.charCodeAt(1) <= 57 &&
//       NIE.charCodeAt(2) >= 48 &&
//       NIE.charCodeAt(2) <= 57 &&
//       NIE.charCodeAt(3) >= 48 &&
//       NIE.charCodeAt(3) <= 57 &&
//       NIE.charCodeAt(4) >= 48 &&
//       NIE.charCodeAt(4) <= 57 &&
//       NIE.charCodeAt(5) >= 48 &&
//       NIE.charCodeAt(5) <= 57 &&
//       NIE.charCodeAt(6) >= 48 &&
//       NIE.charCodeAt(6) <= 57 &&
//       NIE.charCodeAt(7) >= 48 &&
//       NIE.charCodeAt(7) <= 57 &&
//       NIE.charCodeAt(8) >= 65 &&
//       NIE.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your NIE number is incorrect");
//     }
//     break;
//   default:
//     alert("Incorrect option");
// }

// Exercise 10
// Setting max and min possible values
// let max = 6;
// let min = 1;
// Generating a random number between max and min
// Jorge solution
// let randomNumber1 = (Math.floor(Math.random() * 10) % 6) + 1;
// //let randomNumber1 = Math.floor(Math.random() * max) + min;
// let randomNumber2 = Math.floor(Math.random() * max) + min;

// console.log(randomNumber1);
// console.log(randomNumber2);
// if (randomNumber1 > randomNumber2) {
//   console.log("Player 1 wins!");
// } else if (randomNumber1 < randomNumber2) {
//   console.log("Player 2 wins!");
// } else {
//   console.log("Draw");
// }


// Ejercicios

// Ej. 1
//let product1 = {
//    id: "Polaris",
//    name: "Ursa Minor",
//    price: "Double/Cepheid",
//    quantity: "F7",
//    };
//let product2 = {
//    id: "Polaris",
//    name: "Ursa Minor",
//    price: "Double/Cepheid",
//    quantity: "F7",
//    };
//let product3 = {
//    id: "Polaris",
//    name: "Ursa Minor",
//    price: "Double/Cepheid",
//    quantity: "F7",
//    };
//let product4 = {
//    id: "Polaris",
//    name: "Ursa Minor",
//    price: "Double/Cepheid",
//    quantity: "F7",
//    };
//    
//console.log(shoppingCart[Object.keys(shoppingCart)[0]]);
//
//let keys = Object.values(shoppingCart);
//
//for(let i=0; i<Object.keys(shoppingCart).length; i++){
//  console.log("ID: "+ keys[i].id + " , Name: " +keys[i].
//  name);
//}

// Ejercicio 10
//let min = 1;
//let max = 6;
//let player1 = Math.floor(Math.random() * (max - min + 1) ) = min;
//let player2 = Math.floor(Math.random() * (max - min + 2) ) = min;

//if (player1 > player2) {
//  console.log("Player 1 wins!");
//} else if (player1 < player2) {
//  console.log("Player 2 wins!");
//} else {
//  console.log("Draw");
//}
//console.log(player1);

  
//function compare(value1, value2) {
//    console.log("working!");
//  if (value1 < value2) {
//    return -1;
//  } else if (value1 > value2) {
//    return 1;
//  } else {
//    return 0;
//  }
//}
//let numbers =[0,1,5,10,15];
//let copyOfNumbers = [...numbers]
//let secondCopyOfNumbers = Array.from(numbers)

//copyOfNumbers.reverse();

//console.log(numbers);
//console.log(copyOfNumbers);

//console.log(secondCopyOfNumbers);
//secondCopyOfNumbers.sort()
//console.log(secondCopyOfNumbers);

//let team = [
//    "Alice", 
//    "Sebastian", 
//    "Ismael", 
//    "Juan", 
//    "David Miró", 
//    "David Calero"
//];
//team.sort()
//console.log(team);
//secondCopyOfNumbers.sort(compare)

//console.log(secondCopyOfNumbers);

//let unorderedNumbers = [20,-8,3,102,43,18]
//unorderedNumbers.sort(compare)
//console.log(unorderedNumbers);

//let unorderedNumbers = [20,-8,3,102,43,18]
//let counter = 0;
//unorderedNumbers.sort(function(value1,value2){
//    counter++;
//    console.log("value1: ",value1);
//    console.log("value2: ",value2);
//    return value1 - value2;
//});
//console.log(counter);
//console.log(unorderedNumbers);
//unorderedNumbers.sort((value1,value2)=> value2 - value1);
//console.log(unorderedNumbers);


// Traditional methods for ordering arrays
//let numbers = [3, 9, 8, 1, 4];
//for (let i = 0; i < numbers.length - 2; i++) {
//console.log(numbers);
//for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
//if (numbers[j] > numbers[j + 1]) {
//aux = numbers[j];
//numbers[j] = numbers[j + 1];
//numbers[j + 1] = aux;
//}
//}
//}
//console.log(numbers);
//for (const num of numbers) {
//    console.log(num);
//}

// let shoppingCart = {
//     product1: {
//         id: 0,
//         name: "trainers",
//         price: 29.95,
//         quantity: 1
//     },
//     product2: {
//         id: 1,
//         name: "suitcase",
//         price: 109.95,
//         quantity: 1
//     },
//     product3: {
//         id: 2,
//         name: "glovers",
//         price: 9.95,
//         quantity: 1
//     },
//     product4: {
//         id: 3,
//         name: "t-shirt",
//         price: 19.95,
//         quantity: 2
//     }
// }
// for (let key in shoppingCart) {
//     console.log(shoppingCart[key].id);
//     console.log(shoppingCart[key].name);
// }

// let hero = {
//     character: "Iron Man",
//     name:"Tony Stark"
// }
// for (const key in hero) {
//     // console.log('${entries} => ${hero[entries]}');
//     console.log('${keys}: => id: ${values.id}, name: ');
// }

// ["Aragorn","Gandalf","Nazgul"].forEach((element,index,array) => {
//   console.log("${element} is at index ${index} in ${array}");
// });

// [..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
//     console.log(letter);
// });

// let numbers = [1,2,3];
// let mappedNumbers = numbers.map((number) => number * 2);
// console.log(mappedNumbers);

// let filteredNumbers = numbers.filter(number => number < 3);
// console.log(filteredNumbers);

// console.log(
//     numbers.every(number => number > 2)
// );
// console.log(
//     numbers.some(number => number > 2)
// );

// let totalSum = numbers.reduce((accum, number)=> accum + number,0)
// console.log(totalSum);
// totalSum = 0;
// totalSum = numbers.reduceRight((accum, number)=> accum + number,0)
// console.log(totalSum);

// let calendar = new Array(5)
// for (let i = 0; i < calendar.length; i++){
//     calendar[i] = new Array(7)
// }

// for (let row = 0, day = 1; row < calendar.length; row++) {
//     for (let col = 0; col < calendar[row].length; col++) {
//         if (day < 31) {
//             calendar[row][col] =day++;
//         } else if(day == 31){
//             calendar[row][col] =day;
//             day = 1;
//         }
//     }
// }

// console.log(calendar);{

// function sayHello(){
//     console.log("Hi, good night!");
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();

// const sum = function (num1, num2) {
//     return num1 + num2;
// };
// const sum2 = (num1,num2) => num1 + num2;

// console.log(sum(2,2));
// console.log(sum(1,3));
// console.log(sum2(11,11));

