const btn = document.getElementById("btn");
let imgsArr = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

const call = () => {
  let randomImg = Math.floor(Math.random() * imgsArr.length);
  let randomSrc = (document.querySelector(".img1").src = imgsArr[randomImg]);

  let randomImg2 = Math.floor(Math.random() * imgsArr.length);
  let randomSrc2 = (document.querySelector(".img2").src = imgsArr[randomImg2]);

  if (randomImg > randomImg2) {
    document.querySelector("h1").textContent = "Selen Kazandı!";
  } else if (randomImg < randomImg2) {
    document.querySelector("h1").textContent = "Pürmüz Kazandı!";
  } else {
    document.querySelector("h1").textContent = "Eşitlik!";
  }
};

btn.addEventListener("click", call);
