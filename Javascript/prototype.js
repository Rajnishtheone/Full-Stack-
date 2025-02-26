// Playlist constructor function
function Playlist() {
    // Initialize songs property as an empty array
    this.songs = [];
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function(song) {
    this.songs.push(song); // Add the song to the songs array
    return this.songs; // Return the updated songs array
}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { song } = JSON.parse(input); // Extract the song name from the input
  const playlist = new Playlist(); // Create a new Playlist instance
  playlist.addSong(song); // Add the song to the playlist
  process.stdout.write(JSON.stringify(playlist.songs) + '\n'); // Output the updated songs array
});



//////

// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
    // Initialize items property
    this.items=[]
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem=function(items){
  this.items.push(items);

  
}

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice=function(){
   return this.items.reduce((total, item) => total + item, 0);
//    let total=0;
//    for(let i=0;i<=this.items.length;i++){
//     total=total+this.items[i];
//    }
   
// return total;
   

}

// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { prices } = JSON.parse(input);
  const cart = new ShoppingCart();

  for (let price of prices) {
    cart.addItem(price);
  }

  process.stdout.write(JSON.stringify(cart.getTotalPrice()));
});
