let bulb = document.querySelector("#bulb");
let button = document.querySelector('button');
let flag = true;
button.addEventListener("click", function(){
    if(flag == true){
        bulb.style.backgroundColor = "transparent";
        button.innerHTML = "On";
        flag = !flag;
    }
    else{

        bulb.style.backgroundColor = "yellow";
        button.innerHTML = "Off";
        flag = !flag;
        
    }
})