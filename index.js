// ooriihoo ner, nas, uls, durtai ongo, suragch mon eseh

const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
rl.question('Enter your age: ', (age) => {
    console.log(`Hello ${name}, you are ${age} years old.`);

    // Close the readline interface
    rl.close();
  });
});





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


// const ag_progression = (first_term , common_difference_ratio , n_terms , arithmetic , nth_term) => {
//     if (arithmetic && nth_term) {
//         return first_term + (n_terms - 1) * common_difference_ratio;
//     }
//     else if (arithmetic && !nth_term) {
//         return ((n_terms / 2) * (2 * first_term + (n_terms - 1) * common_difference_ratio));
//     }
//     else if (!arithmetic && nth_term) {
//         return first_term * (common_difference_ratio ** (n_terms - 1));
//     }
//     else {
//         return (1 / (common_difference_ratio - 1) * (first_term * (common_difference_ratio ** n_terms - 1)));
//     }
// }


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











