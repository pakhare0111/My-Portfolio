function toggleContent() {
  const dots = document.getElementById("dots");
  const more = document.getElementById("more");
  const viewMoreLink = document.getElementById("viewMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    viewMoreLink.textContent = "View More";
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    viewMoreLink.textContent = "View Less";
  }
}
