const teas ={
    name: "lemon tea",
    type : "green",
    caffine: "low",

}
// problem: Access and print the name and type of the tea object 

console.log(teas.name);
console.log(teas["type"]);
//add a new property origin to the tea object

teas.origin="China"
//change the caffine level to medium

teas.caffine="medium"
// remove the type property from tea object

delete teas.type

// check if tea object has prperty origin
console.log("origin" in teas);
// use for...in loop to print all properties in teas object

for(let key in teas){
    console.log(key+" :" + teas[key]);


}
// create a nested object representation of diffferent types of teas and their properties 
const myTeas={
    greentea:{
        name: "green tea",
        cups:{
            one:"1",
            two:"2",
        },
    },
    blackTeas:{
        name:"black tea",

    },

}

// create a copy of the tea object 

const teacopy={
    ...myTeas,
    //shallow copy
}
teacopy.greentea.cups.one="4";
console.log("this is");
console.log(teacopy);
const anothercopy =teas;//refrence 



// add a custom method describe to the object that returns a description string


