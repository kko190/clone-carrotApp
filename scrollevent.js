$(window).scroll(function () {
  let letter = `<span>글쓰기</span>`;
  if ($(window).scrollTop() > 50) {
    $(".write-banner__btn")
      .css("width", "28px")
      .css("height", "30px")
      .css("border-radius", "30px"),
      $(".write-banner__btn span").eq(1).remove();
  } else {
    $(".write-banner__btn")
      .css("width", "70px")
      .css("height", "25px")
      .css("border-radius", "18px"),
      $(".write-banner__btn").append(letter);
  }
});
