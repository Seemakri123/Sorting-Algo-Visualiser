async function selectionSort() {
  let bars = document.querySelectorAll(".array-bar");

  for (let i = 0; i < bars.length; i++) {
    let minIdx = i;
    bars[minIdx].style.backgroundColor = "red";

    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.backgroundColor = "yellow";
      await sleep(speed);

      if (parseInt(bars[j].style.height) < parseInt(bars[minIdx].style.height)) {
        bars[minIdx].style.backgroundColor = "white";
        minIdx = j;
        bars[minIdx].style.backgroundColor = "red";
      } else {
        bars[j].style.backgroundColor = "white";
      }
    }

    swap(bars[i], bars[minIdx]);
    bars[minIdx].style.backgroundColor = "white";
    bars[i].style.backgroundColor = "green";
  }
}
