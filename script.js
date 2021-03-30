var req = new XMLHttpRequest();
req.open("GET", "./json/image_list.json");
req.onreadystatechange = function() {
  if (this.readyState == 4) {
    // console.log(this.response);
    var data = JSON.parse(this.response);
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.setAttribute("class", "image");
      div.onclick = function () {
        this.classList.toggle("image-selected");
      }
      div.onmouseover = function() {
        var element = this;
        this.timerId = setTimeout(function() {
          element.classList.add('image-magnified');
        }, 1000);
      };
      div.onmouseout = function() {
        clearTimeout(this.timerld);
        this.classList.remove('image-magnified');
      };
      var img = document.createElement("img");
      img.src = data[i];
      div.appendChild(img);
      document.body.appendChild(div);
    }
  }
}
req.send();

function selectAll(btn) {
  var images = document.getElementsByClassName("image");
  for (var i = 0; i < images.length; i++ ) {
    if (btn.value == "Unselect All") {
      images[i].classList.remove("image-selected");
    } else {
      images[i].classList.add("image-selected");  
    }
  }
  if (btn.value == "Unselect All") {
    btn.value = "Select All";
  } else {
    btn.value = "Unselect All";
  }
}

function slideshow(btn) {
  var images = document.getElementsByClassName('image');
  var index = 0;
  images[index].classList.add('image-magnified');

  var intervalid = setInterval(function() {
    images[index].classList.remove('image-magnified');
    index++;
    if (index < images.length) {
    images[index].classList.add('image-magnified');
  }
  else {
    clearInterval(intervalid);
  }
}, 2000);
}