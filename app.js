const smoothScroll = (target, duration) => {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.scrollY;
    var startTime = null;

    const animation = (currentTime) => {
        if(startTime === null) {
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t+b;
        t--;
        return -c/2*(t*(t-2)-1)+b;
    }

    requestAnimationFrame(animation);
}

const aboutSection = document.querySelector('.to-about'); 
const projectsSection = document.querySelector('.to-projects'); 
const contactSection = document.querySelector('.to-contact'); 
const resumeSection = document.querySelector('.to-resume');



aboutSection.addEventListener('click', function(){
    smoothScroll('.about-section', 500);
});

projectsSection.addEventListener('click', function(){
    smoothScroll('.projects-section', 500);
});
contactSection.addEventListener('click', function(){
    smoothScroll('.contact-section', 500);
});
resumeSection.addEventListener('click', function(){
    smoothScroll('.resume-section', 500);
});

/* mobile responsiveness */
const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();