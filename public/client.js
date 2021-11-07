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


const DownloadBTn = document.querySelector(".DownloadBTn");
if(DownloadBTn){
DownloadBTn.addEventListener("click", function(){
    var currentUrl = window.location.href.split("/");
    console.log(currentUrl[currentUrl.length-1], "yes");
    if(Download){
      Download.click();
    }
    
});
}