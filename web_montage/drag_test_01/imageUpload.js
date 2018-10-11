let numImages = 5;

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
