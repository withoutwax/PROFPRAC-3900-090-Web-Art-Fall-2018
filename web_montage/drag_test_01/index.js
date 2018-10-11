let numImages = 5;

// for (let i = 1; i < numImages; i++) {
//   dragElement(document.getElementById("image0"+i.toString()));
//   // dragElement(document.getElementById("image02"));
//   // dragElement(document.getElementById("image03"));
//   // dragElement(document.getElementById("image04"));
//   // dragElement(document.getElementById("image05"));
// }

function dragElement(elmnt) {
  elmnt = document.getElementById(event.target.id);
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  // if (document.getElementById(elmnt.id + "header")) {
  //   /* if present, the header is where you move the DIV from:*/
  //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  // } else {
  //   /* otherwise, move the DIV from anywhere inside the DIV:*/
  //   elmnt.onmousedown = dragMouseDown;
  // }

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

let imageUpload = function(event) {
  // console.log('numImages', numImages);
  console.log("image is uploaded");
  console.log("event", event);
  console.log("files_array(images array)", event.target.files);

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
// function myFunction() {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", "img_pulpit.jpg");
//     x.setAttribute("width", "304");
//     x.setAttribute("height", "228");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.body.appendChild(x);
// }
// var loadFile = function(event) {
// 	var image = document.getElementById('output');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// };
