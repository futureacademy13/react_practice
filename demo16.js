const nos =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nos.filter((num)=>{
    return num >4;
});
//console.log(result);
for(var x of result) {
    console.log(x);
} // Output: 5, 6, 7, 8, 9, 10

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix","Los Angeles"];
const filteredCities = cities.filter((city) => {
    return city.length > 6;
});
//console.log(filteredCities); // Output: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
const employees = [
    {
        name: "John",
        age: 30,
        department: "IT",
        gender: "Male",
        salary: 50000

    },
    {
        name: "Jane",
        age: 25,
        department: "HR",
        gender: "Female",
        salary: 60000
    },
    {
        name: "Bob",
        age: 35,
        department: "Finance",
        gender: "Male",
        salary: 70000
    },{
        name: "Alice",
        age: 28,
        department: "IT",
        gender: "Female",
        salary: 55000
    },
    {
        name: "Mike",
        age: 32,
        department: "HR",
        gender: "Male",
        salary: 65000
    }
]

employees.push({
    name: "Sara",
    age: 29,
    department: "Finance",
    gender: "Female",
    salary: 72000
});

var empresult = employees.filter((employee) => {
    return employee.gender === "Female";
});

console.log(empresult); // Output: Array of female

var city = cities.find((city) => {
    return city === "Los Angeles";
});

console.log(city); // Output: "Los Angeles"