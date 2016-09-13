 /////////////////////////////////////////////////////////
// Zprite.js
//    Constructor for Quick_Sprite Object
//    Prototype has methods to display (animated) image
//
//  Usage: <destination obj> = Quick_Sprite(options);
//    where options is an object with the following properties:
//      .img (img obj);     .frame_w & frame_h (frame width & height)
//      
 /////////////////////////////////////////////////////////

function Zprite(img, options){
  if (!img || !options){
    throw new Error("Xprite constructor must be passed (img obj, options obj)");
  }
  
  //TO-DO: bad data handling
  
  
  // TO-DO: this.prop = options.prop
  //    becomes for i in options
  //      this[i] = options[i]
  
  this.img = img;
  
  this.img_width = options.img_width;
  this.img_height = options.img_height;
  
  this.frame_h = options.frame_h;
  this.frame_w = options.frame_w;
  this.frame_count = options.frame_count;
  
  this.xPos = options.xPos;
  this.yPos = options.yPos;
  
  // the number of times the object's draw() method must be called
  // in order to advance frames.
  this.draw_call_counter = 0;
  this.draw_cycles_per_frame = options.draw_cycles_per_frame;
  this.current_frame = 0;
  
  // need to set context for display
  this.ctx = options.ctx;
  
}

Zprite.prototype.draw = function(){
  
  // if call_counter is at or above the calls_per_frame amount,
  // increase the current frame to the next and reset the
  // draw_call_counter.
  if (this.draw_call_counter >= this.draw_cycles_per_frame){
    this.current_frame++;
    this.draw_call_counter = 0;
    
    // if current_frame has extended to a number higher than
    // the total frame count, reset the frame to zero!
    if (this.current_frame >= this.frame_count){
      this.current_frame = 0;
    }
    
  }
  
  // draw the thing.
  // TODO: 3rd parameter (begin y-coord of image; currently 0) should change to handle sprites of more than
  //       one row.                                          
  //                                                         |
  //                                                         v
  this.ctx.drawImage(this.img, this.frame_w * this.current_frame, 0, this.frame_w, this.frame_h, this.xPos, this.yPos, this.frame_w, this.frame_h);
  
  //increase call count AFTER draw
  this.draw_call_counter++;
};