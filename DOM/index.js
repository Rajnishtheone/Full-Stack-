function changebackground(colour){
    document.body.style.backgroundColor = colour;
}

const themebtn=document.getElementById('theme_btn');

// const whitebt=document.getElementById('white');

themebtn.addEventListener('click',() =>{
    
    console.log(document.body.style.backgroundColor);

    const currentcolor = document.body.style.backgroundColor;
    if(!currentcolor || currentcolor === 'white'){
        changebackground('black');
        themebtn.innerText = 'Light Mode';
    }
    else{
        changebackground('white');
    }
});


   