
window.addEventListener("load", function() {
    document.querySelector(".preloader").classList.add("opacity0");
    setTimeout(function() {
        document.querySelector(".preloader").style.display="none";
    },1000)
})

// Dark Mode
const bodySkin = document.querySelectorAll(".body-skin"),
      totalBodySkin = bodySkin.length;

for(let i=0; i < totalBodySkin; i++){
    bodySkin[i].addEventListener("change",function() {
        if(this.value === "dark"){
            document.body.className="dark";
        }
        else {
            document.body.className="";
        }
    })
}

document.querySelector(".toggle-style-switcher").addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
    
})



// Links

const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
    
for(let i=0; i < totalNavList; i++) {
    let a = navList[i].querySelector('a');
    a.addEventListener("click", function() {


        removeBackSectionClass();

        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector('a').classList.contains("active")){
                // add back-section
                addBackSectionClass(j);
            }
            navList[j].querySelector('a').classList.remove('active')
        }

        this.classList.add('active');
        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSectionClass() {
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("back-section")
    }
}

function addBackSectionClass(num){
    allSection[num].classList.add("back-section")
}

function showSection(element){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active")
    }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#"+target).classList.add("active")
}


function updateNav(element) {
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute("href").split("#")[1]
        if(target === navList[i].querySelector('a').getAttribute("href").split("#")[1]){
            navList[i].querySelector('a').classList.add("active")
        }
    }
    
}


document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
  
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionIndex);

})

const navToggleBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

      navToggleBtn.addEventListener("click", asideSectionTogglerBtn)
        

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.toggle("open")
    }
}



