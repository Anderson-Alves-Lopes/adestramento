
const menu = document.querySelector('.menu');
const ul =document.querySelector('header ul');
 menu.addEventListener('click',function(){
   if(ul.style.height === '20vh'){
    ul.style.opacity = '0'

    setTimeout(function(){
      ul.style.height = '0';
    },200)
   }else{
    ul.style.height= '20vh';
    setTimeout(function(){
      ul.style.opacity = '1';
    },200)
   }
 });

const debounce = (func, wait) => {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
const target = document.querySelectorAll('[data-show]');
const showClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + (((window.innerHeight * 3) / 4) + 80);
    target.forEach(function(element){
      if((windowTop) > element.offsetTop){
          element.classList.add(showClass);
      }else{
          element.classList.remove(showClass);
      }
    });
    
  }
animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    },200));
}