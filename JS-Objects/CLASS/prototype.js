const obj ={
    fname: "rajnish",
    lname:"kumar",
    getFullName: function(){
        if(this.lname !== undefined){
            return this.fname + " " + this.lname;
        }
        return this.fname;
    },
};

const obj2 ={
    fname:"Dhrub kumar",
    lname: "kumar",

};
obj2.__proto__=obj;



console.log(obj.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString); // Dhrub kumar 