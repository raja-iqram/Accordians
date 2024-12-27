let toggles = document.querySelectorAll(".toggle-item");

toggles.forEach((item) => {
  let title = item.querySelector(".toggle-head");
  let content = item.querySelector(".toggle-body");

  title.addEventListener("click", (e) => {
    content.classList.toggle("toggle-active");
  });
});
