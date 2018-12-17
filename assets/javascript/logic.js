$("#toggle-about-basic").on("click", function() {
  console.log("click")
  if ($(this).attr("state") === "open") {
    $(this).attr("state", "closed");
    $("#about-basic").attr("style", "animation-name: close; animation-duration: 2s; -webkit-animation-fill-mode: forwards;");
    $("#toggle-about-basic i").attr("style", "animation-name: flip-down; animation-duration: 2s; -webkit-animation-fill-mode: forwards;")
    $("#toggle-about-basic span").attr("style", "animation-name: fade-out; animation-duration: 1s; -webkit-animation-fill-mode: forwards;")
    setTimeout(() => {
      $("#toggle-about-basic span").text("Show More");
      $("#toggle-about-basic span").attr("style", "animation-name: fade-in; animation-duration: 1s; -webkit-animation-fill-mode: forwards;")
    }, 1000);
  }
  else {
    $(this).attr("state", "open");
    $("#about-basic").attr("style", "animation-name: open; animation-duration: 2s; -webkit-animation-fill-mode: forwards;");
    $("#toggle-about-basic i").attr("style", "animation-name: flip-up; animation-duration: 2s; -webkit-animation-fill-mode: forwards;")
    $("#toggle-about-basic span").attr("style", "animation-name: fade-out; animation-duration: 1s; -webkit-animation-fill-mode: forwards;")
    setTimeout(() => {
      $("#toggle-about-basic span").text("Show Less");
      $("#toggle-about-basic span").attr("style", "animation-name: fade-in; animation-duration: 1s; -webkit-animation-fill-mode: forwards;")
    }, 1000);
  }
});
