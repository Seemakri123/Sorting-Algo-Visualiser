function swap(bar1, bar2) {
  let temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
