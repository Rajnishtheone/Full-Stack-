function prepareTEA(type){
    if(type==="masala tea"){
        console.log("preparing masala tea");
    }
    else{
        console.log("preparing regular tea");
    }
}

prepareTEA("masala tea");// preparing masala tea
prepareTEA("regular tea");// preparing regular tea


/*ek online store me agar ek customer ka bill 1000 se jyada hota hai toh usko 10% discount milta hai.
agar bill 1000 ya 1000 se kam hota hai toh koi discount nahi milta.*/

function customer_bill(bill){
    if(bill>1000){
        console.log("10% discount");
    }
    else{
        console.log("no discount");
    }
};

customer_bill(1000);// no discount
customer_bill(2000);// 10% discount 



// Reduce 
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// The reduce() method executes the provided function for each value of the array (from left-to-right).

let sales_data=[
    {product:"phone",price:1000},
    {product:"tv",price:2000},
    {product:"laptop",price:3000},
    {product:"watch",price:500},
];

let initialValue=0;

let total_sales=sales_data.reduce((acc,curr)=>{
    return acc+curr.price;
},initialValue);

console.log(total_sales);// 6500


// items less thsn 50 using filter

let inventory=[
    {product:"phone",price:30},
    {product:"tv",price:200},
    {product:"laptop",price:49},
    {product:"watch",price:100},
]

let lowStock=inventory.filter((items)=>items.price<50);
console.log(lowStock);// true

