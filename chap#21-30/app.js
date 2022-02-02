// 1. Take a input from user in number with decimal point user input is 3.4

//var userInput = prompt("Enter a Decimal Value");

// 2. Convert it into greater number Example: Math.ceil(3.4); to 4

//Math.ceil(userInput);
// Declear a variable of string and assign some text var text="This is my dummy text"

var dummy = "This is a Dummy Text";


// Slice the text into a new variable from 0 to the rounded number 0 to 4;

let dum = dummy.slice(0,4);
var rev = ''

// Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT

for (var i = dum.length ; i >= 0; --i){
       rev += dum[i];
}

alert(rev);
// print value in aler/t "shiT"

var inputValue = prompt("Enter a string");
inputValue = inputValue.toLowerCase();
inputValue = inputValue.split(' ');

for (var i = 0; i < inputValue.length; i++) {
    // if (i === 0) {
    //     inputValue = inputValue.charAt(i).toUpperCase() + inputValue.slice(1);
    // }
    // else {
    //     if (inputValue[i] === " ") {
    //         inputValue[++i] = inputValue[++i].charAt(++i).toUpperCase() + inputValue.slice(++i);
    //     }
    // }
    inputValue[i] = inputValue[i].charAt(0).toUpperCase() + inputValue[i].substring(1);
    inputValue.join(' ');
}
console.log(inputValue);
