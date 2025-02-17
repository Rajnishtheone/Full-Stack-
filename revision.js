Function.prototype.describe = function() {
    console.log("function name: " + this.name);
  };


function masalachai(){

}
function gingerchai(){

}
  
  function greet(name) {
    return "hello" + name;
  }
  greet.describe();
  
//function decleration
function add(a,b){
    return a+b;

}
// function expression
const sub=function(a,b){
    return a-b;
}

//arrow function
const mul=(a,b)=>{
    return a*b;
}


// behaviour of javascript


// function decleration

function applyoperation(a,b,operation){
    return operation(a,b);
}

const result = applyoperation(5,3,(x,y )=> x+y);
console.log(result);


function createcounter(){
    let count =0;
    return function(){
        count ++;
        return count;
    }
}





function onef(){
    let myname="rajnish";
}

consloe.log(myname); //error






(function(){
    console.log("hello");
})()
()()

