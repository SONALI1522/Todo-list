let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let detBtn = document.createElement("button");
    detBtn.innerText = "delete";

    item.appendChild(detBtn);
    ul.appendChild(item);
    inp.value="";
});
 ul.addEventListener("click", function(event){
    if(event.target.nodeName == 'BUTTON'){
     let listItem = event.target.parentElement;
     listItem.remove();
     console.log("deleted");
    }
 });
