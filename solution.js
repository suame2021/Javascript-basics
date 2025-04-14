

//30 JavaScript Exercises for Students

// console.log("Question 1: Create a variable to store your name and display it in an alert")
// let myName = "Suame Ikechukwu Paul";
// const alert = require('alert');
// alert(myName);

//2. Declare two number variables and show their sum, difference, product, and quotient.
console.log("Question 2: Declare two number variables and show their sum, difference, product, and quotient.");
let num1=10;
let num2=20;
sum=num1+num2;
diff=num1-num2;
prod=num1*num2;
quot=num1/num2
console.log(`The Sum of ${num1} and (${num2} is: ${sum}`);
console.log(`The difference between ${num1} and ${num2} is: ${diff}`);
console.log(`The product of ${num1} and ${num2} is: ${prod}`);
console.log(`The quotient of ${num1} and ${num2} is: ${quot}`);
console.log("");


//3. Write a program that converts Celsius to Fahrenheit.
console.log("Question 3: Write a program that converts Celsius to Fahrenheit.");
let teminCel=45;
fah=(teminCel * 9/5) + 32;
console.log(`${teminCel}°C is equal to ${fah}°F`);
console.log("");

//4. Create a program that calculates the area of a rectangle using variables for length and width.
console.log("Question 4: Create a program that calculates the area of a rectangle using variables for length and width.");
let lenth=10;
width=5;
areaofRec=lenth*width;
console.log(`A triangle of ${lenth}cm and a Width of ${width}cm, will gve you an Area of ${areaofRec}`);
console.log("");

//5. Write code that checks if a number is even or odd and displays the result.
console.log("Question 5: Write code that checks if a number is even or odd and displays the result.");
let num = 40;
if (num % 2===0) 
    {
console.log(`${num} is an even number` );
}
else
{
console.log(`${num} is an odd number` );
}
console.log("");


//6. Create a program that determines if a year entered is a leap year.
console.log("Question 6: Create a program that determines if a year entered is a leap year.");
let year=2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}
console.log("");


//7. Write a function that returns the reverse of a string input.
console.log("Question 7: Write a function that returns the reverse of a string input.");
const input = "I am going to school to read my book"; 
let reversed = "";
let len = input.length-1;

for (let i = len; i >= 0; i--) {
    reversed += input[i];
}
console.log(`The Original string input is: ${input}`);
console.log(`The Reversed string is: ${reversed}`);
console.log("");

//8. Create a function that counts the number of vowels in a string.
console.log("Question 8: Create a function that counts the number of vowels in a string.");
function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

const inputString = "I am learning Mobile application development";
const noVowelCount = vowelCount(inputString);
console.log(`"${inputString}" contains ${noVowelCount} vowels`);
console.log("");

//9. Write a program that finds the largest number in an array of 5 numbers.
console.log("Question 9: Write a program that finds the largest number in an array of 5 numbers.");
const numbers = [18, 28, 27, 8, 42]; // Example array of 5 numbers
let largestNo = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNo) {
        largestNo = numbers[i];
    }
}

console.log(`The largest number is: ${largestNo}`);

console.log("");

//10. Create a function that checks if a string is a palindrome.
console.log("Question 10: Create a function that checks if a string is a palindrome.");
function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '')
    const lowerst = cleanedStr.toLowerCase();
  
    return lowerst === lowerst.split('').reverse().join('');
}
console.log(isPalindrome("Madam")); 
console.log(isPalindrome("Hello"));   
console.log("");

//11. Write code that calculates the factorial of a number.
console.log("Question 11: Write code that calculates the factorial of a number.");
let numb =10;
let result = 1;

for  (let i=2;i<=numb; i++)
    {
        result=result*i
}
console.log(`The factorial of ${numb} is: ${result}`)
console.log("");


//12. Create a function that generates a random number between two given values.
console.log("Question 12: Create a function that generates a random number between two given values.");
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const min=20;
  const max=50;
  const randomNum = randomNumberGenerator(min, max);
  console.log(`The random number between 20 and 50 is ${randomNum}`)
  console.log("");

//13. Write a program that converts a number of seconds into hours, minutes, and seconds.
console.log("Question 13: Write a program that converts a number of seconds into hours, minutes, and seconds.");
function timeConverter(sec){
    let hours = Math.trunc(sec/3600);
    let remmin = sec % 3600;
    
    let min=Math.trunc(remmin/60)
    let second=remmin%60
    console.log(`${sec} Seconds = ${hours} hours, ${min} minutes  and ${second} seconds `)
    
}

const time = timeConverter(20000);
console.log("");

//14. Create a program that checks if a number is prime.
console.log("14: Create a program that checks if a number is prime.");
function primeCheck(number) {
    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }
    
    if (number % 2 === 0) {
        return false;
    }
   
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

const nu = 17; 
if (primeCheck(nu)) {
    console.log(`${nu} is a prime number.`);
} else {
    console.log(`${nu} is not a prime number.`);
}

console.log("");
// //15. Write a function that capitalizes the first letter of each word in a sentence.
console.log("15: Write a function that capitalizes the first letter of each word in a sentence.");
function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    let result = [];
    
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > 0) {
        let capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
        result.push(capitalized);
      } else {
        result.push(word);
      }
    }
  
    return result.join(" ");
  }
  


console.log(capitalizeWords("hello world from javascript"));

console.log("");

// //16. Create a program that calculates the sum of all numbers from 1 to n.
console.log("16: Create a program that calculates the sum of all numbers from 1 to n.");
function sumOfNUm(n) {
    let summm = 0;
    let i=0;
    for (i = 1; i <= n; i++) {
        summm += i;
    }
    return summm;
}
let n =5;
let summm = sumOfNUm(n)
console.log(`The sum of the numbers from 1 to ${n} is ${summm}`);  
console.log("");

//17. Write code that finds the average of numbers in an array.
console.log("17: Write code that finds the average of numbers in an array");
function calculateAverage(numbers) {

     let summ = 0;
     let num = 0
     for (num of numbers) {
         summ += num;
     }
     avg=summ / numbers.length;
     return avg
 }
 
 const numm = [10, 20, 30, 40, 50];
 average=calculateAverage(numm)

 
 console.log(`The sum of ${numm} is ${average}`)
 
console.log("");
//18. Create a function that removes duplicate values from an array.
console.log("Question 18: Create a function that removes duplicate values from an array.");


console.log("");

//19. Write a program that counts down from 10 to 1, then displays "Blast off!".
console.log('19: Write a program that counts down from 10 to 1, then displays "Blast off!"');
let i=0;
for (i = 10; i >= 1; i--) {
    console.log(i);
  }
  console.log("Blast off!");
console.log("");

// 20. Create a function that determines if a string contains only numbers.
console.log("20: Create a function that determines if a string contains only numbers.");
function isNumeric(str) {
   
    for (let i = 0; i < str.length; i++) {
        if (str[i] < '0' || str[i] > '9') {
            return false; 
        }
    }
    return true; 
}

console.log(isNumeric("12345")); 
console.log(isNumeric("123a5")); 
console.log(isNumeric("123 45")); 


console.log("");

//21. Write code that finds the second smallest number in an array.
console.log("21: Write code that finds the second smallest number in an array.");

function findSecondSmallest(arr) {
 
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num > smallest && num < secondSmallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest 
    
   
  }
  
  const numberss = [4, 1, 7, 3, 9];
  console.log(`The Second smallest  number within ${numberss} is ${findSecondSmallest(numberss)}`);
  
  
console.log("");

//22. Create a program that displays the multiplication table for a given number.
console.log(" Question 22: Create a program that displays the multiplication table for a given number.");


function multiplicationTable(number, limit=12) {
    let i=0;
    for (i = 1; i <= limit; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }

  multiplicationTable(5);
 
console.log("");

//23. Write a function that validates if a password meets specific criteria (at least 8 characters, one uppercase, one lowercase, one number).
// console.log(" Question 23: Write a function that validates if a password meets specific criteria (at least 8 characters, one uppercase, one lowercase, one number).");
// console.log("");

// //24. Create code that simulates a simple calculator with basic operations.
console.log("Question 24: Create code that simulates a simple calculator with basic operations.");

function simpleCalculator() {
    const prompt = require('prompt-sync')();
    const operation = prompt('Enter operation (+, -, *, /):');
    const num1 = parseFloat(prompt('Enter first number:'));
    const num2 = parseFloat(prompt('Enter second number:'));
  
    let result;
    
    switch(operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        break;
      default:
        result = 'Error: Invalid operation';
    }
  
    console.log(`Result: ${result}`);
  }
  
  simpleCalculator();

// console.log("");

//25. Write a program that finds all factors of a given number.
console.log("Question 25: Write a program that finds all factors of a given number.");


function findFactors(numbber) {
    const factors = [];
  
    let i = 0;
  
    for (i = 1; i <= numbber; i++) {
      if (numbber % i === 0) {
        factors.push(i);
      }
    }
  
    return factors;
  }
  
  const nnum = 12;
  const rresult = findFactors(nnum);
  console.log(` The Factors of ${nnum} are :`, rresult);
console.log("");

// //26. Create a function that checks if two strings are anagrams.
// console.log("");
// console.log("");

// //27. Write a program that generates the Fibonacci sequence up to n terms.
console.log("Question 27: Write a program that generates the Fibonacci sequence up to n terms.");
function fibonacciIterative(n) {
    const sequence = [0, 1];
    
    if (n <= 0) 
        return [];
    if (n === 1) 
        return [0];
    
    let i=0;
    for (i = 2; i < n; i++) {
      sequence.push(sequence[i-1] + sequence[i-2]);
    }
    
    return sequence.slice(0, n);
  }
  
  console.log(fibonacciIterative(10));

// console.log("");

//28. Create code that sorts an array of numbers without using the built-in sort method.
console.log("Question 28: Create code that sorts an array of numbers without using the built-in sort method.");
function arraySort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        
        for (let j = 0; j < n - 1 - i; j++) {
           
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
  }
  
  let numbeers = [5, 2, 9, 1, 5, 6];
  console.log("Sorted array:", arraySort(numbeers));
  
// console.log("");

//29. Write a function that counts how many times a specific element appears in an array.
console.log("Question 29: Write a function that counts how many times a specific element appears in an array.");
function countOccurrences(array, item) {
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        count++;
      }
    }
  
    return count;
  }
 
  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  
  console.log(countOccurrences(fruits, 'apple'));  
  console.log(countOccurrences(fruits, 'banana'));  
  console.log(countOccurrences(fruits, 'grape'));   
  
// console.log("");

// //30. Create a shopping cart program where users can add items, remove items, and calculate the total price.
// console.log("");
// console.log("");