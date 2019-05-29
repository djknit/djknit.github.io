// open/close about section
$("#toggle-about-basic").on("click", function() {
  if ($(this).attr("state") === "open") {
    $(this).attr("state", "closed");
    $("#about-basic").attr("style", "animation-name: close; animation-duration: 2s; -webkit-animation-fill-mode: forwards;");
    $("#toggle-about-basic i").attr("style", "animation-name: flip-down; animation-duration: 2s; -webkit-animation-fill-mode: forwards;")
    $("#toggle-about-basic span").attr("style", "animation-name: fade-out; animation-duration: 1s; -webkit-animation-fill-mode: forwards;")
    setTimeout(function() {
      $("#toggle-about-basic span").text("Show More");
      $("#toggle-about-basic span").attr("style", "animation-name: fade-in; animation-duration: 1s; -webkit-animation-fill-mode: forwards;")
    }, 1000);
  }
  else {
    $(this).attr("state", "open");
    $("#about-basic").attr("style", "animation-name: open; animation-duration: 2s; -webkit-animation-fill-mode: forwards;");
    $("#toggle-about-basic i").attr("style", "animation-name: flip-up; animation-duration: 2s; -webkit-animation-fill-mode: forwards;")
    $("#toggle-about-basic span").attr("style", "animation-name: fade-out; animation-duration: 1s; -webkit-animation-fill-mode: forwards;")
    setTimeout(function() {
      $("#toggle-about-basic span").text("Show Less");
      $("#toggle-about-basic span").attr("style", "animation-name: fade-in; animation-duration: 1s; -webkit-animation-fill-mode: forwards;")
    }, 1000);
  }
});

// contact method hover logo heartbeat effect
$(".contact-method").hover(
  function() {
    $(this).children("img, span").addClass("heartbeat");
  },
  function() {
    $(this).children("img, span").removeClass("heartbeat");
  }
);

// show side nav when header scrolled far away from header
setTimeout(setSideMenuState, 700);
$(window).scroll(setSideMenuState);

function setSideMenuState() {
  const sideNavMenu = $("#side-nav-menu");
  if (window.pageYOffset < 284) {
    sideNavMenu.attr("state", "hide");
  }
  else if (window.pageYOffset < 330) {
    sideNavMenu.attr("state", "hide-768");
  }
  else if (window.pageYOffset < 443) {
    sideNavMenu.attr("state", "hide-552");
  }
  else if (window.pageYOffset < 523) {
    sideNavMenu.attr("state", "hide-381");
  }
  else {
    sideNavMenu.attr("state", "show");
  }
}

// open/close side nav menu
$("#side-nav-toggle").on("click", function() {
  if ($(this).attr("state") === "open") {
    $(this).attr("state", "closed");
    $("#side-nav-menu > nav").attr("style", "animation-name: close-side; animation-duration: 1s; -webkit-animation-fill-mode: forwards;");
    $("#side-nav-menu > nav").attr("state", "closed");
    $("#side-nav-toggle").attr("title", "Open navigation menu");
  }
  else {
    $(this).attr("state", "open");
    $("#side-nav-menu > nav").attr("style", "animation-name: open-side; animation-duration: 1s; -webkit-animation-fill-mode: forwards;");
    $("#side-nav-menu > nav").attr("state", "open");
    $("#side-nav-toggle").attr("title", "Close navigation menu");
  }
});