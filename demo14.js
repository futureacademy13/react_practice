const color =["red","green","blue","yellow","orange","purple","pink","brown","black","white"];
const [first,second,...colors] = color;
console.log(first); // Output: "red"
console.log(second); // Output: "green"
console.log(colors); // Output: ["blue", "yellow", "orange", "purple", "pink", "brown", "black", "whit

function addno()
{
    console.log(arguments)
}
addno(1,2,3,4,5); // Output: [1, 2, 3, 4, 5]
var numbers =(...x)=>{
    console.log(x)
}
numbers(11,121,13,14,15); // Output: [1, 2, 3, 4, 5]

colors.forEach((color,index)=>{
    console.log(`${index}: ${color}`);
});



var employee ={
    name: "John",
    age: 30,
    department: "IT",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    salary: 50000
}

const {name:fullname, age:employeeAge, ...rest} = employee;
console.log(fullname);
console.log(employeeAge);
console.log(rest);
