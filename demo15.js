const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
const arr3 =[...arr1,20,30,...arr2];

var oldemployee ={
    name: "John",
    age: 30,
    department: "IT"
}

var newemployee ={
    ...oldemployee,
    salary: 50000
}

console.log(newemployee); // Output: [1, 2, 3, 4, 5, 6]