 //Implement function sigma(num) that, given a number, 
 // returns the sum of all positive integers up to the given number 
 //(inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
 function sigma(num) {
     var sigmanum = 0;
     for (var i = 1; i <= num; i++) {
         sigmanum += num;
     }
     return sigmanum;
 }
 // console.log(sigma(3));

 // Factorial - Write a function factorial(num) that, given a number,
 //  returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  
 //  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
 function Factorial(num) {
     var sigmanum = 1;
     for (var i = 1; i <= num; i++) {
         sigmanum *= i;
         console.log(sigmanum);
     }
     return sigmanum;
 }
//  console.log("factorial", Factorial(5));

 // Fibonacci - Create a function to generate Fibonacci numbers.  
//  In this famous mathematical sequence, each number is the sum of the previous two, starting with 
//  values 0 and 1.  Your function should accept one argument, an index into the sequence 
//  (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  
//  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1),
//   fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3),
//    fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  
// Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as 
// we'll be introducing this concept in Part 2 of this assignment.

function Fibonacci(index)
{ 
    if (index <= 1) 
    return index; 
    else
    return Fibonacci(index-1) + Fibonacci(index-2); 
     
//     var last=1, lastbutone=0;
//     // console.log(lastbutone,last);
   
//     for(var i=1;i<index;i++ )
//     {
//         sum=lastbutone+last;
//         lastbutone=last;
//         last=sum;
//         // console.log(last);

//     }
//   return last;
}
//console.log(Fibonacci (7));

// Array: Second-to-Last: Return the second-to-last
//  element of an array. Given [42, true, 4, "Liam", 7], 
//  return "Liam".  If array is too short, return null.
function secondlastval(arr)
{
    if(arr.length<2) 
    return null;
    return arr[arr.length-2];

}
 var arr= [1,2,3,4,"reena",6];
//var arr= [6];
//console.log(secondlastval(arr));

// Array: Nth-to-Last: Return the element that is N-from-array's-end. 
//  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function NthtoLast(arr,n)
{
    if(arr.length<n) 
    return null;
    return arr[arr.length-n];

}
 var arr= [1,2,3,4,"reena",6];
//var arr= [6];
// console.log(NthtoLast(arr,11));
// console.log(NthtoLast(arr,3));

//Second-Largest
//Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function SecondLargest(arr)
{
var largest=arr[0];
var seclargest=arr[0];
for(var i=0;i<arr.length;i++)
{
    
    if(arr[i]>largest){
    seclargest=largest;
    largest=arr[i];
    }
    else if(arr[i]>seclargest)
    {
        seclargest=arr[i];
    }
}
return seclargest;
}
var arr=[3,20,6,21,8,19,22];
// console.log(SecondLargest(arr));

// Double Trouble
// Create a function that changes a given array to list each existing element twice, retaining original order. 
//  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].





function Fib(index)
{ 
    var arr=[];
    arr[0]=0;
    arr[1]=1;
    for(var i=2;i<=index;i++)
    {
        arr[i]=arr[i-1]+arr[i-2];
        // console.log(arr[i]);
    }
    return arr;
}
// console.log(Fib(9));

function FibR(n)
{ 
    if(n<2)
    {return n;}

    return FibR(n-1)+FibR(n-2);

}
// console.log(FibR(6));

function DoubleTrouble(arr)
{
    for(var i=0; i<arr.length;i=i+2)
    {
        console.log("val of i", i );
        insertAt(arr,i+1,arr[i]);
        
    }
   
  
}

function insertAt(my_array,Index_position,newValue){
  console.log("Original Array : ",  my_array);     
  
  for(var i=my_array.length; i > Index_position; i--){
   
    my_array[i] = my_array[i-1];
     }
   my_array[Index_position] = newValue;
   console.log("New Array : ",  my_array);  
}

var arr=[1,2,3,4,5,6];
// insertAt(arr,2,"Reena");
DoubleTrouble(arr);
