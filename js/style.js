const header = $('.header_wrapper');

$('a[href^="#"]').on('click', function() {
  const gap = header.outerHeight();
  const speed = 500;
  const href = $(this).attr("href");
  const target = $(href == "#" || href == "" ? "html" : href);
  const position = target.offset().top - gap;
  
  $("html, body").animate({ scrollTop: position }, speed, "swing");
  return false;
});



$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});