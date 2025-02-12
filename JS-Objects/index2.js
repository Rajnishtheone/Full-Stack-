let p1={
    fname:'rajnish',
    lname:'ch',

}
let p2={
// fname:p1.fname,
// lname :p1.lname,
...p1,
}



p1.fname='kuumar'


console.log(p2);


console.log(p1);

const p1kaString =JSON.stringify(p1)
console.log(p1kaString)
let p3 =JSON.parse(p1kaString)
