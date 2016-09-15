window.addEventListener('DOMContentLoaded', init);

var canvas, ctx, img, sprite;

var GAME = {
  canvas: null,
  ctx: null,
  
  images:{
    raw: [],
    loaded: []
  },
  
  player: {
    img: null
  },
  
  scenery:{
    
  }
};

function init(){
  GAME.canvas = document.getElementById('the_canvas');
  GAME.ctx = GAME.canvas.getContext('2d');
  
  GAME.images.raw = [
    'img/ele1.png'
  ];
  
  img = new Image();
  img.src = 'img/ele1.png';
  img.onload = draw;
  
  console.log(img);
  
}

/*global Image*/

function load_images(raw, out, callb){
  var raw_len = raw.length;
  
  for (var i = 0; i < raw_len; i++){
    var temp = new Image();
    temp.src = raw[i];
    temp.onload = handle_load(temp);
  }
  
  function handle_load(img){
      GAME.images.loaded.push(img);
      
      if (GAME.images.loaded.length == raw_len)
        callb();
  }
  
}

function draw(){
  var opts = {
    img_width: img.width,
    img_height: img.height,
    frame_h: 200,
    frame_w: 200,
    xPos: 50,
    yPos: 200,
    draw_cycles_per_frame: 6,
    frame_count: 5,
    ctx: GAME.ctx
  };
  
  sprite = new Zprite(img, opts);
  
  console.log(sprite);
  
  anim();
}

/* global Zprite*/

function anim(){
  GAME.ctx.clearRect(0, 0, GAME.canvas.width, GAME.canvas.height);
  sprite.draw();
  
  window.requestAnimationFrame(anim);
}