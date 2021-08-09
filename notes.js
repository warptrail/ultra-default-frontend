// Code snippet example
// How to take the last item of an array and move it to the first item
var a = [4, 3, 2, 5];
console.log(a[a.length - 1]);
var popped = a.pop();
console.log(a[a.length - 1]);
a.unshift(popped);
console.log(a);
