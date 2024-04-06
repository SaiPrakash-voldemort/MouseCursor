let container = document.querySelector(".container");
let crsr = document.querySelector(".cursor");
let crsr1 = document.querySelector(".cursor1");
let crsr2 = document.querySelector(".cursor2");
let crsr3 = document.querySelector(".cursor3");
let crsr4 = document.querySelector(".cursor4");
container.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});
