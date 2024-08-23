let guestEl = document.getElementById("guest")
let homeEl = document.getElementById("home")


 let count= 0
  
function one(){
   
    count+= 1;
    console.log("button clicked");
    homeEl.textContent= count;
    
}

function two(){
    count+= 2;
    console.log("button clicked");
    homeEl.textContent=count;
}
function three(){
    count+=3;
    console.log("button clicked");
    homeEl.textContent= count;
    
}
function four(){
    count+=1;
    console.log("button clicked");
    guestEl.textContent= count;
}
function five(){
    count+=2;
    console.log("button clicked");
    guestEl.textContent= count;
    
}
function six(){
    count+=3;
    console.log("button clicked");
    guestEl.textContent=count;
}