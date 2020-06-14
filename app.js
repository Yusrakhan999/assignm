
// ############Chapter#1 TASK#1#############
// alert("Good Morning...!!!!");

// ############Chapter#1 TASK#2#############
// alert("Error! Please enter a valid pssword");

// ############Chapter#1 TASK#3#############
// alert("Welcome To JS Land..\n Happy Coding...");

// ############Chapter#1 TASK#4#############
/* alert("Welcome To JS Land..");
alert("Happy Coding...");
confirm('Prevent from this dialog box'); */


function heading(chp) {
    document.write("<h2>Chapter "+chp+"</h2>")
    
}
function Qu(q) {
    document.write("<h2>Question "+q+"</h2>")
    
}
function write(param) {
    document.write(param);
}
// heading("9-11");

// chapter 9-11
// Q1
// var user = prompt("Enter your city name"); 
// if(user == "Karachi" || user == "karachi")
// {
//     alert("welcome to the city of lights")
// }

// Q2
// var user = prompt("Enter your gender"); 
// if(user == "male")
// {
//     alert("Good Morning Sir");
// }
// else if(user =="female")
// {
//     alert("Good Morning Ma'am");

// }
// else{alert("this is not a gender");}

// Q3
// var user = prompt("write color of road traffic signal"); 
// if(user == "red")
// {
//     alert("Must Stop");
// }
// else if(user =="yellow")
// {
//     alert("Ready to move");

// }
// else if(user =="green")
// {
//     alert("Move Now");

// }
// else{alert("wrong color");}


// Q4
// var user = prompt("Enter your current fuel in litres eg : 1.5"); 
// if(user < 0.25)
// {
//     alert("Please refill the fuel in your car");
// }
// else if(user >= 0.25)
// {
//     alert("Your fuel in enough");

// }

//Q5:a

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//true

//Q5:b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//condition false

//Q5:c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//condition 2 and 4 is true

//Q5:d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//condition true

//Q5:e
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//condition true

//Q5:f
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    
//condition true

// Q6
// document.write("Q:6<br>");
// document.write("<h4>Marksheet</h4>");
// var obt = prompt("Enter optained marks");
// var totalm = prompt("Enter total marks");

// var per = obt * 100 / totalm;

// document.write("Obt Marks : "+obt+"<br>");
// document.write("Total Marks : "+totalm+"<br>");
// document.write("Percentage : "+per+"%<br>");
// if(per >= 80)
// {
//     document.write("Grade : A+ <br>");
//     document.write("Remarks : Super Excellent<br>");

// }
// else if(per >= 70)
// {
//     document.write("Grade : A<br>");
//     document.write("Remarks : Excellent<br>");
// }
// else if(per >= 60)
// {
//     document.write("Grade : B<br>");
//     document.write("Remarks : Good<br>");

// }
// else if(per >= 50)
// {
//     document.write("Grade : C<br>");
//     document.write("Remarks : Need Improvement<br>");

// }
// else if(per >= 33)
// {
//     document.write("Grade : D<br>");
//     document.write("Remarks : chichi bht buri bat hai<br>");

// }
// else
// {
//     document.write("Grade : F<br>");
//     document.write("Remarks : aww fail hogya<br>");

// }

 

// var user = prompt("Guess the secret number from 1 to 10");
// var snum = 7;
// Qu("7");

// if(user == snum)
// {
//     document.write("Bingo..Correct Answer");
// }
// else if(user == 8  )
// {
//     document.write("Close enough to the correct answer");
// }

// var user = prompt("enter number for division");

// Qu("8");
// if(user % 3 == 0)
// {
//     document.write("<span class='text-success'>Your number is divisible by 3</span>");
// }
// else
// {
//     document.write("<span class='text-danger'>Your number is not divisble by 3</span>");
// }

// var user = prompt("enter number ");

// Qu("9");
// if(user % 2 == 0)
// {
//     document.write("<span class='text-success'>Your number is is even</span>");
// }
// else
// {
//     document.write("<span class='text-danger'>Your number is Odd</span>");
// }

// var user = prompt("Enter Temperature in digits");

// Qu("10");
// if(user > 40)
// {
//     document.write("<span >it is too hot outside</span>");
// }
// else if(user > 30)
// {
//     document.write("<span >The weather today is normal</span>");
// }
// else if(user > 20)
// {
//     document.write("<span >today's weather is cool</span>");
// }
// else if(user > 10)
// {
//     document.write("<span >OMG today's weather is so cool</span>");
// }


// Qu("11");
// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// var operator = prompt("Enter operation eg : +,-,*,/");
// if(operator == "+")
// {
//     var result = parseInt(num1) + parseInt(num2);
//     document.write("Sum of two number is : "+result);
// }
// if(operator == "-")
// {
//     var result = parseInt(num1) - parseInt(num2);
//     document.write("Subtraction of two number is: "+result);
// }
// if(operator == "/")
// {
//     var result = parseInt(num1) / parseInt(num2);
//     document.write("Division of two number is: "+result);
// }
// if(operator == "*")
// {
//     var result = parseInt(num1) * parseInt(num2);
//     document.write("Multiplication of two number is: "+result);
// }
// if(operator == "%")
// {
//     var result = parseInt(num1) % parseInt(num2);
//     document.write("reminder of two number is: "+result);
// }

// heading("12-13");
// Qu("1")
// var user = prompt("Enter lower or upper case word or number")
// if(user.charCodeAt(0)>=65 && user.charCodeAt(0)<=90)
// {
//     document.write("This word is Uppercase");
    
// }
// else if(user.charCodeAt(0)>=97 && user.charCodeAt(0)<=122)
// {
//     document.write("This word is lowercase");
    
// }
// else if(!isNaN(user))
// {
//     document.write("This is number");
    
// }

// Qu("2")
// var num1 = prompt("Enter first Number");
// var num2 = prompt("Enter second Number");
// if(isNaN(num1) ||  isNaN(num2))
// {
//         write("Pls enter only digit");
// }
// else if(num1 > num2)
// {
//         write("First Number is larger");
// }
// else if(num2 > num1)
// {
//         write("Second Number is larger");
// }
// else if(num1 == num2)
// {
//         write("both are equal");
// }

// Qu("3")
// var num1 = prompt("Enter positive or negative or zero Number");
// if(num1 > 0)
// {
//     write("Your Entered the positive number")
// }
// else if(num1 < 0)
// {
//     write("Your Entered the negative number")
// }
// else{write("You Entered the zero")}

// Qu("4")
// var num1 = prompt("Enter only 1 character to check if its vowel");
// var num2 = [num1];

// if(num1=="a" || num1=="A" || num1=="e" ||  num1=="E" || num1=="i" || num1=="I" || num1=="o" || num1=="O" || num1=="u" || num1=="U")
// {
//     write(num1+ " is the vowel");
// }

// else{write("This character is not vowel")}


// Qu("5")
// var pass = "testing123";
// var user = prompt("Enter your password");

// if(user == "")
// {
//         write("plz Enter password");
// }
// else if(user == pass)
// {
//     write("Correct!..The password you entered matches the original password")
// }
// else{write("Incorrect Password")}


// Qu("6")
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// write(greeting)
// }
// else
// {
// greeting = "Good evening";
// write(greeting)
// }

// Qu("7")
// var usertime = prompt("Enter time like this 1200 for 12pm/100 for 1pm","1200") 
// if(usertime >= 100 && usertime < 900)
// {
//     write("i'm sleeping")
// }
// else if(usertime >= 900 && usertime < 1200)
// {
//     write("Good Morning")
// }
// else if(usertime >= 1200 && usertime < 1700 )
// {
//     write("Good afternoon")
// }
// else if(usertime >= 1700 && usertime < 2100 )
// {
//     write("Good evening")
// }
// else if(usertime >= 2100 && usertime <= 2400 )
// {
//     write("Good Night")
// }
// else
// {
//     write("Error")
// }

heading("14-16 Arrays")
// Qu(":1")
// var std_names = [];

// Qu(":2")
// var std_names = {};

// Qu(":3")
// var fruits = ["apple","banana","pear"];

// Qu(":4")
// var number = [1,2,3];

// Qu(":5")
// var bool = [true,false];

// Qu(":6")
// var bool = [true,false];

Qu(":7")
var qualification = ["SSC","HSC","BSCS","BBA","BCOM","MA","MBA","MS","M.Phil","PhD"];
for(var i=0;i<qualification.length;i++)
{
    write(i+": "+qualification[i]+"<br>");
}