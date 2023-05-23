document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more");
  const readLessButtons = document.querySelectorAll(".read-less");
  const hidden = document.querySelectorAll(".hidden");

  readMoreButtons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const hiddenContent =
        this.previousElementSibling.querySelector(".hidden");
      hiddenContent.style.display = "inline";
      this.style.display = "none";
      readLessButtons[index].style.display = "inline";
    });
  });

  readLessButtons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      //   const hiddenContent = this.previousElementSibling;
      hidden.forEach(function (hid) {
        hid.style.display = "none";
      });
      this.style.display = "none";
      readMoreButtons[index].style.display = "inline";
    });
  });
});
