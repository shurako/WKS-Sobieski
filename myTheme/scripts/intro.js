

gsap.registerPlugin(ScrollTrigger);
//items to animate
const nav = document.querySelector('.nav');
var header = document.querySelector('.header');
const bg = document.querySelector('.background-image');

// Create stage and add properties
const introStage = document.createElement('div');



//add animations
const tl = gsap.timeline({default: {ease: 'power1.out '}});

// if (screen && screen.width > 900) {
// header.style.transform = 'translateY(100%)';
// tl.fromTo([nav, bg], {opacity: 0}, {opacity: 1, duration : 1.5, delay : 0.3} );
// tl.to('.header', {y: '0%' , duration: 0.5, stagger: 0.5});

// let aboutUsPages =  document.querySelectorAll('.about-us-card');
// aboutUsPages = [... aboutUsPages];
// aboutUsPages.map(element => element.style.opacity = 0);
// gsap.to('.about-us-card', {scrollTrigger: {trigger: '.about-us-card', toggleActions: 'restart none restart none'}, opacity: 1, duration: 0.8, stagger: 0.4} );


// let header2 =  document.querySelectorAll('h2');
// header2 = [... header2];
// console.log(header2);

// header2.map(element => {
//     element.style.opacity = 0
//     gsap.to(element, {scrollTrigger: {trigger: element, toggleActions: 'restart none restart none'}, opacity: 1, duration: 1.5} );
// });


// let sectionParagraph =  document.querySelectorAll('p.section-paragraph');
// sectionParagraph = [... sectionParagraph];
// console.log(sectionParagraph);

// sectionParagraph.map(element => {
//     element.style.opacity = 0
//     gsap.to(element, {scrollTrigger: {trigger: element, toggleActions: 'restart none restart none'}, opacity: 1, duration: 1.5, delay: 0.5} );
// });
// }


//Hamburger open close function

const hamburger = document.querySelector('.hamburger');
const navItem__wrapper = document.querySelector('.nav');


hamburger.addEventListener('click', () => {
    navItem__wrapper.classList.toggle('open');

})
const playerSection = document.querySelector('.players-section');
var players = document.querySelectorAll('.player-photo');

let counter = 1;
// playerSection.style.transform = 'translateX(' +(-players[0].clientWidth * counter) + 'px)';
setInterval( () => {
    
    playerSection.style.transition = '1s ease-out';
    
    playerSection.style.transform = 'translateX(' +(-players[0].clientWidth * counter) + 'px)';
    counter++; 

    if(counter> (players.length - 4)){
        counter = 1;
    }    

    console.log(counter);
}, 3000);




playerSection.addEventListener('transitionend', ()=> {
    if(players[counter-1].id === 'first-img'){
 
        
        playerSection.style.transition = 'none';

        gsap.to(playerSection,{x: '0%', duration:0, delay:0});
        counter = 1;


    }
    console.log(players.length)
});

var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.querySelector(".read-more-btn");


//    btnText.addEventListener('click', ()=>{
//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
  
//         moreText.style.display = "none";
//       } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less"; 
//         moreText.style.display = "inline";
//       }

//    })

  
    










