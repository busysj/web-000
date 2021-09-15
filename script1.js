// const title1 = prompt("What title?");
// title.innerHTML = title1;
// const titlecolor = prompt("What color?");
// title.style.color = titlecolor;

// function handleClick() {
//   title.style.color = "red";
// }
// title.addEventListener("click", handleClick);

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
