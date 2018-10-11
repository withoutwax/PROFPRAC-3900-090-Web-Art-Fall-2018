# Web Montage
## Description
**Web Montage** is an assignment for the class to create an art work which mimics the art work of montages. Hence a digital montage.  
I personally wanted to create something functional for this project: I decided to add the ability for the user not only create the montage, but able to manipulate and play around with the montage. I added the functionality in a way that users could configure and modify the Web Montages by altering the positions and the alpha settings, instead of just displaying a static piece of work.

## Functionality
There's three functionality with the web application:
1. Drag and position an element;
2. Upload a new image;
3. Configure the Alpha settings (transparency) for uploaded (& pre-existing) elements;  

Imagine this app as a digital sketchbook that you can play around with.

## Tools:
**Language:** HTML, CSS, JavaScript  
**APIs:** JavaScript Drag API  
**Fonts:** Google Web Fonts - ['PT Mono'](https://fonts.google.com/specimen/PT+Mono)

## Useful Codes:
One of the things that I learned which was useful was the Drag API in JavaScript and the image upload system. Also Changing the alpha setting was pretty fun too.  

### Drag API:
**HTML**
```html
<img class="image" id="image01" src="assets/01.jpg" onload="dragElement(event)" alt="Mark-Weaver-01">
```
**JavaScript**
```JavaScript
function dragElement(elmnt) {
  elmnt = document.getElementById(event.target.id);
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  createAlphaController(elmnt.id);

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

### Image Upload
**HTML**
```HTML
<input type="file" name="image" id="imageUpload" onchange="imageUpload(event)" accept="image/*" style="display: none;"/>
  <!-- FOR DECORATION PURPOSES -->
<label id="imageUploadDeco" for="imageUpload" style="cursor: pointer;">Upload an image</label>

<img id="imageOutput" width="500"/>
```
**JavaScript**
```JavaScript
let numImages = 5;

let imageUpload = function(event) {
  event.target.files);

  let image = document.getElementById('imageOutput');
  image.src = URL.createObjectURL(event.target.files[0]);
  numImages += 1;
  image.className = "image";
  image.id = "image0"+numImages.toString();
  image.onload = "dragElement(event)"

  image.onload = function() {
    dragElement(event);
  }
  createImage();
}

function createImage() {
    console.log("clicked");
    let img = document.createElement('img'); //new Image() :
    img.setAttribute("id", "imageOutput");
    img.setAttribute("width", "500");
    document.body.appendChild(img);
}
```

### Alpha Control
**HTML**
```html
<div class="image-controller" id="image-controller">
```
**JavaScript**
```JavaScript
function updateAlpha(alpha, event) {
  console.log("Update Alpha");
  console.log(event.target.id);
  let image_id = event.target.id.slice(5);
  console.log('After slice', image_id);
  let element = document.getElementById(image_id);
  element.style.opacity = alpha;
  element.style.filter  = 'alpha(opacity=alpha)'; // IE fallback
}

function createAlphaController(id) {
    console.log("Alpha Controller Created");

    let input = document.createElement('input'); //new Image() :
    input.setAttribute("type", "range");
    input.setAttribute("min", "0");
    input.setAttribute("max", "1");
    input.setAttribute("value", "0.5");
    input.setAttribute("step", "0.01");
    input.setAttribute("onchange", "updateAlpha(this.value, event)");
    input.setAttribute("class", "slider");
    input.setAttribute("id", "alpha" + id);

    document.getElementById("image-controller").appendChild(input);

    let referenceNode = document.querySelector('#alpha'+id);
    let label = document.createElement('p');
    label.innerHTML = id;
    let parentNode = document.getElementById('image-controller');
    referenceNode.parentNode.insertBefore(label, referenceNode);
}

```

## Citations:
All the images are by Mark Weaver - discovered using Google Image Searches. I do not own them. Credit to the Author.
