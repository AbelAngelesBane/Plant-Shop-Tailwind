//====================================TOGGLE BUTTON===============================//
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hambuger = document.getElementById("hamburger");
const containerBtn = document.querySelectorAll(".btn");
const emailField = document.getElementById("newsletter__email-field");
const  emailErrorBox = document.getElementById("newsletter__email-error");
const errClasslist = ["border-2", "border-red-600","placeholder-style"];



AOS.init();

hambuger.addEventListener("click",()=>{
    navMenu.classList.toggle("left-[0]")
    hambuger.classList.toggle("ri-close-large-fill")

    //SO WE LEARNED THAT USING CLASSNAME WILL WIPEOUT OTHER CLASSES, SO BETTER JUST STICK WITH THE TOGGLE//
    // hambuger.click(navMenu.className("left-[0]"))
});

// Note to self: n JavaScript, the first parameter of window.addEventListener specifies the event type you want to listen for. 
// The word "scroll" is a predefined event name in the DOM, meaning it triggers when the user scrolls the page.

navLink.forEach(link => {
    link.addEventListener("click", ()=>{
        navMenu.classList.toggle("left-[0]");
        hambuger.classList.toggle("ri-close-large-fill");
    })
});


function selectedButton(event){
    window.alert(event.target.innerText);
}

// ================== INIT SWIPER ======================= //

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false
    },
    grabCursor: true,
        // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
        },
    breakpoints:{
        640:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    },
  
  });

//   =============== SHOW SCROLL UP =================== //
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >=50){
        navbar.classList.add("border-yellow-200", "border-b-2");
    }
    else if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-2");
    }else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-2");
        navbar.classList.remove("border-yellow-200", "border-b-2");

    }
}
window.addEventListener("scroll",scrollUp);

//   =============== SCROLL SECTIONS ACTIVE LINK =================== //
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";

    //=== GET THE CURRENT SECTION ===//
    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link =>{
        link.classList.remove("active");

        if(link.href.includes(current)){
            link.classList.add("active");
        }
    });
};
window.addEventListener("scroll",activeLink);

// =============== SHOW EMAIL FIELD ERROR ================ //

  function subscribe(){
    if(emailField.value == ""){
        if ( emailErrorBox.classList.contains("hidden")) {
            emailErrorBox.classList.toggle("hidden");
            errClasslist.forEach(cl =>{
                emailField.classList.toggle(cl);
             })        
        };      
    }
    else {
        if( !emailErrorBox.classList.contains("hidden")){
            emailErrorBox.classList.toggle("hidden");
            errClasslist.forEach(cl =>{
                emailField.classList.toggle(cl);
             }) 
        }
        else (window.alert(emailField))
    }
  }





