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
    // console.log("id", id);

    let input = document.createElement('input'); //new Image() :
    input.setAttribute("type", "range");
    input.setAttribute("min", "0");
    input.setAttribute("max", "1");
    input.setAttribute("value", "0.5");
    input.setAttribute("step", "0.01");
    input.setAttribute("onchange", "updateAlpha(this.value, event)");
    input.setAttribute("class", "slider");
    input.setAttribute("id", "alpha" + id);

    // let image_controller = document.getElementsByClassName('image-controller');
    // image_controller.insertAdjacentHTML('afterbegin', input);
    document.getElementById("image-controller").appendChild(input);

    let referenceNode = document.querySelector('#alpha'+id);
    let label = document.createElement('p');
    label.innerHTML = id;
    let parentNode = document.getElementById('image-controller');
    referenceNode.parentNode.insertBefore(label, referenceNode);

    // ar d1 = document.getElementById('one');
    // d1.insertAdjacentHTML('beforeend', '<div id="two">two</div>');
}
