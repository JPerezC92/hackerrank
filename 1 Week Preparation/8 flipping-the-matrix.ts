function flippingMatrix(matrix: number[][]): number {
  // Write your code here
  let sumValue = 0;

  let flippedMatrix: number[][] = matrix.map((y) => y.map((x) => x));

  for (let rowIdx = 0; rowIdx < flippedMatrix.length / 2; rowIdx++) {
    const colLength = matrix.length - 1;

    for (let colIdx = 0; colIdx < flippedMatrix[rowIdx].length / 2; colIdx++) {
      const rowLength = flippedMatrix[rowIdx].length - 1;

      const cuadrantA = flippedMatrix[rowIdx][colIdx];
      const cuadrantB = flippedMatrix[rowIdx][rowLength - colIdx];
      const cuadrantC = flippedMatrix[colLength - rowIdx][colIdx];
      const cuadrantD = flippedMatrix[colLength - rowIdx][rowLength - colIdx];
      console.log(cuadrantA, cuadrantB, cuadrantC, cuadrantD);
      if (
        cuadrantA >= cuadrantB &&
        cuadrantA >= cuadrantC &&
        cuadrantA >= cuadrantD
      ) {
        sumValue += cuadrantA;
        // continue;
      } else if (
        cuadrantB >= cuadrantA &&
        cuadrantB >= cuadrantC &&
        cuadrantB >= cuadrantD
      ) {
        sumValue += cuadrantB;
      } else if (
        cuadrantC >= cuadrantA &&
        cuadrantC >= cuadrantB &&
        cuadrantC >= cuadrantD
      ) {
        sumValue += cuadrantC;
      } else if (
        cuadrantD >= cuadrantA &&
        cuadrantD >= cuadrantB &&
        cuadrantD >= cuadrantC
      ) {
        sumValue += cuadrantD;
      }
    }
  }

  return sumValue;
}

// flippingMatrix([
//   [162, 42, 830, 119],
//   [56, 125, 56, 49],
//   [15, 80, 151, 43],
//   [62, 98, 114, 118],
// ]);
flippingMatrix([
  [112, 42, 83, 119],
  [56, 125, 46, 49],
  [56, 78, 101, 43],
  [62, 98, 114, 108],
]);
