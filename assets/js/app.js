/*=====================================================
    Intelligent Technology Company
    Main JavaScript
    Version 1.0
=====================================================*/

"use strict";

/*=====================================================
    DOM READY
=====================================================*/

document.addEventListener("DOMContentLoaded", function () {

    initializeWebsite();

});

/*=====================================================
    INITIALIZE WEBSITE
=====================================================*/

/*function initializeWebsite() {

    loader();

    stickyHeader();

    mobileMenu();

    darkMode();

    scrollTopButton();

    smoothScrolling();

}*

function initializeWebsite() {

    // Core Features
    loader();
    stickyHeader();
    mobileMenu();
    darkMode();
    scrollTopButton();
    smoothScrolling();

    // Interactive Features
    animatedCounters();
    scrollReveal();
    activeNavigation();
    searchOverlay();
    faqAccordion();

}

/*=====================================================
    LOADER
=====================================================*/

function loader() {

    const loader = document.getElementById("loader");

    if (!loader) return;

    window.addEventListener("load", function () {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.5s";

        setTimeout(() => {

            loader.remove();

        }, 600);

    });

}

/*=====================================================
    STICKY HEADER
=====================================================*/

function stickyHeader() {

    const header = document.getElementById("header");

    if (!header) return;

    window.addEventListener("scroll", function () {

        if (window.scrollY > 60) {

            header.classList.add("sticky");

        }

        else {

            header.classList.remove("sticky");

        }

    });

}

/*=====================================================
    MOBILE MENU
=====================================================*/

function mobileMenu() {

    const menuBtn = document.getElementById("menuBtn");

    const navbar = document.getElementById("navbar");

    if (!menuBtn || !navbar) return;

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        }

        else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

    document.querySelectorAll("#navbar a").forEach(link => {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}

/*=====================================================
    DARK MODE
=====================================================*/

function darkMode() {

    const themeBtn = document.getElementById("themeBtn");

    if (!themeBtn) return;

    const icon = themeBtn.querySelector("i");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        if (icon) {

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

        }

    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const darkEnabled = document.body.classList.contains("dark");

        localStorage.setItem("theme", darkEnabled ? "dark" : "light");

        if (icon) {

            if (darkEnabled) {

                icon.classList.remove("fa-moon");

                icon.classList.add("fa-sun");

            }

            else {

                icon.classList.remove("fa-sun");

                icon.classList.add("fa-moon");

            }

        }

    });

}

/*=====================================================
    SCROLL TO TOP
=====================================================*/

function scrollTopButton() {

    const topBtn = document.getElementById("topBtn");

    if (!topBtn) return;

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        }

        else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=====================================================
    SMOOTH SCROLLING
=====================================================*/

function smoothScrolling() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });

}

/*=====================================================
    END OF PART 1
=====================================================*/

/*=====================================================
    ANIMATED COUNTERS
=====================================================*/

function animatedCounters() {

    const counters = document.querySelectorAll(".counter-card h2");

    if (!counters.length) return;

    const observer = new IntersectionObserver(function(entries, obs){

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const counter = entry.target;

            const text = counter.textContent.trim();

            const number = parseInt(text.replace(/\D/g,''),10);

            const suffix = text.replace(/[0-9]/g,'');

            let current = 0;

            const increment = Math.max(1, Math.ceil(number/80));

            function update(){

                current += increment;

                if(current >= number){

                    counter.textContent = number + suffix;

                }else{

                    counter.textContent = current + suffix;

                    requestAnimationFrame(update);

                }

            }

            update();

            obs.unobserve(counter);

        });

    },{

        threshold:0.5

    });

    counters.forEach(counter=>observer.observe(counter));

}


/*=====================================================
    SCROLL REVEAL
=====================================================*/

function scrollReveal(){

    const elements=document.querySelectorAll(

        ".service-card,.why-card,.counter-card,.tech-grid span,.testimonial-box,.about-grid img,.about-grid div"

    );

    if(!elements.length) return;

    const observer=new IntersectionObserver(function(entries){

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:0.15

    });

    elements.forEach(el=>observer.observe(el));

}


/*=====================================================
    ACTIVE NAVIGATION
=====================================================*/

function activeNavigation(){

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll("#navbar a");

    if(!sections.length) return;

    window.addEventListener("scroll",function(){

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            const height=section.offsetHeight;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(current && link.getAttribute("href")==="#" + current){

                link.classList.add("active");

            }

        });

    });

}


/*=====================================================
    SEARCH OVERLAY
=====================================================*/

function searchOverlay(){

    const searchBtn=document.getElementById("searchBtn");

    const overlay=document.getElementById("searchOverlay");

    const closeBtn=document.getElementById("closeSearch");

    if(!searchBtn || !overlay) return;

    searchBtn.addEventListener("click",function(){

        overlay.classList.add("show");

        const input=overlay.querySelector("input");

        if(input){

            setTimeout(()=>input.focus(),200);

        }

    });

    if(closeBtn){

        closeBtn.addEventListener("click",function(){

            overlay.classList.remove("show");

        });

    }

    overlay.addEventListener("click",function(e){

        if(e.target===overlay){

            overlay.classList.remove("show");

        }

    });

    document.addEventListener("keydown",function(e){

        if(e.key==="Escape"){

            overlay.classList.remove("show");

        }

    });

}


/*=====================================================
    FAQ ACCORDION
=====================================================*/

function faqAccordion(){

    const items=document.querySelectorAll(".faq-item");

    if(!items.length) return;

    items.forEach(item=>{

        const header=item.querySelector(".faq-question");

        if(!header) return;

        header.addEventListener("click",function(){

            item.classList.toggle("active");

        });

    });

}


/*=====================================================
    ANIMATION UTILITIES
=====================================================*/

function fadeInElement(element){

    if(!element) return;

    element.style.opacity="0";

    element.style.transition="opacity .6s ease";

    requestAnimationFrame(()=>{

        element.style.opacity="1";

    });

}

function slideUpElement(element){

    if(!element) return;

    element.style.opacity="0";

    element.style.transform="translateY(30px)";

    element.style.transition="all .6s ease";

    requestAnimationFrame(()=>{

        element.style.opacity="1";

        element.style.transform="translateY(0)";

    });

}

function pulse(element){

    if(!element) return;

    element.animate(

        [

            {transform:"scale(1)"},

            {transform:"scale(1.05)"},

            {transform:"scale(1)"}

        ],

        {

            duration:500

        }

    );

}


/*=====================================================
    INITIALIZE PART 2
=====================================================*/

/*document.addEventListener("DOMContentLoaded",function(){

    animatedCounters();

    scrollReveal();

    activeNavigation();

    searchOverlay();

    faqAccordion();

});*/




/*=====================================================
    END OF PART 2
=====================================================*/

/*=====================================================
    FORM VALIDATION
=====================================================*/

function initializeForms() {

    const forms = document.querySelectorAll("form");

    if (!forms.length) return;

    forms.forEach(form => {

        form.addEventListener("submit", function (e) {

            let valid = true;

            const required = form.querySelectorAll("[required]");

            required.forEach(field => {

                field.classList.remove("error");

                if (field.value.trim() === "") {

                    valid = false;

                    field.classList.add("error");

                }

            });

            if (!valid) {

                e.preventDefault();

                showToast("Please complete all required fields.", "error");

            }

        });

    });

}

/*=====================================================
    TOAST NOTIFICATION
=====================================================*/

function showToast(message, type = "success") {

    let toast = document.createElement("div");

    toast.className = "toast " + type;

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 3500);

}

/*=====================================================
    LAZY IMAGE LOADING
=====================================================*/

function lazyImages() {

    const images = document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const img = entry.target;

            img.src = img.dataset.src;

            img.removeAttribute("data-src");

            observer.unobserve(img);

        });

    });

    images.forEach(img => observer.observe(img));

}

/*=====================================================
    BUTTON RIPPLE EFFECT
=====================================================*/

function rippleEffect() {

    document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn => {

        btn.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const rect = btn.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";

            ripple.style.top = (e.clientY - rect.top) + "px";

            btn.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

}

/*=====================================================
    PERFORMANCE
=====================================================*/

window.addEventListener("resize", debounce(function () {

    // Reserved for future responsive logic

}, 250));

function debounce(callback, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(callback, delay);

    }

}

/*=====================================================
    HELPER FUNCTIONS
=====================================================*/

function qs(selector) {

    return document.querySelector(selector);

}

function qsa(selector) {

    return document.querySelectorAll(selector);

}

function addClass(element, className) {

    if (element)

        element.classList.add(className);

}

function removeClass(element, className) {

    if (element)

        element.classList.remove(className);

}

/*=====================================================
    INITIALIZE FINAL MODULES
=====================================================*/

initializeForms();

lazyImages();

rippleEffect();

/*=====================================================
    END OF APPLICATION
=====================================================*/

console.log(
"%c Intelligent Technology Company Website Loaded Successfully ",
"background:#2F5FAA;color:white;padding:8px 15px;border-radius:5px;font-size:14px;"
);