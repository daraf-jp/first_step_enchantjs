GAMEN_YOKO = 1280;
GAMEN_TATE = 720;

enchant();

var core = {};

window.onload = function(){

  core = new Core(GAMEN_YOKO, GAMEN_TATE);

  var gazou = [];
  gazou.push("title.png");
  gazou.push("game.png");
  gazou.push("game_over1.png");
  gazou.push("game_over2.png");
  gazou.push("mol.png");
  gazou.push("print.png");

  core.preload(gazou);

  core.onload = function(){

    var gameGamen = new Scene();
    core.pushScene(gameGamen);

    var gameHaikei = new Sprite(GAMEN_YOKO, GAMEN_TATE);
    gameHaikei.image = core.assets["game.png"];
    gameGamen.addChild(gameHaikei);

    var mol = new Sprite(151, 169);
    mol.image = core.assets["mol.png"];
    mol.moveTo(300, 500);

    mol.addEventListener("touchmove", function(e){
      if(e.x - this.width / 2 > this.x){
        this.frame = 0;
      }else{
        this.frame = 1;
      }

      this.x = e.x - this.width / 2;
      this.y = e.y - this.height / 2;
    });

    gameGamen.addChild(mol);

    var tani = new Sprite(95, 100);
    tani.image = core.assets["print.png"];
    tani.moveTo(400, 200);

    gameGamen.addChild(tani);

  };

  core.start();
};