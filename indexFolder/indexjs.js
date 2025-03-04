$(document).ready(function() {
  $("td[id$='Expansion']").click(function() {
      $(this).closest("table").find("tbody[id^='expandableContent']").fadeToggle(1000);
  });
  $("#page-overlay").fadeOut(1500);

  // 2️⃣ Function to fade in elements as they appear in the viewport
  function fadeInOnScroll() {
      $(".fade-in").each(function () {
          var elementTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).height();

          if (elementTop < windowBottom - 50) {
              $(this).css("opacity", 1);
          }
      });
  }

  // Run fade-in on page load
  fadeInOnScroll();

  // Run fade-in on scroll
  $(window).on("scroll", function () {
      fadeInOnScroll();
  });
  
});