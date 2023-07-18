/* When the user clicks on a nav-item, scroll to the nav-item content */
let myScroll = document.getElementById("scrollBtn");

function projectFunction() {
  window.scrollTo(0, 1350);
}

function aboutSkillsFunction() {
  window.scrollTo(0, 850);
}

function contactFunction() {
  window.scrollTo(0, 2450);
}

/* When the user scrolls down 500px from the top of the page, show the scroll button */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    myScroll.style.display = "block";
  } else {
    myScroll.style.display = "none";
  }
}

/* When the user clicks on the button, scroll to the top of the page */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Collapse navbar when nav-item is clicked */
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
