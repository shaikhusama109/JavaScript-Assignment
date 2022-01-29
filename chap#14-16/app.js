
var literalArray = [];

var objectArray = [];
var stringArray = ["karachi", "lahore", "islamabad"];

var numberArray = [1,2,3,4,5];

var booleanArray = [true,false];

var mixedArray = ["a",123,"true","karachi"];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var educationArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
    document.write("<h1>Qualification</h1>")

for (var i = 0; i < educationArray.length ; i++){
    document.write(i+1+")"+educationArray[i]+ "<br/>")
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students 


var studentName = ["Micheal","John", "Tony"]
var score = [320,230,480];
var percentage = [];
for(var i = 0; i <=2; i++){
    percentage[i] =  score[i] / 500 * 100

}

for (var a = 0; a<=2; a++){
document.write("score of "+  studentName[a]+" is " +score[a]+"Precentage "+percentage[a]+"% <br/>")
}


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.



var colour = ["black" , "white" , "red" , "green"]
document.write (colour);

var beginning = prompt("what colour you wanna add to the begining of array")
colour.unshift(beginning);
document.write(colour);

var end = prompt("what colour you wanna add to the end of array")
colour.push(end);
document.write(colour);

var beginning1 = prompt("Write a colour you want to add at the start of array ")
colour.unshift(beginning1);
var beginning2 = prompt("Write a  another colour you want to add at the start of array ")
colour.unshift(beginning2);
document.write(colour);
 
 colour.shift();
document.write(colour);

colour.pop();
document.write(colour);

var colourindex1 = +prompt("Enter a Index you want to add colour to:")
var colourName =  prompt("Enter a Name of a colour :")
colour.splice(colourindex1,0, colourName );
document.write(colour);

var dlete =+prompt("At which index do you want to delete color?")
var colorDelete =+prompt(" which color do you want to delete on that index?")
color.splice(dlete, colorDelete);
document.write(color+"<br/>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var studentScore = [320, 230, 480, 120 ]
document.write("Score of students" + " " + studentScore + "</br>");
sortedScore = studentScore.sort();
document.write(" Ordered Score of students" + " " + sortedScore);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array

var city = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
document.write("Cities List :" +" " + city + "</br>" )

document.write (" Selected cities :" +" " + city.slice(2,4)  )

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];

var arr = ["This","is","my","cat"]
document.write("array; <br/>"+arr+"<br/>")
var join = arr.join(" ")
document.write("string: <br/>"+join) 

// 13.  Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.shift()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.shift()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.shift()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.shift()
document.write("out : <br/>"+fourthDevice+"<br/>")

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


var device = ["keyboard",",mouse","printer","monitor"]
document.write("devices : <br/>"+device+"<br/>")
var firstDevice = device.pop()
document.write("out : <br/>"+firstDevice+"<br/>")
var secondDevice = device.pop()
document.write("out : <br/>"+secondDevice+"<br/>")
var thirdDevice = device.pop()
document.write("out : <br/>"+thirdDevice+"<br/>")
var fourthDevice = device.pop()
// document.write("out : <br/>"+fourthDevice+"<br/>")

// 15.
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

var phone = ["apple","samsung","motorla","nokia","sony & haier"]
document.write(
    "<select>"+
    "<option>"+phone[0]+"</option>"+
    "<option>"+phone[1]+"</option>"+
    "<option>"+phone[2]+"</option>"+
    "<option>"+phone[3]+"</option>"+
    "<option>"+phone[4]+"</option>"+
    "</select>"
)
