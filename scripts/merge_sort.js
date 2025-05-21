async function mergeSort(start = 0, end = array.length - 1) {
  if (start >= end) return;

  let mid = Math.floor((start + end) / 2);
  await mergeSort(start, mid);
  await mergeSort(mid + 1, end);
  await merge(start, mid, end);
}

async function merge(start, mid, end) {
  let bars = document.querySelectorAll(".array-bar");
  let left = array.slice(start, mid + 1);
  let right = array.slice(mid + 1, end + 1);

  let i = 0, j = 0, k = start;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k] = left[i];
      bars[k].style.height = `${left[i] * 3}px`;
      i++;
    } else {
      array[k] = right[j];
      bars[k].style.height = `${right[j] * 3}px`;
      j++;
    }
    bars[k].style.backgroundColor = "green";
    await sleep(speed);
    k++;
  }

  while (i < left.length) {
    array[k] = left[i];
    bars[k].style.height = `${left[i] * 3}px`;
    bars[k].style.backgroundColor = "green";
    await sleep(speed);
    i++; k++;
  }

  while (j < right.length) {
    array[k] = right[j];
    bars[k].style.height = `${right[j] * 3}px`;
    bars[k].style.backgroundColor = "green";
    await sleep(speed);
    j++; k++;
  }
}
