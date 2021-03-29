function setScrollSize(){

  var vBannerImage = document.getElementById("top-banner");
  var vHeight = vBannerImage.height;
  var vScrollHeight = window.innerHeight - vHeight - 75.0;

  var vNavimg = document.getElementsByClassName("midpanel");

  for(var i=0;i<vNavimg.length;i++){
      vNavimg[i].style.height = vScrollHeight+"px";
  }
}

window.addEventListener("resize", setScrollSize);
setScrollSize();

$('.dropdown-submenu > a').on("click", function(e) {
  var submenu = $(this);
  $('.dropdown-submenu .dropdown-menu').removeClass('show');
  submenu.next('.dropdown-menu').addClass('show');
  e.stopPropagation();
});

$('.dropdown').on("hidden.bs.dropdown", function() {
  // hide any open menus when parent closes
  $('.dropdown-menu.show').removeClass('show');
});
