let promis = new Promise((resolve, reject) => {
 let result =true;
 if(result){
     var employee = {
         name: "John",
         age: 30,}
         resolve(employee);
 }else{
     reject("Promise rejected");
 }
});

 promis.then((result) => {
    console.log(result);
}, (error) => {
    console.error(error);
});