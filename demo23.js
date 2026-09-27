let pomisedata = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully");
    }, 2000);
});

console.log(pomisedata);

pomisedata.then((result) => {
    console.log(result);
});