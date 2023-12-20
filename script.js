var btn = document.querySelector("#add");
var h=document.querySelector("h5");
var bool=true;

btn.addEventListener("click",function(){
    if(bool==true){
        h.innerHTML="friends";
        h.style.color="green";
        console.log("true")
        btn.innerHTML="Remove"
btn.style.backgroundColor = "#dadada";
btn.style.color="#111"
        bool=false
    }
    else{
        h.innerHTML="stranger";
        h.style.color="red"
        console.log("false")
        bool=true
        btn.innerHTML="Add Friend"
        btn.style.backgroundColor = "cadetblue";
        btn.style.color="#fff"
    }
    
})

