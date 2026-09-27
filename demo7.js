class Employee{

    constructor(name,email,gender){
        this.fName = name;
        this.fEmail = email;
        this.fGender = gender;
    }

    getDetails(){
        console.log(this.fname + ", " + this.femail + ", " + this.fgender);
    }
}

var emp1 = new Employee("John Doe","john.doe@example.com","Male");
emp1.getDetails();