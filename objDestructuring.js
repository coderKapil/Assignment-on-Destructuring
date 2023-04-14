// let user = {name: "Yahoo Baba",age: 25, city: "Delhi"}

// let {name,age,city} = user
// console.log(name);
// console.log(age);
// console.log(city);

//Problem
function extractnameandStreet({name,address:{street}}){
    return {name,street}
}

const person = {name:"Mithun",age:21,
               address:{street:"B8,Block B,Industrial Area.",
                        city:"Sector 62, Noida",
                        state:"Uttar Pradesh"}}


   const { name ,street} = extractnameandStreet(person)
   console.log(name);
   console.log(street);                     