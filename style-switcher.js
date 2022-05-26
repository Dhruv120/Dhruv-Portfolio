/*Toggle style switcher*/

const styleswitchertoggler = document.querySelector(".style-switcher-toggler");
styleswitchertoggler.addEventListener("click" , ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
}) 

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
    document.querySelector(".style-switcher").classList.remove("open");

    }
    
    
})


/*Theme colors*/

const alternatstyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color)
{
    alternatstyles.forEach((style) =>{
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    } 
    )


}


/*Light and Darks theme*/

const daynight = document.querySelector(".day-night");
daynight.addEventListener("click" , () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load" , ()=>{
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        daynight.querySelector("i").classList.add("fa-moon");

    }
})