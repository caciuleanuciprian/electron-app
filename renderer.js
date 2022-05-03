function a(element) {
  var count = 0; // declaring "count" here makes the variable globally available

  function lemath() {
    count++;
    var stuff = element;
    stuff.innerHTML = "stuff: " + count;
  }

  function begin() {
    lemath();
    setTimeout(begin, 0, window);
  }

  document.addEventListener("DOMContentLoaded", function () {
    begin();
  });
}

for (let i = 1; i <= 100; i++) {
  a(document.getElementById(`infinite${i}`));
}

// a(document.getElementById("infinite1"));
// a(document.getElementById("infinite2"));
// a(document.getElementById("infinite3"));
// a(document.getElementById("infinite4"));
// a(document.getElementById("infinite5"));
// a(document.getElementById("infinite6"));
// a(document.getElementById("infinite7"));
// a(document.getElementById("infinite8"));
// a(document.getElementById("infinite9"));
// a(document.getElementById("infinite10"));
// a(document.getElementById("infinite11"));
// a(document.getElementById("infinite12"));
// a(document.getElementById("infinite13"));
// a(document.getElementById("infinite14"));
// a(document.getElementById("infinite15"));
// a(document.getElementById("infinite16"));
// a(document.getElementById("infinite17"));
// a(document.getElementById("infinite18"));
// a(document.getElementById("infinite19"));
// a(document.getElementById("infinite20"));
