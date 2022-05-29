let aricalsSection = document.querySelector("#articalsSection"),
  searchIcon = document.querySelector("#searchIcon"),
  inputSearch = document.querySelector("#inputSearch"),
  startBtn = document.querySelector(".search-bar button");

// Make Pretty Show On Scroll
window.addEventListener("scroll", () =>
  window.pageYOffset >= 400
    ? aricalsSection.classList.add("fade")
    : aricalsSection.classList.remove("fade")
);

// To Appear The Input Search And Hide The Btotton For The Search
searchIcon.addEventListener("click", () => {
  inputSearch.style.width = "70%";
  startBtn.style.opacity = "0";

  inputSearch.click();
});

// Hide The Input Search And On Blur
inputSearch.addEventListener("blur", () => {
  inputSearch.style.width = "0";
  setTimeout(() => (startBtn.style.opacity = "1"), 500);
});
