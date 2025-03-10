const user={
    name:"John",
    age:30,
    pass:"1234",
};

const proxyuser=new Proxy(user,{
    get(target,prop){
        if(prop==="pass"){
            throw new Error("unauthorised access");

        }
        else{
            return target[prop];
        }

    }

});

console.log(proxyuser.name);

// Negative Indexing
// Implement negative indexing for an array using Proxy object in JavaScript. Negative indexing means accessing elements from the end of the array using negative indices. For example, arr[-1] should return the last element of the array, arr[-2] should return the second last element of the array, and so on.




const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function negativeindex(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            const index = Number(prop);
            if (index < 0) {
                return target[target.length + index];    // Convert negative index to positive
              
            }
            return target[index];
        },
        set(target, prop, value) {
            const index = Number(prop);
            if (index < 0) {
                target[target.length + index] = value; // Convert negative index for setting values
            } else {
                target[index] = value;
            }
            return true; // Indicate that the set operation was successful
        }
    });
}

const negativeArr = negativeindex(arr);
console.log(negativeArr[-1]); // Output: 8 (last element of the array)
