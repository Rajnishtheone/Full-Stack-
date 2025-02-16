class person {
    constructor(fname , lname){
        this.fname=fname;
        this.lname=lname;


  
    }

    getfullname(){
        return this.fname + " " + this.lname;
    }
}
const p1 = new person("rajnish kumar");
const p2 = new person ("Dhrub kumar");


console.log(p1.getfullname())
console.log(p2.getfullname())