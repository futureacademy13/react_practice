class Parent{
    constructor(name){
        this.name = name;
    }
}

class Child extends Parent{
    constructor(name,age){
        super(name);
        this.age = age;
    }

    getDetails(){
        console.log(this.name + ", " + this.age);
    }
}