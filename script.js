let alltick = document.querySelectorAll("#tick");
let allDelete = document.querySelectorAll("#cross");
var newAdd = document.querySelector(".plus");
let detail = document.getElementById("screenVal");
const lists = document.getElementById("list");


let str= "";

console.log(detail);

newAdd.addEventListener('click',myfunction);

function myfunction()
{

    if(detail.value!="")
    {
        str = detail.value;
        console.log(str);
        addDetails(str);
    }
}

function addDetails(s)
{
    var newTick = document.createElement("img");
    var newDelete = document.createElement("img");

    newTick.src ="tick1.png";
    newDelete.src = "close3.png";

    
    var newItem = document.createElement("div");
    var newDetail = document.createElement("div");

    newItem.appendChild(newDetail);
    newItem.appendChild(newTick);
    newItem.appendChild(newDelete);

    lists.appendChild(newItem);

    newDetail.innerText = s;
    newItem.className = "list-item";
    newDetail.className = "details";

    TickClose(newTick,newDelete,newItem);
}


function TickClose(tick,close,item)
{
    tick.addEventListener('click',(e)=>{
    console.log(item.firstChild);
    item.style.backgroundColor = "#0edf1e";
    })

    console.log(close);
    close.addEventListener('click',(e)=>{
        
        item.remove();
    })
}