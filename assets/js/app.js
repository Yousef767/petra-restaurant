$(function () {
  "use strict";

    $(".menu").on("click", function () {
      $(".wrapper").toggleClass("toggled");
    }),

    $(".toggle-icon").click(function () {
      $(".toggle-icon").removeClass("toggled");
      $(".wrapper").hasClass("toggled")
        ? ($(".wrapper").removeClass("toggled"),
          $(".toggle-icon").removeClass("active"),
          $(".sidebar-wrapper").unbind("hover"))
        : ($(".wrapper").addClass("toggled"),
          $(".toggle-icon").addClass("active"),
          $(".sidebar-wrapper").hover(
            function () {
              $(".wrapper").addClass("sidebar-hovered");
            },
            function () {
              $(".wrapper").removeClass("sidebar-hovered");
            }
          ));
    }),
    $(function () {
      for (
        var e = window.location,
          o = $(".metismenu li a")
            .filter(function () {
              return this.href == e;
            })
            .addClass("")
            .parent()
            .addClass("mm-active");
        o.is("li");

      )
        o = o.parent("").addClass("mm-show").parent("").addClass("mm-active");
    }),
    $(function () {
      $("#menu").metisMenu();
    }),
  function theme8() {
    $("html").attr("class", "color-sidebar sidebarcolor8");
  }
});

let path = window.location.href.split("/");
if (path[3] === "" || path[3].includes("profile")) {
  setTimeout(() => {
    document.getElementById("dashboard").classList.add("mm-active");
  }, 0);
}
if (path[3] === "" || path[3].includes("home")) {
  setTimeout(() => {
    document.getElementById("dashboard").classList.add("mm-active");
  }, 0);
}
if (path[3] === "" || path[3].includes("dashboard")) {
  setTimeout(() => {
    document.getElementById("dashboard").classList.add("mm-active");
  }, 0);
}

