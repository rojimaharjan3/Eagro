/*var greet = require('./greet');
greet.english();
greet.spanish();

 var greet3 =  require('./greet3');
 greet3.greet();
 greet3.greeting = 'changed!';
  
 var greet3b = require('./greet3');
 greet3b.greet();*/

 //object properties and methods
 var obj = {
     greet: 'hello'
 }

 console.log(obj.greet);
 console.log(obj['greet']);
 var prop = 'greet';
 console.log(obj[prop]);


 //function and arrays
var nums = [ 1, 1, 2, 3, 5, 8 ];
nums.push(13);
console.log(nums);
 var arr = [];
 //push le array maa fucntion pusg garne garxa
 arr.push(function() { 
     console.log('hello world!');
 });
 arr.push(function() {
    console.log('hello world 11!');
});
arr.push(function() {
    console.log('hello world 111');
});
arr.forEach(function(item) {
    item();
}); 