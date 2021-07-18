      var ship,ship_sailing;
      var seaImg,sea;

      function preload(){
      ship_sailing =loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
      seaImg = loadImage("sea.png");
      }

      function setup(){
        createCanvas(400,400);
        
        ship = createSprite(50,160,20,50);
        ship.addAnimation("sailing",ship_sailing);
        sea = createSprite(200,200,50,50);
        sea.addImage(seaImg);
        edges = createEdgeSprites();
        ship.scale = 0.5;


      }

      function draw() {
        background("blue");
      
        console.log("ship sailing");
        console.log(ship.y);

        if(keyIsDown(LEFT_ARROW)){
          ship.velocityX = 2;
        }
        
      ship.velocityX = ship.velocityX + 0.5;

      ship.collide(edges[3]);
      drawSprites();
      }