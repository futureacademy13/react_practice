const employee ={
    name: "John Doe",
    age: 30,
    gender: "Male",
    getDetails: (a,b)=>{
        console.log(employee.name + ", " + employee.age + ", " + employee.gender+(a+b));
    }
}

employee.getDetails(10,20);