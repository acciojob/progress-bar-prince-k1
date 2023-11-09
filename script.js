//your JS code here. If required.
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const dash = document.getElementsByClassName('dash');
const circle = document.getElementsByClassName('circle');

prev.addEventListener('click' ,() => {
    
    for(let i = dash.length-1 ; i >= 0; i--){
        if(dash[i].className.includes('active')){
            dash[i].classList.remove('active');
            break;
        }
    }
    for(let i = circle.length-1 ; i >= 0; i--){
        if(circle[i].className.includes('active')){
            circle[i].classList.remove('active');
            break;
        }
    }
})

next.addEventListener('click' ,() => {
	prev.disabled = false;
    for(let i = 0 ; i <= dash.length-1; i++){
        if(!dash[i].className.includes('active')){
            dash[i].classList.add('active');
            break;
        }
    }
    for(let i = 0 ; i < circle.length; i++){
        if(!circle[i].className.includes('active')){
            circle[i].classList.add('active');
            break;
        }
    }  
})

