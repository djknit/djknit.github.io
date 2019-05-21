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

$("a").on('click', function() {
  setTimeout(function() { $(this).blur() }, 700);
});

// show side nav when header scrolled far away from header
$(window).scroll(function() {
  const yOffset = window.pageYOffset;
  const sideNavMenu = $("#side-nav-menu");
  if (yOffset > 500) {
    if (sideNavMenu.attr("state") === "hide") {
      sideNavMenu.attr("state", "show");
      $("#side-nav-menu > nav").attr("style", null);
    }
  }
  else {
    if (sideNavMenu.attr("state") === "show") {
      sideNavMenu.attr("state", "hide");
      $("#side-nav-menu > nav").attr("style", null);
    }
  }
});

// open/close side nav menu
$("#side-nav-toggle").on("click", function() {
  if ($(this).attr("state") === "open") {
    $(this).attr("state", "closed");
    $("#side-nav-menu > nav").attr("style", "animation-name: close-side; animation-duration: 1s; -webkit-animation-fill-mode: forwards;");
    $("#side-nav-menu > nav").attr("state", "closed");
  }
  else {
    $(this).attr("state", "open");
    $("#side-nav-menu > nav").attr("style", "animation-name: open-side; animation-duration: 1s; -webkit-animation-fill-mode: forwards;");
    $("#side-nav-menu > nav").attr("state", "open");
  }
});