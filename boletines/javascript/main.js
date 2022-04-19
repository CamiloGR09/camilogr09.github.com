//DOM
//querySelector devuelde 1 solo elemento asi existan mas
//querySelectorAll recorre rodo el arbol buscando el elementoy los muestra todos

/*
let links = document.querySelectorAll("a");

links.forEach(function(links){
    console.log(links);
});
*/

/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this)
    })
})
*/

let links = document.querySelectorAll(".close");

links.forEach(function(link) {
    link.addEventListener("click",function(ev){
        ev.preventDefault();

        let content = document.querySelector(".content");
        content.classList.remove("animate__backInDown");
        content.classList.remove("animate__animated");

        content.classList.add("animate__backOutUp");
        content.classList.add("animate__animated");
       
        setTimeout(function(){
            location.href = "../index.html" 
        }
        ,600)

        return false;
    })   
});