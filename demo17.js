const nos = [1, 2, 3, 4, 5];
const result = nos.map((num) => {
    return num * 2;
});

console.log(nos); // Output: [2, 4, 6, 8, 10]
console.log(result); // Output: [2, 4, 6, 8, 10]
result.forEach((num) => {
    console.log(num);
});

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
const upperCaseCities = cities.map((city) => {
    return city.toUpperCase();
});

console.log(upperCaseCities); // Output: ["NEW YORK", "LOS ANGELES", "CHICAGO", "HOUSTON", "PHOENIX"]

var students = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 20,
        grade: "A",
        class: "10th"
    },{
        firstName: "Jane",
        lastName: "Smith",
        age: 22,
        grade: "B",
        class: "11th"
    },
    {
        firstName: "Bob",
        lastName: "Johnson",
        age: 21,
        grade: "C",
        class: "10th"
    }
]

var studentdetails = students.map((student) => {
    return {
        studentName: `${student.firstName} -${student.lastName}`,
        studentAge: student.age,
        studentClass: `${student.class}- ${student.grade}`
    };
});

console.log(studentdetails);


var data =[10,20,30,40,50,60,70,80,90,100];
var sum =0;
data.forEach((num) => {
    sum = sum+num;
});


const product = [{
    label: "Product 1",
    price: 10,
    quantity: 2
},{
    label: "Product 2",
    price: 20,
    quantity: 3
},{
    label: "Product 3",
    price: 30,
    quantity: 1
}];

var resultdata  = product.reduce((sum,xyz) => {
    return sum + (xyz.price * xyz.quantity);
},0);
console.log(resultdata); // Output: 110 