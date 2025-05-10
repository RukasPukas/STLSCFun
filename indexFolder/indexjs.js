$(document).ready(function() {
  $("td[id$='Expansion']").click(function() {
      $(this).closest("table").find("tbody[id^='expandableContent']").fadeToggle(1000);
  });

  
});