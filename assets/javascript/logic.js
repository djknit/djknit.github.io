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

// show side nav when scrolled far away from header
setTimeout(setSideMenuState, 700);
$(window).scroll(setSideMenuState);

function setSideMenuState() {
  const sideNavMenu = $("#side-nav-menu");
  // remove animation so it doesn't replay
  $("#side-nav-menu > nav").attr("style", null);
  // Mark side nav when user scrolls past the point when the picture
  // at the top of the About Section is just off top of window. (To avoid overlap of menu w/ picture)
  // This depends on screen width, so the menu is marked when it passes
  // each of the different points at which the picture is just off the
  // top of the window for some screen sizes.
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
  const sideNav = $("#side-nav-menu > nav");
  if ($(this).attr("state") === "open") {
    $(this).attr("state", "closed");
    sideNav.attr("style", "animation-name: close-side; animation-duration: 1s; -webkit-animation-fill-mode: forwards;");
    sideNav.attr("state", "closed");
    $("#side-nav-toggle").attr("title", "Open navigation menu");
  }
  else {
    $(this).attr("state", "open");
    sideNav.attr("style", "animation-name: open-side; animation-duration: 1s; -webkit-animation-fill-mode: forwards;");
    sideNav.attr("state", "open");
    $("#side-nav-toggle").attr("title", "Close navigation menu");
  }
});