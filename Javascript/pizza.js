let numberofguest=3;
let pizzaSize;
//small <= 2
//medium <= 4
//large <= 6
if(numberofguest<=2){
    pizzaSize="small";

}
else if(numberofguest<=4){
    pizzaSize="medium";
}
else if(numberofguest<=6){
    pizzaSize="large";
}
else{
    pizzaSize="extra large";
}
console.log(`you need a ${pizzaSize} pizza`);
