GAMEN_YOKO = 1280;
GAMEN_TATE = 720;

enchant();

var core = {};

window.onload = function(){

  core = new Core(GAMEN_YOKO, GAMEN_TATE);

  core.onload = function(){
  };

  core.start();
};