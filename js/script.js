
const myImage = document.querySelector(".Myimage");

if (myImage == null) {
  console.log("Nope")
}

var imageArray = ["images/car1.jpg", "images/car2.jpg", "images/car3.jpg"];
var imageIndex = 1;

function changeImageNext() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex >= imageArray.length){
    imageIndex = 0;
  }
}

function changeImagePrev() {
  imageIndex--;
  if (imageIndex < 0){
    imageIndex = imageArray.length - 1;
  }
  myImage.setAttribute("src", imageArray[imageIndex]);
}