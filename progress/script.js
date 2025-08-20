let progress = 0;
let totalPages = 300; // Example: 300 pages in the book
let pagesRead = 0;

function increaseProgress() {
  if (pagesRead < totalPages) {
    pagesRead += 30; // Add 30 pages per click
    progress = Math.min((pagesRead / totalPages) * 100, 100);

    let circle = document.getElementById("progress");
    let percentText = document.getElementById("percent");
    let offset = 440 - (440 * progress) / 100;

    circle.style.strokeDashoffset = offset;
    percentText.innerText = Math.round(progress) + "%";
  }
}
