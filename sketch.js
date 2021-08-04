var backgroundImg;
var cat;
var mouse;
var cat1 , cat2, cat3;
var mouse1, mouse2, mouse3;






function preload() {
    backgroundImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1");
    cat2 = loadAnimation("image/cat2");
    cat3 = loadAnimation("image/cat3");
    mouse1 = loadAnimation("images/cat4");
    mouse2 = loadAnimation("images/cat5");
    mouse3 = loadAnimation("images/cat6");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(800,790);
    cat.addAnimation("catsitting",cat1);

    mouse = createSprite(200,790);
    mouse.addAnimation("jerrycheese",mouse1);
}

function draw() {

    background(backgroundImg);


    if(cat.x-mouse.x<cat.width/2-mouse.width/2){

        cat.addAnimation("catEats",cat3);
        cat.changeAnimation("catEats");

        mouse.addAnimation("mouseScared",mouse3);
        mouse.changeAnimation("mouseScared");
    }
    
    drawSprites();
}


function keyPressed(){

    if(keyCode===32){

        cat.x = cat.x - 10;
        cat.addAnimation("tomRunning",cat2);
        cat.changeAnimation("tomRunning");

        mouse.addAnimation("jerryRun",mouse2);
        mouse.changeAnimation("jerryRun");

    }

}
