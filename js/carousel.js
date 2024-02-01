export async function carousel() {
  const d = document,
    $cardsContainer = d.querySelector(".cards-slides"),
    $prevBtn = d.querySelector(".prev-arrow"),
    $nextBtn = d.querySelector(".next-arrow");

  let i = 0;

  d.addEventListener("click", (e) => {
    const $cards = d.querySelectorAll(".card");

    console.log($cards);
    if (e.target === $prevBtn) {
      e.preventDefault();
      $cards[i];
      $cards[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $cards.length - 1;
      }

      $cards[i].classList.add("active");
    }

    if (e.target === $nextBtn) {
      e.preventDefault();

      $cards[i].classList.remove("active");
      i++;

      if (i >= $cards.length) {
        i = 0;
      }

      $cards[i].classList.add("active");
    }
  });
}
