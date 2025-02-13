const arr = [1, 2, 3, 4, 5, 6];

// Custom forEach implementation
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFunction) {
        console.log("chai aur code");
        for (let i = 0; i < this.length; i++) {
            userFunction(this[i], i);
        }
    };
}

// Custom map implementation
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFunction) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            const value = userFunction(this[i], i);
            result.push(value);
        }
        return result;
    };
}
// Custom filter implementation

if (!Array.prototype.myFilter) {

}

// Using native forEach
arr.forEach((value, index) => {
    console.log(`value at index ${index} is ${value}`);
});

// Using custom myForEach
arr.myForEach((value, index) => {
    console.log(`Using custom: value at index ${index} is ${value}`);
});

// Using native map
const n = arr.map((e) => e * 2);

// Using custom myMap
const n2 = arr.myMap((e) => e * 3);

console.log(n);  // [2, 4, 6, 8, 10, 12]
console.log(n2); // [3, 6, 9, 12, 15, 18]

// using native filter
const n3 = arr.filter((e) => e % 2 === 0);
console.log(n3); // [2, 4, 6]

