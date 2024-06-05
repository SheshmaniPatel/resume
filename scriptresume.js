// going on target-section by scrolling function

var navigationtab = document.querySelectorAll(".nav-menu-bar a");
var interval;

for (var i = 0; i < navigationtab.length - 1; i++) {
  navigationtab[i].addEventListener("click", function (event) {
    event.preventDefault();
    var navId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(navId);
    console.log(targetSection);
    interval = setInterval(scrollverticalli, 10, targetSection);
  });
}

function scrollverticalli(targetSection) {
  var targtposition = targetSection.getBoundingClientRect();
  if (targtposition.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}

// Skill-Bar filling

var progressBars = document.querySelectorAll(".Skill-progress>div");
var skillsContainer = document.getElementById("skill-container");
window.addEventListener("scroll", checkScroll);
var checkArrivle = false;

function initialBars() {
  for (let bar of progressBars) {
    bar.style.width = 0 + "%";
  }
}

initialBars();

function fillBars() {
  for (let bar of progressBars) {
    let targetWidth = bar.getAttribute("data-bar-value");
    let currentWidth = 0;

    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 15);
  }
}

function checkScroll() {
  var coordinateTop = skillsContainer.getBoundingClientRect();
  if (!checkArrivle && coordinateTop.top <= window.innerHeight) {
    checkArrivle = true;

    fillBars();
  } else if (coordinateTop.top > window.innerHeight) {
    checkArrivle = false;
    initialBars();
  }
}
