(function () {
    'use strict';
    console.log('reading js');

    // overlays and next button// 
    /*document.querySelector('#start').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#form-part1').classList.remove("hidden");
    });*/

    
        const letter = document.querySelector('#letter');
        const madlib = document.querySelector('#madlib');
       

        // make sure every field is filled //
        /* if (!adj1 || !person || !number || !place1 || !bodypart || !adj2 || !place2 || !food || !adj3 || !adj4 || !adj5 || adverb)
        */

        // build madlib story // 

         const startBtn = document.querySelector('#start');
        const part1 = document.querySelector('#form-part1');
    
        startBtn.addEventListener('click', function(event){
        event.preventDefault();
        part1.className = "";        
    });

    const nextBtn1 = document.querySelector('#next1');
    const part2 = document.querySelector('#form-part2');
    
    nextBtn1.addEventListener('click', function(event){
        event.preventDefault();
        part2.className = "";

    });

    const nextBtn2 = document.querySelector('#next2');
    const part3 = document.querySelector('#form-part3');
    
    nextBtn2.addEventListener('click', function(event){
        event.preventDefault();
        part3.className = "";
    });

        
        submit.addEventListener('click', function(event){
        event.preventDefault();
         // get all words //
        const name = document.querySelector('#name').value;
        const adj1 = document.querySelector('#adj1').value;
        const person = document.querySelector('#person').value;
        const number = document.querySelector('#number').value;
        const place1 = document.querySelector('#place1').value;
        const bodypart = document.querySelector('#bodypart').value;
        const adj2 = document.querySelector('#adj2').value.trim();
        const place2 = document.querySelector('#place2').value;
        const food = document.querySelector('#food').value;
        const adj3 = document.querySelector('#adj3').value;
        const adj4 = document.querySelector('#adj4').value;
        const adj5 = document.querySelector('#adj5').value;
        const adverb = document.querySelector('#adverb').value;


        const story = `Dear my ${adj1} ${person}, \n\nHappy ${number} year anniversary! \nWhen we first met at ${place1}_ and locked ${bodypart}s, I knew that you would be in my life for a ${adj2} time. I love our dates at the${place2} and eating our favorite ${food}. Life would not be the same without your ${adj3} support and your ${adj4}  heart. \nI look forward to many more ${adj5} years with you! \n\n${adverb} yours, \n${name}`;
        letter.textContent = story;
        madlib.className = "";
        part1.className = "hidden";
        part2.className = "hidden";
        part3.className = "hidden";


        });

        

        

})();