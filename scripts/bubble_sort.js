async function bubbleSort() {
  let bars = document.querySelectorAll(".array-bar");

  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      await sleep(speed);

      let height1 = parseInt(bars[j].style.height);
      let height2 = parseInt(bars[j + 1].style.height);

      if (height1 > height2) {
        swap(bars[j], bars[j + 1]);
      }

      bars[j].style.backgroundColor = "white";
      bars[j + 1].style.backgroundColor = "white";
    }
    bars[bars.length - i - 1].style.backgroundColor = "green";
  }
  bars[0].style.backgroundColor = "green";
}
