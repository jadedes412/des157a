(function(){
    'use strict'
    console.log('reading js');

    // audio - sound effects setup
    var buttonSound = new Audio('audio/button.mp3');
    var pounceSound = new Audio('audio/pounce.mp3');
    var succeedTurnSound = new Audio('audio/succeed-turn.mp3');
    var failTurnSound = new Audio('audio/fail-turn.mp3');
    var winSound = new Audio('audio/win.mp3');
    var loseSound = new Audio('audio/lose.mp3');

    function playSound(audio) {
        audio.currentTime = 0;
        audio.play();
    }

    // pages
    var startPage = document.querySelector(".start-page");
    var avatarPage = document.querySelector(".avatar-page");
    var gamePage = document.querySelector(".game-page");
    var winPage = document.querySelector(".win-page");
    var losePage = document.querySelector(".lose-page");

    var startButton = document.querySelector(".start-button");
    var playButton = document.querySelector(".play-button");
    var replayButton = document.querySelector(".replay-button");

    // start name inputs / name display
    var player1Input = document.querySelector("#player1");
    var player2Input = document.querySelector("#player2");

    var player1name = document.querySelector(".player1-display");
    var player2name = document.querySelector(".player2-display");

    // avatars
    var avatar1Image = document.querySelector(".avatar1-image");
    var avatar2Image = document.querySelector(".avatar2-image");

    var avatar1LeftButton = document.querySelector(".avatar1-left");
    var avatar1RightButton = document.querySelector(".avatar1-right");
    var avatar2LeftButton = document.querySelector(".avatar2-left");
    var avatar2RightButton = document.querySelector(".avatar2-right");

    //test
    startPage.classList.remove("hidden");
    avatarPage.classList.add("hidden");
    gamePage.classList.add("hidden");

    // avatars
    // player 1 avatars
    var player1Cats = [
        "images/gcat-left-default.png",
        "images/ocat-left-default.png",
        "images/wcat-left-default.png"
    ];

    // player 2 avatars
    var player2Cats = [
        "images/gcat-right-default.png",
        "images/ocat-right-default.png",
        "images/wcat-right-default.png"
    ];

    // current avatar index
    var player1Index = 0;
    var player2Index = 0;


    // game variables 

    var p1Score = 0;
    var p2Score = 0;
    var currentPlayer = 1;

    var pounceBtn = document.querySelector(".pounce-btn");
    var skipBtn = document.querySelector(".skip-btn");

    var p1ScoreText = document.querySelector(".player1-score");
    var p2ScoreText = document.querySelector(".player2-score");

    var p1NameGame = document.querySelector(".player1-name");
    var p2NameGame = document.querySelector(".player2-name");

    var p1CatGame = document.querySelector(".player1-cat");
    var p2CatGame = document.querySelector(".player2-cat");

    var p1View = document.querySelector(".player1-viewfinder");
    var p2View = document.querySelector(".player2-viewfinder");

    var instructionText = document.querySelector(".instruction-text");
    var toyResults = document.querySelector(".toy-results");

    var toy1Img = document.querySelector(".toy1");
    var toy2Img = document.querySelector(".toy2");

    var toy1Pts = document.querySelector(".toy1-points");
    var toy2Pts = document.querySelector(".toy2-points");

    var pounceText = document.querySelector(".pounce-text");
    var winMessage = document.querySelector(".win-message");
    var loseMessage = document.querySelector(".lose-message");

    var pouncedThisTurn = false;

    /* toys(dice) values */
    var toys = [
        {src: "images/feather-1.png", value: 1},
        {src: "images/worm-2.png", value: 2},
        {src: "images/yarn-3.png", value: 3},
        {src: "images/duck-4.png", value: 4},
        {src: "images/mouse-5.png", value: 5},
        {src: "images/fish-6.png", value: 6}
    ];



    // page/avatar functions
    function showStartPage() {
        startPage.classList.remove("hidden");
        avatarPage.classList.add("hidden");
        gamePage.classList.add("hidden");
        winPage.classList.add("hidden");
        losePage.classList.add("hidden");
    }

    function showAvatarPage() {
        startPage.classList.add("hidden");
        avatarPage.classList.remove("hidden");
        gamePage.classList.add("hidden");
        winPage.classList.add("hidden");
        losePage.classList.add("hidden");
    }

    function showGamePage() {
        startPage.classList.add("hidden");
        avatarPage.classList.add("hidden");
        gamePage.classList.remove("hidden");
        
    }

    function updatePlayer1Avatar() {
        avatar1Image.setAttribute("src", player1Cats[player1Index]);
    }

    function updatePlayer2Avatar() {
        avatar2Image.setAttribute("src", player2Cats[player2Index]);
    }

    // game functions
    function switchTurn() {

        //hide toys
        toyResults.classList.add("hidden");

        //reset instruction text
        instructionText.textContent = " "


        if (currentPlayer === 1) {
            currentPlayer = 2;
            p1View.classList.add("hidden");
            p2View.classList.remove("hidden");
        } else {
            currentPlayer = 1;
            p2View.classList.add("hidden");
            p1View.classList.remove("hidden");
        }
        pouncedThisTurn = false;
        pounceText.textContent = "pounce";
    }

    function checkWinLose() {
        if (p1Score >= 30) {
            showWinPage(1);
            return;
        }
        if (p2Score >= 30) {
            showWinPage(2);
            return;
        }
    }

    function showLosePage(loser) {
        playSound(loseSound);

        var loseName = (loser === 1) ? p1NameGame.textContent : p2NameGame.textContent;
        loseMessage.textContent = loseName + " loses!";

        gamePage.classList.add("hidden");
        document.querySelector(".lose-page").classList.remove("hidden");
    }

    function showWinPage(winner) {
        playSound(winSound);

        gamePage.classList.add("hidden");
        document.querySelector(".win-page").classList.remove("hidden");

        if (winner ==1) {
            winMessage.textContent = p1NameGame.textContent + " wins!";
        } else {
            winMessage.textContent = p2NameGame.textContent + " wins!";
        }
    }



    startButton.addEventListener("click", function () {
        playSound(buttonSound);

        var name1 = player1Input.value.trim();
        var name2 = player2Input.value.trim();

        if(name1 === "") {
            name1 = "player 1";
        }

        if(name2 === "") {
            name2 = "player 2";
        }

        // add name display 
        player1name.textContent = name1;
        player2name.textContent = name2;

        //next page 

        showAvatarPage();

    });

    playButton.addEventListener("click", function () {
        playSound(buttonSound);

        // name display
        p1NameGame.textContent = player1name.textContent;
        p2NameGame.textContent = player2name.textContent;

        // avatar display
        p1CatGame.src = avatar1Image.src;
        p2CatGame.src = avatar2Image.src;

        // turn viewfinder
        p1View.classList.remove("hidden");
        p2View.classList.add("hidden");

        // reset pounce label for new game
        pouncedThisTurn = false;
        pounceText.textContent = "pounce";

        //next page
        showGamePage();
    });

    replayButton.addEventListener("click", function () {
        playSound(buttonSound);
        showStartPage();
    });


    // player 1 arrows
    avatar1LeftButton.addEventListener("click", function () {
        player1Index = player1Index - 1;

        if (player1Index < 0) {
            player1Index = player1Cats.length - 1;
        }

        updatePlayer1Avatar();
    });

    avatar1RightButton.addEventListener("click", function () {
        player1Index = player1Index + 1;

        if (player1Index >= player1Cats.length) {
            player1Index = 0;
        }

        updatePlayer1Avatar();
    });

    // player 2 arrows
    avatar2LeftButton.addEventListener("click", function () {
        player2Index = player2Index - 1;

        if (player2Index < 0) {
            player2Index = player2Cats.length - 1;
        }

        updatePlayer2Avatar();
    });

    avatar2RightButton.addEventListener("click", function () {
        player2Index = player2Index + 1;

        if (player2Index >= player2Cats.length) {
            player2Index = 0;
        }

        updatePlayer2Avatar();
    });

    // make sure the first images are set correctly on load
    updatePlayer1Avatar();
    updatePlayer2Avatar();



    // game button interactions!!!

    //pounce button
    if (pounceBtn) {
        pounceBtn.addEventListener("click", function () {
        playSound(pounceSound);

        //update button text
        if (!pouncedThisTurn) {
        pouncedThisTurn = true;
        pounceText.textContent = "pounce again!";
    }

        // swap cat to pounce mode
        if (currentPlayer === 1) {
            p1CatGame.src = p1CatGame.src.replace("default", "pounce");
        } else {
            p2CatGame.src = p2CatGame.src.replace("default", "pounce");
        }

        // random 2 toys
        var t1 = toys[Math.floor(Math.random()*6)];
        var t2 = toys[Math.floor(Math.random()*6)];

        toy1Img.src = t1.src;
        toy2Img.src = t2.src;

        toy1Pts.textContent = "+" + t1.value;
        toy2Pts.textContent = "+" + t2.value;

        toyResults.classList.remove("hidden");

        // 1 second points reveal
        setTimeout(function () {

            // return cat to default pose
            if (currentPlayer === 1) {
                p1CatGame.src = p1CatGame.src.replace("pounce", "default");
            } else {
                p2CatGame.src = p2CatGame.src.replace("pounce", "default");
            }


            // snake eyes (or two feathers)
            if (t1.value === 1 && t2.value === 1) {
                showLosePage();
                return;
            }

            // if rolled a 1 (one feather), switch turn
            if (t1.value === 1 || t2.value === 1) {
                playSound(failTurnSound);
                instructionText.textContent = "oops!";
                switchTurn();
                return;
            }

            // otherwise... add points
            var total = t1.value + t2.value;

            if (currentPlayer === 1) {
                p1Score += total;
                p1ScoreText.textContent = p1Score;
            } else {
                p2Score += total;
                p2ScoreText.textContent = p2Score;
            }

            instructionText.textContent = "wow!";
            playSound(succeedTurnSound);
            checkWinLose();

        }, 1000);

        
    });
    }

    // skip button

    if (skipBtn) {
        skipBtn.addEventListener("click", function () {
            playSound(buttonSound);
            instructionText.textContent = "turn skipped!";
            setTimeout(function() {
            switchTurn();
            }, 1000);
        });
    }



})();