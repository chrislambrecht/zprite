#Zprite.js
###An easy way to display sprites in HTML5 canvas objects.

####Usage
Using Zprite.js is fairly straight forward. First, you obviously need to create your canvas element.

```html
<canvas id='the_canvas' width='300' height='300'></canvas>
```

Next, you need to make sure you create Javascript variables with information about the canvas and its context.

````javascript
var canvas = document.getElementById('the_canvas');
var ctx = canvas.getContext('2d');
```

Then, you need to load the sprite sheet into a standard Javascript Image Object.

````javascript
var image = new Image();
image.src = 'elephant.png';
```

Once the image is loaded, you define options for the Zprite object. Then, call the Zprite constructor, passing it the image you loaded and the options object.

````javascript
var options = {
                        
    // height and width of source image (not displayed frame)
    img_width: 800,
    img_height: 200,
    
    // height and width of individual frame
    frame_h: 200,
    frame_w: 200,
    
    // x- and y-position on canvas where sprite should be drawn
    xPos: 0,
    yPos: 0,
    
    // draw_cycles_per_frame is the number of times a Zprite's draw() method is called before the current frame
    // is advanced to the next.
    // frame_count is just the total number of frames in the sprite animation
    draw_cycles_per_frame: 4,
    frame_count: 4,
    
    // ctx property is the information stored in the ctx variable above (returned from getContext('2d'))
    ctx: ctx
                        
}

// Use the Zprite constructor, passing the loaded images and options object to create the Zprite object
ele_zprite = new Zprite(image, options);
```

Finally, call the Zprite objects draw() method repeatedly in your loop. After the draw() method is called the number of times equal to the Zprite's `draw_cycles_per_frame` property. the displayed frame will advance.

````javascript
function loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ele_zprite.draw();
    
    window.requestAnimationFrame(loop);
}
```