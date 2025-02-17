function changeBackground(color){
    document.body.style.backgroundColor = color;

}
function changeColor(color){
    document.body.style.color = color;
}
const darkMode = document.getElementById('dark');
darkMode.addEventListener('click', function(){
   console.log('clicked');
})