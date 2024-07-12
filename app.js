"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var e = document.querySelector(".header__burger"),
    t = document.querySelector(".header__burger-cls"),
    n = document.querySelector(".header__burger-menu"),
    c = document.getElementById("message"),
    o = document.querySelectorAll(".header__link"),
    r = document.querySelectorAll(".faq__item h3");
  c && (c.innerText = ""),
    e.addEventListener("click", function () {
      n.classList.add("burger-active"),
        (document.body.style.overflowY = "hidden");
    }),
    t.addEventListener("click", function () {
      n.classList.remove("burger-active"),
        (document.body.style.overflowY = "auto");
    }),
    o.forEach(function (e) {
      e.addEventListener("click", function (e) {
        n.classList.remove("burger-active"),
          (document.body.style.overflowY = "auto");
      });
    }),
    r.forEach(function (e) {
      e.addEventListener("click", function (t) {
        var n, c;
        t.preventDefault(),
          (c = (n = e).nextElementSibling),
          (n.classList = n.classList.contains("open") ? "" : "open"),
          (c.classList = c.classList.contains("open") ? "close" : "open");
      });
    });
});
