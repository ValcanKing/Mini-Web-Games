var butt=document.querySelectorAll(".drum");

for(var i=0;i<butt.length;i++){
    butt[i].addEventListener("click",function() 
    {
        var buttoninner= this.innerHTML;
        makeSound(buttoninner);
        addAnimation(buttoninner);
        
    })
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);
})

function makeSound(key){
    switch (key)
        {
            case 'w':
                var tom1 = new Audio("sounds/1.mp3");
                tom1.play();
            break;
            case 'a':
                var tom2 = new Audio("sounds/2.mp3");
                tom2.play();
            break;
            case 's':
                var tom3 = new Audio("sounds/3.mp3");
                tom3.play();
            break;
            case 'd':
                var tom4 = new Audio("sounds/4.mp3");
                tom4.play();
                break;
            case 'j':
                var tom5 = new Audio("sounds/5.mp3");
                tom5.play();
                break;
            case 'k':
                var tom6 = new Audio("sounds/6.mp3");
                tom6.play();
                break;                    
            case 'l':
                var tom7 = new Audio("sounds/7.mp3");
                tom7.play();
                break;      
            default:
                console.log(key);                      
        }
}

function addAnimation(currkey){
    var addani=document.querySelector("."+currkey);
    addani.classList.add("pressed");
    setTimeout(function(){
        addani.classList.remove("pressed");
    },150);
}