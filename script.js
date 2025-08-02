let noClicks = 0;
const noBtn = document.getElementById("noBtn");

function handleYes() {
  document.body.innerHTML = `
    <h1>Yay! Cutie said YES! 😻</h1>
    <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" class="cat" />
  `;
}

function handleNo() {
  noClicks++;

  if (noClicks === 1) {
    alert("Are you sure cutu? might regret this 😢");
  } else if (noClicks === 2) {
    alert("Think again... what if it’s the best decision ever? 😀");
  } else if (noClicks === 3) {
    alert("This could be your cutest memory 💖");
  } else if (noClicks === 4) {
    alert("Final chance... I will be sad 😿");
  } else if (noClicks >= 5) {
    makeButtonRunAway();
  }
}

function makeButtonRunAway() {
  noBtn.classList.add("runaway");

  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    // Mobile: teleport on touch
    noBtn.addEventListener("touchstart", (e) => {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 50);
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });
  } else {
    // Desktop: avoid mouse
    document.addEventListener("mousemove", (e) => {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 50);
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });
  }
}
