$(document).ready(function () {
  "use strict";

  // Sticky Menu
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 200) {
      $(".navbar").addClass("fixed-top");
    } else if ($(this).scrollTop() == 0) {
      $(".navbar").removeClass("fixed-top");
    }
  });

  // Scroll back to top
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#eb4a4a ${scrollValue}%, #171f38 ${scrollValue}%)`;
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  // Hamburger Menu Trigger
  const trigger = document.getElementById("js-nav-trigger");
  trigger.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      trigger.classList.toggle("is-active");
    },
    false
  );

  // Add smooth scrolling to all links
  $(".navbar-nav .nav-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("value")).offset().top - 89,
      },
      100
    );
  });

  // kursor
  new kursor({
    type: 1,
    color: "#eb4a4a",
  });

  // mixitup
  var containerEl = document.querySelector(".auction-filter");
  var mixer = mixitup(containerEl);
});
