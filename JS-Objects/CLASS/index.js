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


console.log(obj.getFullName());
console.log(obj2.getFullName());