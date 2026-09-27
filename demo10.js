var employee ={
    name: "John Doe",
    age: 30,
    department: "IT",
    getDetails: ()=> {
        return `Name: ${employee.name}, Age: ${employee.age}, Department: ${employee.department}`;
    },
    getDetails1() {
        return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
    }
}

// Console.log(employee["department"]);
// Console.log(employee.getDetails1());


employee.salary = 50000;
employee.department = "HR";
delete employee.age;

console.log(employee);
var customer ={};
customer.name = "Jane Smith";
customer.age = 28;
customer.getDetails = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
}