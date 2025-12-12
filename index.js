// ooriihoo ner, nas, uls, durtai ongo, suragch mon eseh

// const readline = require('readline');

// // Create readline interface
// let a = 3
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your name: ', (name) => {
//   rl.question('Enter your age: ', (age) => {
//     console.log(`Hello ${name}, you are ${age} years old.`);

//     // Close the readline interface
//     rl.close();
//   });
// });





// const simple_calculator = {
//     product: function(num1, num2, operator) {
//     if (operator === '+'){
//         return num1 + num2;
//     } 
//     else if (operator === '-') {
//         return num1 - num2;
//     } 
//     else if (operator === '*') {
//         return num1 * num2;
//     } 
//     else if (operator === '/') {
//         return num1 / num2;
//     }
//     else {
//         return 'Invalid operator';
//     }
//     }
// }


address = {
    city: 'Bangcock',
    street: 'Leon street',
    zipcode: '13350',
}
student = {
    name: 'Alice',
    age: 22,
    address: address,
}

function GetFullAdress(student) {
    return `Address: ${student.address.street}, ${student.address.city}, ${student.address.zipcode}`;
}

movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'Scifi',
}
car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'White',
    isElectric: false,
}
person = {
    name: 'John',
    age: 30,
    firstname: 'Duke',
    lastname: 'Nukem',
    isStudent: false,
}

delete person.age;
 
const updated_person = Object.assign(person, {
    ismarried: true,
}
);

function GetFullName(updated_person) {
    return `This guys full name is ${updated_person.firstname} ${updated_person.lastname}`;
}

function GetKeysAndValues(movie) {
    return `Movie keys are: ${Object.keys(movie)} and values are: ${Object.values(movie)}`;
}





// const floor = {
//     first_floor: {
//         number: [ 1 , 2 ,3 , 5]
//     },
//     second_floor: {
//         number += 
//     },
//     third_floor: {
//         number: [ 10 , 11 , 12 , 13]
//     },
//     fourth_floor: {
//         number: [ 14 , 15 , 16 , 17]
//     }

// }
