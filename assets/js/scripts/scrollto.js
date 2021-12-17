import $ from "jquery";

export function scrollto() {
  $(document).on('click', 'a[href^="#"]:not([target="_blank"])', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  
  $(document).on('click', 'a.team', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  
  $("a.team").on({
      mouseenter: function () {
        $(this).addClass("hovered");
      },
      mouseleave: function () {
        $(this).removeClass("hovered");
      }
  });

  // Fade out before follow href
  
  $(function(){
    $('a[href]:not([target="_blank"])').click(function(){
      event.preventDefault();
      var url = $(this).attr('href');
      $('body').addClass('disappear');
      setTimeout(() => {
        window.location = url;
      }, 1000);
    });
  });
  
}