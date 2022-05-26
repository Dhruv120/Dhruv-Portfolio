/*Typing animation*/

var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "C++ Programmer",
    "Web Developer",
    "Youtuber",
    "Video Editor"
  ],
  typeSpeed: 150,
  Backspeed: 85,
  loop: true,
});

/* ================ Aside ==========*/

const nav = document.querySelector(".nav"), //
  navList = nav.querySelectorAll("li"), //
  totalNavList = navList.length, //
  allSection = document.querySelectorAll(".section"), //
  totalSection = allSection.length; // 

for ( let i = 0; i < totalNavList;i++ )  // 
{
  const a = navList[i].querySelector("a"); //
  a.addEventListener("click", function () //
  {
    removebacksection();

    for ( let j = 0; j < totalNavList; j++ )  // 
      {
      if (navList[j].querySelector("a").classList.contains("active"))
       {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active"); //
    }
    this.classList.add("active"); //
    showSection(this); //

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removebacksection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function showSection(element)  // done
{
  for (let i = 0; i < totalSection; i++) 
  {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}


function updateNav(element)
    {
        for(let i=0 ; i<totalNavList ;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1] )
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }


    document.querySelector(".hire-me").addEventListener("click",function ()
    {
        const sectioninde = this.getAttribute("date-section-index");
        showSection(this);
        updateNav(this);
    })





const navTogglerbtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerbtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});



function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerbtn.classList.toggle("open");

  for (let i = 0; i < totalSection; i++)
   {
    allSection[i].classList.toggle("open");
  }
}
