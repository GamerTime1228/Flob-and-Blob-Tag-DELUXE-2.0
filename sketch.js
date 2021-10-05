var gameState = "START";

var score = 0;
var score2 = 0;
var lives = 3;
var stamina = 100;

var blob;
var flob;
var EXblob;
var EXflob;
var glod;
var glodButton;

var startButton;

var blobImageDown;
var blobImageUp;
var blobImageLeft;
var blobImageRight;
var blobImageWin;
var flobImageLeft;
var flobImageRight;
var flobImageWin;
var glodImage;

function preload() {
    blobImageDown = loadImage("B_down.gif");
    blobImageUp = loadImage("B_up.gif");
    blobImageLeft = loadImage("B_left.gif");
    blobImageRight = loadImage("B_right.gif");
    blobImageWin = loadImage("B_Win2.gif");
    flobImageLeft = loadImage("F_left.gif");
    flobImageRight = loadImage("F_right.gif");
    flobImageWin = loadImage("F_Win2.gif");
    glodImage = loadImage("glod.gif")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // blob
    blob = createSprite(windowWidth/2, windowHeight / 2);
    blob.addImage(blobImageDown);
    blob.scale = 0.5;
    blob.y = windowHeight / 2;
    blob.visible = false;

    // flob
    flob = createSprite(0, 0);
    flob.addImage(flobImageRight);
    flob.scale = 0.5;
    flob.visible = false;
    flob.velocityX = 5;

    // blob on title screen
    EXblob = createSprite(windowWidth/2, windowHeight / 2);
    EXblob.addImage(blobImageDown);
    EXblob.scale = 0.5;
    EXblob.velocityX = 15;

    // flob on title screen
    EXflob = createSprite(windowWidth/2 - 400, windowHeight / 2);
    EXflob.addImage(flobImageRight);
    EXflob.scale = 0.5;
    EXflob.velocityX = 15;
}

function draw() {
    background("green");
    if(gameState === "START") {
        blob.visible = false;
        flob.visible = false;
        flob.y = 0;
        flob.x = 0;
        flob.addImage(flobImageRight);
        blob.addImage(blobImageDown);
        blob.x = windowWidth/2;
        EXblob.visible = true;
        EXflob.visible = true;
        EXblob.y === windowHeight / 2;
        EXflob.y === windowHeight / 2;
        EXblob.addImage(blobImageRight);
        EXflob.addImage(flobImageRight);
        lives = 3;
        score = 0;
        stamina === 100;

        // animation for title screen
        if(EXblob.x >= windowWidth && EXblob.y === windowHeight / 2) {
            EXblob.x = 0;
            EXblob.y = windowHeight / 2 + 200;
            EXblob.velocityX = 15;
        }
        if(EXblob.x >= windowWidth && EXblob.y === windowHeight / 2 + 200) {
            EXblob.x = 0;
            EXblob.y = windowHeight / 2;
            EXblob.velocityX = 15;
        }
        if(EXflob.x >= windowWidth && EXflob.y === windowHeight / 2) {
            EXflob.x = 0;
            EXflob.y = windowHeight / 2 + 200;
            EXflob.velocityX = 15;
        }
        if(EXflob.x >= windowWidth && EXflob.y === windowHeight / 2 + 200) {
            EXflob.x = 0;
            EXflob.y = windowHeight / 2;
            EXflob.velocityX = 15;
        }

        //start your game
        if(keyDown("space")) {
            gameState = "GAME";
        }

        if(keyDown("Z")) {
            gameState = "GAME2";
        }

    }


    if (gameState === "GAME") {
        EXblob.visible = false;
        EXflob.visible = false;
        blob.visible = true;
        flob.visible = true;
        blob.scale = 0.5;
        flob.scale = 0.5;
        score = score + 2;


        // blob's movement
        if(keyDown("left")) {
            blob.x -= 10;
            blob.addImage(blobImageLeft);
        }

        if(keyDown("right")) {
            blob.x += 10;
            blob.addImage(blobImageRight);
        }

        if(keyDown("up")) {
            blob.y -= 12.5;
            blob.addImage(blobImageUp);
        }

        if(keyDown("down")) {
            blob.y += 12.5;
            blob.addImage(blobImageDown);
        }

        // flob's AI movement
        if (blob.y < flob.y) {
            flob.velocityY = -7.5;
        }

        if (blob.y > flob.y) {
            flob.velocityY = 7.5;
        }

        if (score >= 1000 && score < 2500) {
            if (flob.velocityX === -7.5) {
                flob.velocityX = -12.5;
            }
    
            if (flob.velocityX === 7.5) {
                flob.velocityX = 12.5;
            }
        }

        if (score >= 2500 && score < 5000) {
            if (flob.velocityX === -12.5) {
                flob.velocityX = -15;
            }
    
            if (flob.velocityX === 12.5) {
                flob.velocityX = 15;
            }

            if (blob.y < flob.y) {
                flob.velocityY = -12.5;
            }
    
            if (blob.y > flob.y) {
                flob.velocityY = 12.5;
            }
        }

            if (score >= 5000) {
                if (flob.velocityX === -15) {
                    flob.velocityX = -25;
                }
        
                if (flob.velocityX === 15) {
                    flob.velocityX = 25;
                }
    
                if (blob.y < flob.y) {
                    flob.velocityY = -20;
                }
        
                if (blob.y > flob.y) {
                    flob.velocityY = 20;
                }
        }

        //blob's stamina
        if(keyDown("enter") && stamina > 0) {
            stamina -= 0.5;

            if(keyDown("left")) {
                blob.x -= 20;
                blob.addImage(blobImageLeft);
            }
    
            if(keyDown("right")) {
                blob.x += 20;
                blob.addImage(blobImageRight);
            }
    
            if(keyDown("up")) {
                blob.y -= 25;
                blob.addImage(blobImageUp);
            }
    
            if(keyDown("down")) {
                blob.y += 25;
                blob.addImage(blobImageDown);
            }
        }

        if(keyDown("enter") && stamina <= 0) {
            if(keyDown("left")) {
                blob.x -= 0;
                blob.addImage(blobImageLeft);
            }
    
            if(keyDown("right")) {
                blob.x += 0;
                blob.addImage(blobImageRight);
            }
    
            if(keyDown("up")) {
                blob.y -= 0;
                blob.addImage(blobImageUp);
            }
    
            if(keyDown("down")) {
                blob.y += 0;
                blob.addImage(blobImageDown);
            }
        }

        // making barriers
        if(flob.x <= 0) {
            flob.velocityX = 7.5;
            flob.addImage(flobImageRight);
        }

        if(flob.x >= windowWidth) {
            flob.velocityX = -7.5;
            flob.addImage(flobImageLeft);
        }

        if(blob.x <= 40) {
            blob.x = 50;
        }

        if(blob.x >= windowWidth - 40) {
            blob.x = windowWidth - 50;
        }

        if(blob.y <= 40) {
            blob.y = 50;
        }

        if(blob.y >= windowHeight - 40) {
            blob.y = windowHeight - 50;
        }

        // live system and collisions between flob and blob
        if(flob.isTouching(blob) && lives > 0 && blob.x > windowWidth/2) {
            lives -= 1;
            flob.x = flob.x - 500;
        }

        if(flob.isTouching(blob) && lives > 0 && blob.x < windowWidth/2) {
            lives -= 1;
            flob.x = flob.x + 500;
        }

        if(lives === 0) {
            gameState = "FLOB";
        }

    }

    if (gameState === "GAME2") {
        EXblob.visible = false;
        EXflob.visible = false;
        blob.visible = true;
        flob.visible = true;
        blob.scale = 0.5;
        flob.scale = 0.5;
        score = score + 1;


        // blob's movement
        if(keyDown("left")) {
            blob.x -= 10;
            blob.addImage(blobImageLeft);
        }

        if(keyDown("right")) {
            blob.x += 10;
            blob.addImage(blobImageRight);
        }

        if(keyDown("up")) {
            blob.y -= 12.5;
            blob.addImage(blobImageUp);
        }

        if(keyDown("down")) {
            blob.y += 12.5;
            blob.addImage(blobImageDown);
        }

        // flob's AI movement
        if (blob.y < flob.y) {
            flob.velocityY = -7.5;
        }

        if (blob.y > flob.y) {
            flob.velocityY = 7.5;
        }

        if (score >= 1000 && score < 2500) {
            if (flob.velocityX === -7.5) {
                flob.velocityX = -12.5;
            }
    
            if (flob.velocityX === 7.5) {
                flob.velocityX = 12.5;
            }
        }

        if (score >= 2500 && score < 3000) {
            if (flob.velocityX === -12.5) {
                flob.velocityX = -15;
            }
    
            if (flob.velocityX === 12.5) {
                flob.velocityX = 15;
            }

            if (blob.y < flob.y) {
                flob.velocityY = -12.5;
            }
    
            if (blob.y > flob.y) {
                flob.velocityY = 12.5;
            }
        }

            if (score === 3000) {
                gameState = "BLOB"
        }

        //blob's stamina
        if(keyDown("enter") && stamina > 0) {
            stamina -= 0.5;

            if(keyDown("left")) {
                blob.x -= 20;
                blob.addImage(blobImageLeft);
            }
    
            if(keyDown("right")) {
                blob.x += 20;
                blob.addImage(blobImageRight);
            }
    
            if(keyDown("up")) {
                blob.y -= 25;
                blob.addImage(blobImageUp);
            }
    
            if(keyDown("down")) {
                blob.y += 25;
                blob.addImage(blobImageDown);
            }
        }

        if(keyDown("enter") && stamina <= 0) {
            if(keyDown("left")) {
                blob.x -= 0;
                blob.addImage(blobImageLeft);
            }
    
            if(keyDown("right")) {
                blob.x += 0;
                blob.addImage(blobImageRight);
            }
    
            if(keyDown("up")) {
                blob.y -= 0;
                blob.addImage(blobImageUp);
            }
    
            if(keyDown("down")) {
                blob.y += 0;
                blob.addImage(blobImageDown);
            }
        }

        // making barriers
        if(flob.x <= 0) {
            flob.velocityX = 7.5;
            flob.addImage(flobImageRight);
        }

        if(flob.x >= windowWidth) {
            flob.velocityX = -7.5;
            flob.addImage(flobImageLeft);
        }

        if(blob.x <= 40) {
            blob.x = 50;
        }

        if(blob.x >= windowWidth - 40) {
            blob.x = windowWidth - 50;
        }

        if(blob.y <= 40) {
            blob.y = 50;
        }

        if(blob.y >= windowHeight - 40) {
            blob.y = windowHeight - 50;
        }

        // live system and collisions between flob and blob
        if(flob.isTouching(blob) && lives > 0 && blob.x > windowWidth/2) {
            gameState = "FLOB";
        }

        if(flob.isTouching(blob) && lives > 0 && blob.x < windowWidth/2) {
            gameState = "FLOB";
        }
            

    }

    if(gameState === "FLOB") {
        blob.visible = false;
        flob.x = windowWidth/2;
        flob.y = windowHeight/2;
        flob.addImage(flobImageWin);
        flob.scale = 0.8;

        if(score > score2) {
            score2 = score;
        }
        if(score < score2) {
            score2 = score2;
        }

        if(keyDown("enter")) {
            gameState = "START";
            EXblob.x = windowWidth - 300;
            EXflob.x = windowWidth - 600;
        } 
    }

    if(gameState === "BLOB") {
        flob.visible = false;
        blob.x = windowWidth/2;
        blob.y = windowHeight/2;
        blob.addImage(blobImageWin);
        blob.scale = 0.8;

        if(keyDown("enter")) {
            gameState = "START";
            EXblob.x = windowWidth - 300;
            EXflob.x = windowWidth - 600;
        } 
    }

    drawSprites();
    console.log(gameState);

    // text for each mode
    if(gameState === "START") {
        fill("white");
        textSize(50);
        text("Flob and Blob Tag DELUXE", windowWidth/4 + 65, windowHeight/4);
        textSize(30);
        text("By Gamer Time!", windowWidth/4 + 225, windowHeight/2 - 100);
        textSize(25);
        text("Press SPACE to INFINITE MODE!", windowWidth/4 + 220, windowHeight/2 + 300);
        text("Press Z to GOAL MODE!", windowWidth/4 - 220, windowHeight/2 + 300);
    }

    if(gameState === "GAME") {
        fill("white");
        textSize(20);
        text("Score: " + score, 25, 25);

        // High Score
        if(score2 > 0) {
            text("High Score: " + score2, windowWidth/2 - 50, 25);
        }

        if(score2 === 0) {
            text("High Score: " + score, windowWidth/2 - 50, 25);
        }

        // lives
        text("Lives: " + lives, windowWidth - 100, 25);

        if(lives === 3) {
            text("You're doing great!", windowWidth - 325, 25);
        }

        if(lives === 2) {
            text("You're doing alright!", windowWidth - 325, 25);
        }

        if(lives === 1) {
            text("You're not doing too good!", windowWidth - 375, 25);
        }

        text("Stamina: " + stamina, windowWidth - 525, 25);

        // AI difficulty
        if(score >= 0 && score < 1000) {
            text("Flob Difficulty: NORMAL", windowWidth/2 - 400, 25);
        }

        if(score >= 1000 && score < 2500) {
            text("Flob Difficulty: INTERMEDIATE", windowWidth/2 - 425, 25);
        }

        if(score >= 2500 && score < 5000) {
            text("Flob Difficulty: HARD", windowWidth/2 - 400, 25);
        }

        if(score >= 5000) {
            text("Flob Difficulty: IMPOSSIBLE", windowWidth/2 - 425, 25);
        }

        text("Move around with the arrow keys! Don't get tagged by FLOB 3 times!", 100, windowHeight - 25);
        text("Press ENTER to sprint! Don't run out of stamina!", windowWidth - 600, windowHeight - 25);
    }

    if(gameState === "GAME2") {
        fill("white");
        textSize(20);
        text("Score: " + score, 25, 25);
        text("Stamina: " + stamina, windowWidth - 525, 25);

        // AI difficulty
        if(score >= 0 && score < 1000) {
            text("Flob Difficulty: NORMAL", windowWidth/2 - 400, 25);
        }

        if(score >= 1000 && score < 2500) {
            text("Flob Difficulty: INTERMEDIATE", windowWidth/2 - 425, 25);
        }

        if(score >= 2500 && score < 5000) {
            text("Flob Difficulty: HARD", windowWidth/2 - 400, 25);
        }

        if(score >= 5000) {
            text("Flob Difficulty: IMPOSSIBLE", windowWidth/2 - 425, 25);
        }

        text("Move around with the arrow keys! Can you make it to 30000!", 100, windowHeight - 25);
        text("Press ENTER to sprint! Don't run out of stamina!", windowWidth - 600, windowHeight - 25);
    }

    if(gameState === "FLOB") {
        fill("white");
        textSize(60);
        text("Flob wins!", windowWidth/2 - 125, 75);
        textSize(30);
        text("You lose!", windowWidth/2 - 60, 125);
        text("Press ENTER to try again!", windowWidth/2 - 160, windowHeight - 50);
        textSize(20);
        text("Score: " + score, 50, windowHeight - 10);
        text("High Score: " + score2, windowWidth - 200, windowHeight - 10);
    }

    if(gameState === "BLOB") {
        fill("white");
        textSize(60);
        text("Blob wins!", windowWidth/2 - 125, 75);
        textSize(30);
        text("You win!", windowWidth/2 - 60, 125);
        text("Press ENTER to try again!", windowWidth/2 - 160, windowHeight - 50);
    }
}


 