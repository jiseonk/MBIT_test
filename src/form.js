function scrollDown() {
  const vheight = $(".test").height();
  $("html, body").animate(
    {
      scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight,
    },
    500
  );
}

function scrollUp() {
  const vheight = $(".test").height();
  $("html, body").animate(
    {
      scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight,
    },
    500
  );
}

$(function () {
  $(".next_btn").click(function (e) {
    e.preventDefault();
    scrollDown();
  });

  $(".prev_btn").click(function (e) {
    e.preventDefault();
    scrollUp();
  });
});
