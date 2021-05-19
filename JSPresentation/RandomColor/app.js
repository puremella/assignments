const button = document.querySelector("button");
const div = document.querySelector("div");
button.addEventListener("click", function () {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  div.innerText = newColor;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`; //string template literals
};
