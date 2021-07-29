window.addEventListener("scroll", function () {
  let header = document.getElementById("header");
  header.classList.toggle("sticky", window.scrollY > 1);
});

