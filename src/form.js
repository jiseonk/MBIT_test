function scrollDown() {
  const vheight = $(".test").height();

  $("html, body").animate(
    {
      scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight,
    },
    500
  );
}

$(function () {
  $(".next_btn").click(function (e) {
    e.preventDefault();
    scrollDown();
  });
});
