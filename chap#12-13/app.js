// 1. Write a program that takes a character (number or string)
//    in a variable & checks whether the given input is a
//    number, uppercase letter or lower case letter. (Hint: ASCII
//    codes:- A=65, Z=90, a=97, z=122).

var userInput = prompt("Enter a Character ex: a-z,A-Z,0-9")

var ascii = userInput.charCodeAt(0)
if (ascii >= 65 && ascii <= 90){
    alert("you input a Capital letter")
} else if (ascii >= 97 && ascii <=122){
    alert("you input a Small letter")
}else if (ascii >= 48 && ascii <=57){
    alert("you input a number")
}
 else{
    alert ("you have done something wrong")
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


var val1 = +prompt( "Enter a Number:" );
var val2 = +prompt( "Enter another number :");

if ( val1 > val2 ){
    document.write( val1 + ' ' + "is greather than" + ' ' + val2 )
}
else if ( val2 > val1 ){
    document.write( val2 + ' ' + "is greather than" + ' ' + val1 )  
}

else{
    document.write( val1 + ' ' + "is equal to" + ' ' + val2)
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var input = +prompt( "Please Enter a Number" );

if ( input > 0 ){
    document.write( "Your Number is Positive (+)")
}

else if ( input < 0 ){
    document.write( "Your Number is negative (-)")
}

else {
    document.write( "Your Number Equal to zero ")
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var input2 = prompt("Enter a single a Character")
input2 = input2.toLowerCase();

if ( input2 == "a"|| input2 == "e" || input2 == "i" ||  input2 == "o" || input2 == "u"  ) {
     document.write("Your Character is  Vowel")
}
else{
    document.write("Your Character is not vowel")
}

// 5.  Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


var pass = "shaikhoo"
var input3 = prompt( "Please Insert Password");
if ( input3 == ""){
    alert( " please Enter your Password")

}
else if ( input3 === "shaikhoo"){
    alert(  "Correct! The password you entered matches the original password" )
}
else {
    alert("Password Incorrect")
}