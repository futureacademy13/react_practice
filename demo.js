const result3 =function (a, b) {


    const sum = a + b;
    return sum;
}

function addTwoNumbers(a, b) {


    const sum = a + b;
    console.log(sum);
}

var result = addTwoNumbers(5, 10);
var result1 = addTwoNumbers('hello', 'world');
// console.log(result);
// console.log(result1);
console.log(result3(5, 10));
console.log(result3('hello', 'world'));

var addthreenumbers = (a,b,c)=> {
   const sum = a + b + c;
   console.log(sum);
}
console.log(addthreenumbers(5, 10, 15));

var message =()=>'Hello World';
console.log(message());