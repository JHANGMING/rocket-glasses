$(document).ready(() => {
  $(".ham-icon").click(function (e) {
    e.preventDefault();
    $(".ham-meau").toggleClass("display");
    $(".ham").toggleClass("display");
    $(".close").toggleClass("display");
  });
});