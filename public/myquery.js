$(document).ready(function () {
  let data2;
  let res1;
  let res2;
  let uuid;
  let uuid2;
  let size;
  $(".inpt1").change(function (e) {
    data2 = $(".inpt1").prop("files");
    myFunction(data2);
  }),
    $(".drop-box").on("drop", function (e) {
      e.preventDefault();
      let files = e.originalEvent.dataTransfer.files;
      $(".drop-box").removeClass("dropbox-back");
      if (files.length) {
        $(".inpt1").prop({ files: e.originalEvent.dataTransfer.files });
        data2 = $(".inpt1").prop("files");
      }

      myFunction(data2);
    });

  let myFunction = function (data) {
    let files = data[0];
    const formdata = new FormData();
    formdata.append("myfile", files);
    $.ajax({
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener(
          "progress",
          function (evt) {
            if (evt.lengthComputable) {
              var percentComplete = (evt.loaded / evt.total) * 100;
              $(".progress-bar").show(function(){
                $(".progress-bar").width(percentComplete + '%');
                $(".progress-bar").css('padding','15px');
                $(".progress-bar").html(percentComplete+'%');
                // Place upload progress bar visibility code here
              });
            }
          },
          false
        );
        return xhr;
      },
      url: "/api/single", // Url of backend (can be python, php, etc..)
      type: "POST", // data type (can be get, post, put, delete)
      data: formdata, // data in json format
      processData: false, //add this
      contentType: false, //and this
      success: function (response, textStatus, jqXHR) {
        res1 = response.file;
        res2 = response.file2;
        console.log(res2);
        if(response){
          $(".progress-bar").hide();
          $(".Download").show();
          $("#myInput").show(function(){
            $(this).val(res2);
          });
        $("p").show();
        }
      },
      error: function (err) {
        console.log(err);
      },
    }),
    $(".Download").click(function(){
       uuid = res1.substring(res1.lastIndexOf('/') + 1) || uuid2;
       apiDownload(uuid);
    })
  }

  let apiDownload = function(uuid){
    $.ajax({
      url: `/files/${uuid}`,
      type:"GET",
      xhrFields: {
        responseType: 'blob'
    },
      success:function(response, status, xhr){
        let fileName = xhr.getResponseHeader('Content-Disposition').split("=")[1];
        let a = document.createElement("a");
        let download = document.createAttribute("download");
        a.href = URL.createObjectURL(response);
        download.value = fileName.replace(/['"]+/g, '');
        a.setAttributeNode(download);
        a.click();
        console.log(response, xhr.getResponseHeader('Content-Disposition'), jQuery.type(xhr.getResponseHeader("content-length")));
        $("h3").append("<p>");
        $("p").innerHtML(`size ${xhr.getResponseHeader("content-length")}`);
      },
      error: function(err){
        console.log(err + " error");
      }
    })
  }

  $(".DownloadBTn").click(function(){
    var currentUrl = window.location.href.split("/");
    $("h3").html("Thank your for using TrueShare");
    apiDownload(currentUrl[currentUrl.length-1]);
  })
});
