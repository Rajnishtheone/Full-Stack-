//problem: create an array containing different types of teas
const teas =  ["green tea " , "black tea" , "whiteee tea" , "oolong tea"];
console.log(teas);

// problem : add a new tea to the array
teas.push('herbal tea');
// problem : remove oolong tea from the list

const index = teas.indexOf('oolong tea');

if(index > -1){
    teas.splice(index , 1);
}
console.log(teas);

// problem : filter  the list to only include  with the caffinated prperty

const caffinated = teas.filter((tea)=> tea!=="herbal tea");

console.log(caffinated);

// problem: sort the list of words in alphabetical order

console.log(teas.sort());

// problem: use a loop to create a new array with all tea names in upper case

const uppcase = [];

for(let i =0;i<teas.length;i++){
    uppcase .push(teas[i].toUpperCase());


}
console.log(uppcase);

// problem: Use a loop to find the tea name with the most character 

let longest_tea="";

for(let i=0;i<teas.length;i++){
    if(teas[i].length > longest_tea.length){
        longest_tea=teas[i];
    }
}
console.log(longest_tea);



// problem: use a for loop to reverse the order of teas in the arry

const reversearray =[]

for(let i = teas.length-1;i>=0;i--){
  reversearray.push(teas[i]);
}
console.log(reversearray);




