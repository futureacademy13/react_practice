let cities= ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
console.log(cities[0]); // Output: New York
let cities1 =["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
cities1.push("Philadelphia");
console.log(cities[0]); // Output: New York
console.log(cities1);

cities1.forEach((city,index) => {
    console.log(`${index}: ${city}`);
});
cities.forEach((city)=>{
    console.log(city);
});
for (let i=0; i<cities.length; i++){

    console.log(`${i}: ${cities[i]}`);
}