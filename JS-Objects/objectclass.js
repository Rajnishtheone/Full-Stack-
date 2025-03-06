const chai =["green Tea" , "black tea","ice tea ", "hot tea ", "lemon tea"];

console.log(chai.length);

console.log(chai[3]);

chai.splice(1,2);//use to remove the element from the array  and return the removed element 
 
console.log(chai);

chai.push("jaljera tea"); // add the element at the end of the array

console.log(chai);

chai.pop();// remove the last element from the array

console.log(chai);

chai.unshift("milk tea");// add the element at the start of the array

console.log(chai);

chai.shift();// remove the first element from the array

console.log(chai);


// loop through the array and print each element

chai.forEach((chai,index) =>{
    console.log(`${index+1} : ${chai}`);

});

// concat two array 

const new_chai=["ollong tea", "white tea"];

const allchai=chai.concat(new_chai);

console.log(allchai);


// spread operator  to create a copy of the array

let chai3=[...chai, "demo tea"];

console.log(chai3);


// object literals

const tea ={
    name: "milk tea",
    ingredients:{
        teaLeaves:"assam",
        milk:"full cream",
        sugar:["brown","white"],
    },
    cupsize:["small","medium","large"],
     instructions :"boil the milk and add tea leaves and sugar",
    
};

console.log(tea.ingredients.sugar[1]);
console.log(tea.cupsize[2],+" " + tea.instructions);

let updated_tea ={
    ...tea,
    cupsize:["extra large",...tea.cupsize]

};

console.log(updated_tea);




console.log("................................");






// destructuring the object  to get the value of the object 






let {name,ingredients}=tea;
let {milk,cupsize}=tea;

console.log(milk);

console.log(cupsize);

console.log(name);

console.log(ingredients);

// destructuring the object

let {sugar}=ingredients;

console.log(sugar);

