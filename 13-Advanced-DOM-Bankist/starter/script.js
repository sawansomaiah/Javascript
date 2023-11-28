'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Selecting

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'))
console.log(document.querySelectorAll('sections'))
console.log(document.getElementById('section--1'))

console.log(document.getElementsByTagName('button'))
console.log(document.getElementsByClassName('btn'))

// Creating and inserting elements
// const header = document.querySelector('header')
// const message = document.createElement('div')


// message.classList.add('cookie-message')

// message.innerHTML = 'We use cookie for improved functionality and analytics <button class = "btn btn--close--cookie">Got It!</button>'

// header.prepend(message)
// header.append(message)

// header.before(message)
// header.after(message)


//Button Scroll

// btnScrollTo.addEventListener("click", function(e){

//     const s1coords = section1.getBoundingClientRect();
//     console.log(s1coords)

//     console.log(e.target.getBoundingClientRect())

//     console.log('scroll X/Y', window.pageXOffset , window.pageYOffset)

//     console.log('height/width', document.documentElement.clientHeight, document.documentElement.clientWidth)

    // Scroll
    // window.scrollTo({
    // top : s1coords.top + window.pageYOffset,
    // left : s1coords.left + window.pagexOffset,
    // behaviour : "smooth",
    // });


//     section1.scrollIntoView({behavior: "smooth"})
// })

//Page Navigation

// document.querySelectorAll(".nav__link").forEach(function(el){

//   el.addEventListener('click',function(e){
//     e.preventDefault()
//     const id =this.getAttribute('href')

//     document.querySelector(id).scrollIntoView({behavior:"smooth"})

// });


// });
//Page Navigation usibg Event delegation
//   document.querySelector('.nav__links').addEventListener('click',function(e){
//   e.preventDefault();

//   if(e.target.classList.contains('nav__link')){
//   const id =e.target.getAttribute('href')
//   console.log(id)
//   document.querySelector(id).scrollIntoView({behaviour:"smooth"});

//   }


// })


// Delete element

// document.querySelector('.btn--close--cookie').addEventListener('click', function(){

//     message.remove()
// })




// Styles , attributes and classes
// message.style.backgroundColor = "#37383d"
// message.style.width = '120%'

// console.log(message.style.color)

// console.log(getComputedStyle(message).color)


// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30+ 'px'
// console.log(getComputedStyle(message).height)

// document.documentElement.style.setProperty('--color-primary','orangered')


// const logo = document.querySelector('.nav__logo')

// console.log(logo.alt);
// console.log(logo.className);


// console.log(logo.designer) ;

// console.log(logo.getAttribute('designer'))

// logo.setAttribute('company', 'Bankist')

// console.log(logo.getAttribute('company'))

// console.log(logo.src)
// console.log(logo.getAttribute('src'))

// console.log(logo.alt)
// console.log(logo.getAttribute('alt'))

// const link = document.querySelector('.nav__link--btn')
// console.log(link.href)
// console.log(link.getAttribute('href'))

// console.log(logo.dataset.versionNumber)

// const buttonElem = document.getElementById('wrapper', input);

// const buttonElem = document.getElementById('wrapper' ,button)
// const inputElem = document.getElementById('wrapper' ,input)

// buttonElem.addEventListener("m")

//Implementing smooth scroll

// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function(e){

//     const s1coords = section1.getBoundingClientRect();
//     console.log(s1coords)

//     console.log(e.target.getBoundingClientRect())

//     console.log('scroll X/Y', window.pageXOffset , window.pageYOffset)

//     console.log('height/width', document.documentElement.clientHeight, document.documentElement.clientWidth)

    //Scroll
    // window.scrollTo({
    // top : s1coords.top + window.pageYOffset,
    // left : s1coords.left + window.pagexOffset,
    // behaviour : "smooth",
    // });


//     section1.scrollIntoView({behavior: "smooth"})
// })


// const h1 = document.querySelector('h1');

// const alertH1 = function(e){

//   alert('EventListner Triggered')
//   console.log('hi')
// }

// h1.addEventListener('mouseenter', alertH1)

// setTimeout(()=> h1.removeEventListener('mouseenter',alertH1),3000)

// const randomInt = (min,max) =>Math.floor((Math.random() * (max - min)) + min)

// const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`


// document.querySelector('.nav__link').addEventListener('click', function(e){


//     this.style.backgroundColor = randomColor();
//     console.log('LINK', e.target)
//     console.log(e.target === this)

// })

// document.querySelector('.nav__links').addEventListener('click', function(e){


//     this.style.backgroundColor = randomColor();
//     console.log('Container', e.target, e.currentTarget)
//     console.log(e.target === this)

// })
//
// document.querySelector('.nav').addEventListener('click', function(e){

//   e.preventDefault()
//     this.style.backgroundColor = randomColor();
//     console.log('Nav', e.target, e.currentTarget)
//     console.log(e.currentTarget === this)

// })

// DOM Traversing

// const h1 = document.querySelector('h1')

// //Going Downwards : Child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes)
// console.log(h1.children)
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'orange'

// //Going Upwards

// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('.header').style.background = 'var(--gradient-secondary)'
// h1.closest('h1').style.background = 'var(--gradient-primary)'

// //Going Sideways: Siblings

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){

//   if(el != h1) el.style.transform = 'scale(0.5)'
// })

//Tabbed component

const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabContent = document.querySelectorAll('.operations__content')
console.log(tabsContainer)

tabsContainer.addEventListener('click',function(e){

const clicked = e.target.closest('.operations__tab')

  console.log(clicked)

  //Guard clause
  if(!clicked) return;

  //Remove class
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabContent.forEach( c => c.classList.remove('operations__content--active'))

  clicked.classList.add('operations__tab--active')

  //Activate content
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})

// Hover effect on NavBar

const nav = document.querySelector('.nav');
const navlinks = document.querySelectorAll('.nav__links');

// nav.addEventListener('mouseover', function(e){

//   if(e.target.classList.contains('nav__link')){
//   const link = e.target;
//   const sibling = link.closest('.nav').querySelectorAll('.nav__link')
//   const logo = link.closest('.nav').querySelector('img')

//   sibling.forEach(el =>{
//     if( el !== link) el.style.opacity = 0.5
//     });
//   logo.style.opacity = 0.5
//   }
// })

// nav.addEventListener('mouseout', function(e){

//   if(e.target.classList.contains('nav__link')){
//   const link = e.target;
//   const sibling = link.closest('.nav').querySelectorAll('.nav__link')
//   const logo = link.closest('.nav').querySelector('img')

//   sibling.forEach(el =>{
//     if( el !== link) el.style.opacity = 1

//     });
//     logo.style.opacity = 1
//   }
// })

// Conszimg the code for the fade effect on nav bar

 const handleNav = function(e){

    if(e.target.classList.contains('nav__link')){
  const link = e.target;
  const sibling = link.closest('.nav').querySelectorAll('.nav__link')
  const logo = link.closest('.nav').querySelector('img')

  sibling.forEach(el =>{
    if( el !== link) el.style.opacity = this

    });
    logo.style.opacity = this
  }

}

// nav.addEventListener('mouseover', function(e){

//   handleNav(e, 0.5)

// })

// nav.addEventListener('mouseout', function(e){

//   handleNav(e, 1)

// })

//passing arguments into handler function
// nav.addEventListener('mouseover', handleNav.bind(0.5));

// nav.addEventListener('mouseout', handleNav.bind(1));

//Sticky Navigation

// const intialCoords = section1.getBoundingClientRect();

// console.log(intialCoords)

// window.addEventListener('scroll', function(){

//     if(window.scrollY > intialCoords.top){

//       nav.classList.add('sticky');
//       }
//     else nav.classList.remove('sticky')

// })


//Intersection Observation API

// const obsCallback = function(entries){

//   entries.forEach(entry => console.log(entry))
// }

// const obsOptions = {

//     root: null,
//     threshold: 0.1
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions)
// observer.observe(section1)

// Using Intersection Observation API for sticky nav

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)

const stickyNav = function(entries){

  const [entry] = entries;
  // console.log(entry)

  if(!entry.isIntersecting) {nav.classList.add('sticky')}
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {

    root : null,
    threshold: 0,
    rootMargin: `${navHeight}px`
})

headerObserver.observe(header)


//Revealing Elements on scroll

const allSection  = document.querySelectorAll('.section')

const revealSection = function(entries,observer){

    const [entry] = entries
    // console.log(entry)

    if(!entry.isIntersecting) return

    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target)

}

const sectionObserver = new IntersectionObserver(revealSection , {root: null, threshold: 0.15})

allSection.forEach(function(section){

    sectionObserver.observe(section)
    // section.classList.add('section--hidden')
})


// Lazy Loading

const imgTargets = document.querySelectorAll('img[data-src]')

const loadImage = function(entries,observe){

  const [entry] = entries;

  if(!entry.isIntersecting) return

  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load' , function(){

  entry.target.classList.remove('lazy-img')

})
}

const imgObserver = new IntersectionObserver(loadImage, {root:null, threshold:0.15,rootMargin: '200px'})

imgTargets.forEach(img => imgObserver.observe(img))

// Slider Component Part 1

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right')

let curSlide = 0;
const maxSlide = slides.length;


// const slider = document.querySelector('.slider')
// slider.style.transform = 'scale(0.4) translateX(-800px)'
// slider.style.overflow = 'visible'
//Adding dots

const dotContainer = document.querySelector('.dots');

const createDots = function(){

    slides.forEach(function(_,i){

    dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`)
})
}

createDots();

const activateDot = function (slide){

    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
    // document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}
activateDot(0)

const goToSlide = function(slide){

    slides.forEach(
    (s,i)=>(s.style.transform = `translateX(${100*(i-slide)}%)`)
);}

goToSlide(0)

//Next Slide

const nextSlide = function(){

    if(curSlide === maxSlide - 1){
        curSlide = 0 ;
}
  else {curSlide++}
  goToSlide(curSlide);
  activateDot(curSlide)

}

//Previous Slide

const prevSlide = function(){

    if(curSlide === 0){
      curSlide = maxSlide - 1
}
    else {
      curSlide -- ;
}
    goToSlide(curSlide)
    activateDot(curSlide)
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e){

    if(e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
})




dotContainer.addEventListener('click', function(e){

if(e.target.classList.contains('dots__dot')){
      const {slide} = e.target.dataset;
      activateDot(slide)
      goToSlide(slide)
    }
})


//lifecycle Dom events

document.addEventListener('DOMContentLoaded', function(e){

  console.log('HTML parsed and DOM tree is created', e)
})

window.addEventListener('load', function(e){

  console.log('page fully loaded', e)
})

window.addEventListener('beforeunload', function(e){

  e.preventDefault()
  console.log(e)
  e.returnValue = ''
})
