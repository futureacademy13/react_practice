function Person(name, age, gender) {

    this.Fname = name;
    this.Fage = age;
    this.Fgender = gender;
}

Person.prototype.getDetails = function(a,b) {
    console.log(this.Fname + ", " + this.Fage + ", " + this.Fgender);
}
var data = new Person("John Doe", 30, "Male");
data.getDetails(10,20);
var data1 = new Person("Jane Smith", 25, "Female");
var data2 = new Person("Mike Johnson", 35, "Male");
var result  =[data, data1, data2];
//console.log(data.Fname + ", " + data.Fage + ", " + data.Fgender);

const Employee = (name,email,gender)=>{

    this.Fname = name;
    this.Femail = email;
    this.Fgender = gender;
}

var emp1 = new Employee("John Doe", "john.doe@example.com", "Male");
console.log(emp1.Fname + ", " + emp1.Femail + ", " + emp1.Fgender);