(function () {
    'use strict';
    console.log('reading js');

    document.addEventListener('DOMContentLoaded', function () {
        //start interactive picture
        const startBtn = document.querySelector('#start-btn');
        const introPage = document.querySelector('#intro-page');
        const pictureFrame = document.querySelector('#picture'); 
        const cursorCat = document.querySelector('#cursor-cat');  

        //get hotspot areas
        const beanbag     = document.querySelector('#beanbag');
        const rug         = document.querySelector('#rug');
        const blanket     = document.querySelector('#blanket');
        const pillow      = document.querySelector('#pillow');
        const desk        = document.querySelector('#desk');
        const windowArea  = document.querySelector('#window');
        const drawers     = document.querySelector('#drawers');

        const hotspots = [beanbag, rug, blanket, pillow, desk, windowArea, drawers];
        
        //current hotspot tracker
        let currentHotspotId = null;
        
        //hotspot box overlay
        const box = document.querySelector('#hotspot-box');
        const boxImage = document.querySelector('#hotspot-image');
        const boxCaption = document.querySelector('#hotspot-image-caption');
        const closeBtn = document.querySelector('.close-overlay');

        //hotspot box overlay info
        const hotspotInfo = {
            beanbag: {
            img: 'images/beanbag-cat.png',
            caption: 'ahh you have discovered my favorite spot! i have kneaded it, made biscuits in it, molded it, and sculpted it into ME-shaped nest. this beanbag belongs to ME and only ME!'
            },
            rug: {
                img: 'images/rug-cat.png',
                caption: 'Stretching all the way out on the rug.'
            },
            blanket: {
                img: 'images/blanket-cat.png',
                caption: 'a pretty average loaf spot. i sit right in the middle to occupy the whole bed, so i can have it all to myself!'
            },
            pillow: {
                img: 'images/pillow-cat.png',
                caption: 'observe my perfect loaf form in my perfect throne. this is where i sleep and the only function for this chair pillow: my bed.'
            },
            desk: {
                img: 'images/desk-cat.png',
                caption: 'i sit here while my mom is working or watching tv. i love to sit directly in front of the screen so she is not able to see anything!'
            },
            window: {
                img: 'images/window-cat.png',
                caption: 'i am the window patrol!!! this is where i reign. i see all the suspicious birds, crazy squirrels and the neighbor cats... and trust me, i will loaf here for 3-5 business days.'
            },
            drawers: {
                img: 'images/drawers-cat.png',
                caption: 'this is the perfect spying loaf spot. i can see everything around me, stare at everyone judgingly, and rule my queendom!'
            }
        }

        //hotspot hover
        for (let i=0; i<hotspots.length; i++) {
            if (!hotspots[i]) {
                continue;
            }
            hotspots[i].addEventListener('mouseenter', function (){
                document.body.classList.add('hotspot-hover');
            });
            hotspots[i].addEventListener('mouseleave', function (){
                document.body.classList.remove('hotspot-hover');
            });
        }


        startBtn.addEventListener('click', function(event){
            event.preventDefault();
            introPage.className = "hidden"; 
            pictureFrame.className = "showing";  
            document.body.classList.add('cursor-image'); 
            cursorCat.style.display = 'block';
        });  

        window.addEventListener('mousemove', function (event) {
            if (cursorCat.style.display === 'block') {
                cursorCat.style.left = event.clientX + 'px';
                cursorCat.style.top = event.clientY + 'px';
            }
        });

        //open overlay box when corresponding hotspot is hit
        function openBox (hotspotId) {
            if (!box) {
                return;
            }

            const info = hotspotInfo[hotspotId];

            if (info && boxImage && boxCaption) {
                boxImage.src = info.img;
                boxImage.alt = hotspotId + 'image';
                boxCaption.textContent = info.caption;
            }

            box.classList.remove('hidden');

            //normal cursor for overlay
            document.body.classList.remove('cursor-image');
            if (cursorCat) {
                cursorCat.style.display = "none";
            }
        }

        //close overlay box
        function closeBox () {
            if (box) {
                box.classList.add('hidden');

            //back to cat cursor when overlay is closed
            document.body.classList.add('cursor-image');
            if (cursorCat) {
                cursorCat.style.display = 'block';
            }
            }
        }

        //hotspot click to open boxes
        for (let i=0; i<hotspots.length; i++){
            const rectangles = hotspots[i];

            if (!rectangles) {
                continue;
            }

            // show pointer over hotspots so users know they can click
            rectangles.style.cursor = 'pointer';

            rectangles.addEventListener('click', function (event) {
                const id = event.currentTarget.id;
                openBox(id);
            });

        }

        //close overlay box
        if (closeBtn) {
            closeBtn.addEventListener('click', function(){
                closeBox();
            });
            
        }


    
    });

})();