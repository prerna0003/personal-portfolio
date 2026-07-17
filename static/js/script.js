console.log("script loaded");
const roles = [
    "Python Developer",
    "AI Engineer",
    "Data Analyst",
    "Data Scientist"
];

let role = 0;
let letter = 0;
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById("typing");
    if (!element) return;

    const text = roles[role];

    if (!isDeleting) {
        element.textContent = text.substring(0, letter);
        letter++;

        if (letter > text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        element.textContent = text.substring(0, letter);
        letter--;

        if (letter < 0) {
            isDeleting = false;
            role = (role + 1) % roles.length;
            letter = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const update = () =>{

                const increment = Math.ceil(target/80);

                count += increment;

                if(count < target){

                    counter.innerText = count;

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter=>observer.observe(counter));

const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll",()=>{

        topBtn.style.display =
            window.scrollY > 300 ? "block" : "none";

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-link");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});
// window.addEventListener("load",()=>{

//     const loader=document.getElementById("loader");

//     loader.style.opacity="0";

//     setTimeout(()=>{

//         loader.style.display="none";

//     },500);

// });

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if(loader){
        loader.style.display = "none";
    }
});