function merge_sort(arr) {
  sort(arr,0, arr.length-1)
  return arr;
}

function sort(arr, start, end) {
  if(start == end) {
      return
  }
  const mid = Math.floor((start + end)/2);
  sort(arr, start, mid);
  sort(arr, mid + 1, end);
  let i=start;
  let j=mid+1;
  const aux =[];
  while(i<= mid && j<=end) {
      if(arr[i] <= arr[j]){
          aux.push(arr[i]);
          i++;
      } else {
          aux.push(arr[j]);
          j++;
      }
  }
  while(i<=mid) {
      aux.push(arr[i])
      i++;
  }
  while(j<=end){
      aux.push(arr[j])
      j++
  }

  for(let i=0;i<aux.length;i++){
      arr[start + i] = aux[i]
  }
  return;
}