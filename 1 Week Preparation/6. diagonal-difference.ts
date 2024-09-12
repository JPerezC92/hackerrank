function diagonalDifference(arr: number[][]): number {
  let diagonalA = 0;
  let diagonalB = 0;

  const sideIndexLength = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    diagonalA += arr[i][i];
    diagonalB += arr[i][sideIndexLength - i];
  }

  return Math.abs(diagonalA - diagonalB);
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
