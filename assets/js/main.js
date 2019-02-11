window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mainNav").style.padding = "12px 0px";
  } else {
    document.getElementById("mainNav").style.padding = "22px 0px";
  }
}