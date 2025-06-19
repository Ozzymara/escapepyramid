var titleText = "🏺 Pyramid Escape";
var position = 0;
function scrollTitle() {
  document.title =
    titleText.substring(position) + titleText.substring(0, position);
  position = position + 1;
  if (position > titleText.length) {
    position = 0;
  }
  setTimeout(scrollTitle, 300);
}
scrollTitle();

