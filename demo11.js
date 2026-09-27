var employee ={
    name: "John Doe",
    email: "jhon@gmail.com",
    salary:50000,
    address: {
        city: "New York",
        state: "NY",
        zip: "10001",
        brsnchDetails:{
            branchname: "Downtown Branch",
            branchcode: "DTB001",
        }
    },
    bankdetails:{
        bankname: "Bank of America",
        accountnumber: "123456789",
        ifsc: "BOFAUS3N"
    }
}

console.log(`${employee.name}, ${employee.email}, ${employee.salary}, ${employee.address.city}, ${employee.address.state}, ${employee.address.zip}`);