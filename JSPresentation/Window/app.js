function openResized() {
  open(
    "http://www.google.com",
    "_blank",
    "top=100, left=200, height=400, width=900, toolbar=no"
  );
}

const alert = () => {
  window.alert("hello World");
};

const confirmWindow = () => {
  if (window.confirm("Do you really want to leave?")) {
    window.open("index.html", "Thanks for Visiting!");
  }
};

const timeOutWindow = () => {
  window.setTimeout(window.alert, 2 * 1000, "That was really slow!");
};
