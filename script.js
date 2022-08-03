const images = document.querySelector(".images");
const btnSliders = document.querySelector(".btm-sliders");
const imgContents = [
  "https://gxy-life.com/images/blog/202102/4 (3).JPG",
  "https://gxy-life.com/images/blog/202102/1h_01.JPG",
  "https://gxy-life.com/images/blog/202103/4 (5).JPG",
  "https://gxy-life.com/images/blog/202103/4 (11).JPG",
  "https://gxy-life.com/images/blog/202103/5 (9).JPG",
  "https://gxy-life.com/images/blog/202104/3 (3).JPG",
  "https://gxy-life.com/images/blog/202104/4 (4).JPG",
  "https://gxy-life.com/images/blog/202101/4 (10).JPG",
  "https://gxy-life.com/images/blog/202108/4%20(2).JPG",
  "https://gxy-life.com/images/blog/202107/2%20(3).JPG",
  "https://gxy-life.com/images/blog/202102/3%20(2).JPG",
  "https://gxy-life.com/images/blog/202103/4%20(6).JPG",
  "https://gxy-life.com/images/blog/202108/5.jpg",
];

function random(array, num) {
  var a = array;
  var t = [];
  var r = [];
  var l = a.length;
  var n = num < l ? num : l;
  while (n-- > 0) {
    var i = (Math.random() * l) | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
  }
  return r;
}

const shuffledImg = random(imgContents, 8);

for (let i = 0; i < shuffledImg.length; i++) {
  const element = shuffledImg[i];
  const imgTag = document.createElement("img");
  const spanTag = document.createElement("span");
  if (i === 0) {
    imgTag.classList.add("active");
  } else if (i === 1) {
    imgTag.classList.add("next");
  }
  imgTag.src = element;
  imgTag.classList.add("img");
  images.appendChild(imgTag);
  spanTag.setAttribute("onclick", `btm_slide(${i + 1})`);
  btnSliders.appendChild(spanTag);
}

const img = document.querySelectorAll(".slider .images img");
const sliders = document.querySelectorAll(".btm-sliders span");

let index = 2;

function btm_slide(e) {
  slider((index = e));
}
function side_slide(e) {
  slider((index += e));
}
function slider(e) {
  img.forEach((element) => {
    element.classList.remove("next");
    element.classList.remove("active");
  });
  if (e > img.length) {
    index = 1;
  }
  if (index > img.length) {
    index = 1;
  }
  if (e < 1) {
    index = img.length;
  }
  if (index < 1) {
    index = img.length;
  }
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.background = "rgba(255, 255, 255, 0.1)";
  }
  if (index < img.length) {
    img[index - 1].classList.add("active");
    img[index].classList.add("next");
    sliders[index - 1].style.background = "rgba(255, 255, 255, 0.8)";
  }
  if (index == img.length) {
    img[index - 1].classList.add("active");
    sliders[index - 1].style.background = "rgba(255, 255, 255, 0.8)";
    img[0].classList.add("next");
  }
  index++;
}
setInterval(slider, 3000);
