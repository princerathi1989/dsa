function heap_sort(arr) {
  const n = arr.length;

// Build max heap
for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
  heapify(arr, n, i);
}

// One by one extract elements
for (let i = n - 1; i > 0; i--) {
  [arr[0], arr[i]] = [arr[i], arr[0]];  // swap
  heapify(arr, i, 0);
}

return arr;
}

function heapify(arr, heapSize, rootIndex) {
let largest = rootIndex;
const left = 2 * rootIndex + 1;
const right = 2 * rootIndex + 2;

if (left < heapSize && arr[left] > arr[largest]) {
  largest = left;
}

if (right < heapSize && arr[right] > arr[largest]) {
  largest = right;
}

if (largest !== rootIndex) {
  [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]]; // swap
  heapify(arr, heapSize, largest);
}
}