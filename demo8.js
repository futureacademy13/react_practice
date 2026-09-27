
// var emp = new Employee("John Doe", "john.doe@gmail.com", "Male");
// emp.getDetails();

class Employee{

    constructor(name,email,gender){
        this.fName = name;
        this.fEmail = email;
        this.fGender = gender;
    }

    getDetails(){
        console.log(this.fName + ", " + this.fEmail + ", " + this.fGender);
    }
    
}

const s = new Student("Rahul");
console.log(s.name);
function Student(name) {
this.name = name;
}
