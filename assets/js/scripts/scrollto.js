import $ from "jquery";

export function scrollto() {
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  
  // Fade out before follow href
  
  $(function(){
    $('a[href]').click(function(){
      event.preventDefault();
      var url = $(this).attr('href');
      $('body').addClass('disappear');
      setTimeout(() => {
        window.location = url;
      }, 1000);
    });
  });
  
}