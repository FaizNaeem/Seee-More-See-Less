// function myFunction() {
//   // let get = document.getElementById("get").value;
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }
function add() {
  var text = document.getElementById("text").value;
  var output = document.getElementById("output");
  if (text.length <= 10) {
    output.innerHTML = "<p>" + text + "</p>";
  } else {
    output.innerHTML =
      `<p >${text.slice(0, 10)}...</p>` +
      ` <button id="btn" onclick="read()">Read More</button>`;
  }
}

function read() {
  var output = document.getElementById("output");
  var text = document.getElementById("text").value;
  var btn = document.getElementById("btn");
  btn.innerText = "Read Less";
  output.innerHTML = `<p>${text}</p><button onclick="showLess()">Show Less</button>`;
}

function showLess() {
  var output = document.getElementById("output");
  var text = document.getElementById("text").value;
  output.innerHTML =
    "<p>" +
    text.slice(0, 10) +
    "....</p>" +
    `<button id="btn" onclick="read()">Read More</button>`;
}