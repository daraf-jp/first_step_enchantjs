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
      // this.y = e.y - this.height / 2;
    });

    gameGamen.addChild(mol);

    gameGamen.addEventListener("enterframe", function(){
      if(this.age % 30 == 0){
        var tani = new Sprite(95, 100);
        tani.image = core.assets["print.png"];
        tani.moveTo(Math.random() * (GAMEN_YOKO - tani.width), -tani.height);

        gameGamen.addChild(tani);

        tani.addEventListener("enterframe", function(){
          if(this.intersect(mol)){
            gameGamen.removeChild(this);
            taniHyouji.tani++;
            taniHyouji.text = taniHyouji.tani.toString();
          }
          this.y += 4;
          if(this.y > GAMEN_TATE){
            gameGamen.removeChild(this);
          }
        });
      }
    });

    var taniHyouji = new Label();
    taniHyouji.tani = 0;
    taniHyouji.text = taniHyouji.tani;
    taniHyouji.width = 600;
    taniHyouji.textAlign = "center";
    taniHyouji.font = "80px Serif";
    taniHyouji.color = "white";
    taniHyouji.moveTo(325, 250);

    gameGamen.addChild(taniHyouji);

    var titleGamen = new Scene();
    core.pushScene(titleGamen);

    var titleHaikei = new Sprite(GAMEN_YOKO, GAMEN_TATE);
    titleHaikei.image = core.assets["title.png"];
    titleGamen.addChild(titleHaikei);

    titleGamen.addEventListener("touchstart", function(){
      core.replaceScene(gameGamen);
    });

    var nokoriJikan = 30;

    var jikanHyouji = new Label();
    jikanHyouji.text = nokoriJikan;
    jikanHyouji.width = 180;
    jikanHyouji.textAlign = "center";
    jikanHyouji.moveTo(25, 65);
    jikanHyouji.font = "48px Serif";
    jikanHyouji.color = "white";

    gameGamen.addChild(jikanHyouji);

  };

  core.start();
};