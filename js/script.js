// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    return string.split("").reverse().join("");
}


// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    let arr = string.split("");
    let array = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] >= 'A' && arr[i] <= 'Z')
        {
            array.push(arr[i].toLowerCase());
        }
        else
        {
            array.push(arr[i].toUpperCase());
        }
    }
    return array.join("");
}

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    return array.map(x => (x - 32) * 5/9);
}


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
    return array.map(x => {
        if (x >= 75)
         x = true;
        else (x < 75)
         x = false;
        return x;
    })
}


//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    let temp = [];
    if (cardinalNumbers.length === germanNumbers.length)
    {
      for (let i = 0; i < cardinalNumbers.length; i++)
      {
      temp.push(cardinalNumbers[i] + " is " + germanNumbers[i]);
      }
      return temp;
    }
    else
    return ("The two array do not have the same length");
}

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return numbers.filter(num => {
        for (let i = 2; i < num; i++)
        {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    })
}

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" 
function display1To100() {
    for (let i = 1; i <= 100; i++)
    {
        if (i % 3 === 0 && i % 5 === 0)
        console.log("CSC225 RULES I LOVE JAVASCRIPT");
        else if (i % 3 === 0)
        console.log("CSC225 RULES");
        else if (i % 5 === 0)
        console.log("I LOVE JAVASCRIPT");
        else
        console.log(i);
    }
}