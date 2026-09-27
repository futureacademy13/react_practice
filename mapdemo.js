const data =[2,3,4,5,6,7,8,9,10];

const doubledData = data.map(x => x * 2);

doubledData.forEach(x => console.log(x));

var employees = [{
    firstName: "John",
    lastName: "Doe",
    age: 30,
    salary: 50000
},
{
    firstName: "Jane",
    lastName: "Smith",
    age: 35,
    salary: 60000
},
{
    firstName: "Bob",
    lastName: "Johnson",
    age: 35,
    salary: 70000
}]

var newEmployees = employees.map(employee => {
    return {
        fullName: employee.firstName + " " + employee.lastName,
        age: employee.age,
        Annualsalary: employee.salary*12
    };
});

for(const employee of newEmployees){
    console.log(`Full Name: ${employee.fullName}, Age: ${employee.age}, Annual Salary: ${employee.Annualsalary}`);
}

var employees1 = newEmployees.filter(employee => employee.age > 30);
console.log(employees1);

var result = employees.find(employee => employee.age === 35);
console.log(result);