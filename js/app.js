let add = document.getElementById("add");
let input = document.getElementById("input");
let newtask = document.getElementById("newtasks");
let notask = document.getElementById("notasks");
let counttask = document.getElementById("counttask")
let count = newtask.childElementCount;
let exp = document.getElementById("exp")
let clearall=document.getElementById("clearall")


let addtask = () => {
    let data = input.value;
    let alldata = data.trim();

    if (alldata == "") {
        alert("please enter a valid Task");
    } else if (alldata.length > 100 || alldata.length <3) {


        alert("plese enter a Valid Task");

    } else {
        newtask.innerHTML += ` <div class="alert alert-primary check">   ${alldata}   <button class="btn btn-danger float-end delete">delete</button>     </div>    `;
        input.value = "";

        notask.classList.add("none");

        clearall.classList.remove("none")
        count = newtask.childElementCount;
        counttask.innerText = count;

    }

}
add.addEventListener("click", addtask)



let clear=()=>{



    if(confirm("do you want to clear all")){

        newtask.innerHTML="";

    }
    count=newtask.childElementCount;
    counttask.innerText=count;
    if(count==0){
        clearall.classList.add("none")

        notask.classList.remove("none")
    }

}








clearall.addEventListener("click",clear)





 document.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete")) {



       if(confirm("Are you sure you want to delete")) { event.target.parentElement.remove();}

       

        count = newtask.childElementCount;
        counttask.innerText = count;


        if (count == 0) {
            notask.classList.remove("none")
            clearall.classList.add("none")
        }



    }



})





