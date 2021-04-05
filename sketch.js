
var ground1,backgroundImg;
var vaccine, vaccineImg,vaccineGroup;
var virus, virusImg, virusGroup;
var invisibleGround;
var lifeCount;

function preload(){
	backgroundImg = loadImage("road2.jpg");
	vaccineImg = loadImage("vaccine2.png");
	manImg = loadAnimation("man1.gif");
	virusImg = loadImage("virus.webp");
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	    ground1 = createSprite(200,300,500,800);
		ground1.addImage("ground",backgroundImg);
		ground1.velocityX = -4;
		ground1.scale = 2.5
		//ground1.x = ground1.width/2;

		man = createSprite(200,windowHeight-200,40,50);
		man.addAnimation("running",manImg);
        man.scale = 0.8
		

		invisibleGround = createSprite(200,windowHeight-50,windowWidth,10);
		invisibleGround.visible = false;

		vaccineGroup = new Group();
		virusGroup = new Group();
		lifeCount = 3;


		


        


	//Create the Bodies Here.


	
  
}


function draw() {
	background(0);
    if(ground1.x < 600){
		ground1.x = windowWidth/2;
	}

	if(keyDown("space")){
		man.velocityY = -10;
	}

	man.velocityY= man.velocityY + 0.8;

	man.collide(invisibleGround);
 
	spawnVaccine();
	spawnVirus();

	



  drawSprites();
 
}

function spawnVaccine(){
	if(frameCount%100===0){
		vaccine = createSprite(windowWidth+30,Math.round(random(windowHeight-550,windowHeight-500)),40,40);
		vaccine.addImage(vaccineImg);
		vaccine.velocityX= -5;
		vaccine.scale = 0.05;
		vaccine.lifetime = 600;
		vaccineGroup.add(vaccine);
	}
  }

  function spawnVirus(){
	  if(frameCount%150===0){
		  virus = createSprite(windowWidth+30,(windowWidth-600,windowHeight-150),40,40);
		  virus.addImage(virusImg);
		  virus.velocityX = -6;
		  virus.scale=0.2;
		  virus.lifetime = 600;
		  virusGroup.add(virus);
			  }
  }



