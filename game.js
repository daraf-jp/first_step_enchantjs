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

    var mol = new Sprite(151, 169);
    mol.image = core.assets["mol.png"];
    mol.moveTo(300, 500);

    mol.addEventListener("touchmove", function(e){

      this.x = e.x - this.width / 2;
      this.y = e.y - this.height / 2;
    });

    gameGamen.addChild(mol);

  };

  core.start();
};