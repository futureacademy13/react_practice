// var getproducts = fetch("https://dummyjson.com/products");
// getproducts.then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data);}).catch((error) => {
//     console.error(error);
// });

async function getproducts() {
    try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getproducts().then((data) => {
    console.log("Data fetched successfully");
});