const nth_most_rarest_item = (list,n) => {
  const counts = {};

  for (const num of list) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  const sorted = Object.entries(counts).sort((a, b) => a[1] - b[1]);
  const nthRarestElement = sorted[n - 1][0];

  return nthRarestElement;
}

console.log(nth_most_rarest_item([5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 2, 1, 5], 2)); // 2
console.log(nth_most_rarest_item([5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 2, 2, 2, 1, 5], 2)); // 3
