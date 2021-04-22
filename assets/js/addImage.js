function addImage(src, width, height, classes, parent, isFirst) {
  //Je crée mon Image
  const image = document.createElement("img");

  image.src = src;
  image.width = width;
  image.height = height;

  for (let i = 0; i < classes.length; i++) {
    image.classList.add(classes[i]);
  }

  if (isFirst) {
    parent.insertBefore(image, parent.firstChild);
  } else {
    parent.appendChild(image);
  }
}
let mybody = document.querySelector("body");
addImage("assets/images/as.jpg", 100, 100, [], mybody, false);
