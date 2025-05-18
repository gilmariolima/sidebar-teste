const btnMenu = document.getElementById("btn-menu")
const sidebar = document.getElementById("sidebar")
const span = document.querySelectorAll("span")
const button = document.querySelectorAll("button")
const principal = document.getElementById("principal")
const btAtivo = document.querySelectorAll(".btn-ativo")

const items = document.querySelectorAll(".items")

btnMenu.addEventListener("click", function(){
    if(sidebar.classList.contains("ativa")){
        sidebar.classList.remove("ativa")
        sidebar.classList.add("desativa")

        principal.style.marginLeft = "80px"
        span.forEach(item=>{item.style.display = "none"})
        button.forEach(item=>{item.style.justifyContent = "center"})
        
    }else if(sidebar.classList.contains("desativa")){
        sidebar.classList.remove("desativa")
        sidebar.classList.add("ativa")

        principal.style.marginLeft = "250px"
        button.forEach(item => item.style.justifyContent = "flex-start");
        setTimeout(function(){ span.forEach(item => item.style.display = "flex");}, 400);
    }
})

items.forEach(i=>i.addEventListener("click", function(event){
    items.forEach(i => i.classList.remove('btn-ativo'));
    items.forEach(i => i.classList.add('btn-desativo'));
    i.classList.remove('btn-desativo')
    i.classList.add('btn-ativo')
}))
