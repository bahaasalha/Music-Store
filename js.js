var media = document.querySelector("#myVideo");
var check = document.querySelector("#check");
// Playing event
media.addEventListener("ended", function () {
  check.checked = true;
});
