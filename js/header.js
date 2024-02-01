export default function header() {
  const $header = document.querySelector("header");

  window.addEventListener("scroll", (e) => {
    // console.log(window.scrollY);
    if (window.scrollY > 740) {
      $header.classList.add("header-scroll");
    } else {
      $header.classList.remove("header-scroll");
    }
  });
}
