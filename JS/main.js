const tamales = document.querySelectorAll('.container p');

function ciruelas(){
    let X = Math.floor(Math.random()* (256 - 0) + 0);
    let Y =Math.floor(Math.random()* (256 - 0) + 0);
    let Z = Math.floor(Math.random()* (256 - 0) + 0);
    return  `rgb(${X}, ${Y}, ${Z})`;
}

for(let i =0; i < tamales.length; i++ ){
    tamales[i].style.color = ciruelas();
}   



