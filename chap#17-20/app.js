// 1. Declare and initialize an empty multidimensional array.
//    (Array of arrays)

var num = [[],[],[]]

// 2. Declare and initialize a multidimensional array
//    representing the following matrix:

var num = [[],[],[]]

num[0] = [0,1,2,3]
num[1] = [1,0,1,2]
num[2] = [2,1,0,1]
document.write(num[0]+"<br/>"+num[1]+"<br/>"+num[2]+"<br/>")


// 3.Write a program to print numeric counting from 1 to 10.

for ( let i = 1 ; i <= 10 ; i++){
    document.write( i + "</br>" );
}

//4.Write a program to print multiplication table of any
//  number using for loop. Table number & length should be
//  taken as an input from user.

var tableNumber = +prompt("Please Enter a Number you want a Table of :");
var tableLenght = +prompt("Enter a lenght u want it to multiply till : ");

for ( var i = 1 ; i<= tableLenght; i++){
    document.write( tableNumber  + "x"  + i + "=" + ( tableNumber * i ) + "</br>" )
}

// 5. Write a program to print items of the following array
// using for loop.

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
 
for ( var i = 0 ; i< fruits.length; i++ ){
    document.write( "Element at index" + i + "is " + fruits[i] +  "</br>"   )
}

// 6: Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write( "Counting :" + "</br>" );
for ( let i = 1 ; i <= 15 ; i++){
    document.write( " " + i);
    
}

document.write( "Reverse Count :" + "</br>" );
for ( let i = 10 ; i > 0 ; i--){
    document.write( " " + i);
    
}

document.write( "Even :" + "</br>" );
for ( let i = 0 ; i <= 20 ; i++ ){
    if (i % 2 ===0 ){
    document.write( " " + i);
    }
}

document.write( "Odd :" + "</br>" );
for ( let i = 0 ; i <= 20 ; i++ ){
    if (i % 2 !== 0 ){
    document.write( " " + i);
    }
}

document.write( "Series :" + "</br>" );
for ( let i = 2 ; i <= 20 ; i++ ){
    if (i % 2 == 0 ){
    document.write( i + "K ," );
    }
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.


var a = ["cake","apple pie","cookie","chips","patties"]
var user = prompt("Search An item")
var b = a.indexOf(user)
if(b<0){
    alert("we are sorry"+user+"is not available in our bakery")
}
else{
    alert(user+"is available at index "+b+" in our bakery") 
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var arr = [24,53,78,91,12];
var max = Math.max.apply(Math,arr)
var min = Math.min.apply(Math,arr)
console.log(max , min)
document.write(
    "Array items: "+arr+
    "<br/> The largest number is " +max+
    "<br/> The samllest number is " +min+"<br/>"
)


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for(var i = 1; i<=100; i++){
    if(i%5 === 0){
        document.write(i+" ,")
    }
}

























































