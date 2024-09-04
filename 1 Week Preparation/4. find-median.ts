function findMedian(arr: number[]): number {
  // Write your code here
  return arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
}

findMedian([11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
