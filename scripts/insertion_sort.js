async function insertionSort() {
  let bars = document.querySelectorAll(".array-bar");

  for (let i = 1; i < bars.length; i++) {
    let key = parseInt(bars[i].style.height);
    let j = i - 1;

    bars[i].style.backgroundColor = "red";
    await sleep(speed);

    while (j >= 0 && parseInt(bars[j].style.height) > key) {
      bars[j + 1].style.height = bars[j].style.height;
      bars[j].style.backgroundColor = "yellow";
      j--;
      await sleep(speed);
    }

    bars[j + 1].style.height = `${key}px`;
    bars[i].style.backgroundColor = "green";
  }

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "green";
  }
}
