const dropBox = document.querySelector(".drop-box");
const inpt1 = document.querySelector(".inpt1");
const imageIcon = document.querySelector(".image-icon");
const Download = document.querySelector(".Download");

if(dropBox){
dropBox.addEventListener("dragover", function (e) {
  e.preventDefault();
  if(!dropBox.classList.contains("dropbox-back")) {
    dropBox.classList.add("dropbox-back");
  }
});

dropBox.addEventListener("dragleave", function (e) {
  e.preventDefault();
  dropBox.classList.remove("dropbox-back");
});

imageIcon.addEventListener("click", function () {
  inpt1.click();
});

}
}
