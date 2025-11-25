 

(function () {
    'use strict';
    console.log('reading js');

    const changeCat = document.querySelector('#change-cat');
    const cat1 = document.querySelector('#cat-1');
    const cat2 = document.querySelector('#cat-2');
    const moodCat = document.querySelector('#mood-cat');
    const changeMoodBtn = document.querySelector('#change-mood')

    changeCat.addEventListener('mouseover', function(event){
            event.preventDefault();
            cat1.className = "hidden"; 
            cat2.className = "showing";  
        }); 

    changeCat.addEventListener('mouseleave', function(event){
            event.preventDefault();
            cat2.className = "hidden"; 
            cat1.className = "showing";  
        });  

    changeMoodBtn.addEventListener('click', function(event){
            event.preventDefault(); 
            moodCat.img.style.filter = 'grayscale(100%)'; 
        });  


})();