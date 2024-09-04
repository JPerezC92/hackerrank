function miniMaxSum(arr: number[]): void {
  // Write your code here
  const highestNumbersList = [];
  const lowestNumbersList = [];
  const sumLength = 4;

  let lowestValueInHighestIndex = 0;
  let highestValueInLowestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (i < sumLength) {
      lowestNumbersList.push(currentNumber);
      highestNumbersList.push(currentNumber);

      if (currentNumber < highestNumbersList[lowestValueInHighestIndex]) {
        lowestValueInHighestIndex = i;
      }

      if (currentNumber > lowestNumbersList[highestValueInLowestIndex]) {
        highestValueInLowestIndex = i;
      }

      continue;
    }

    for (let index = 0; index < sumLength; index++) {
      if (currentNumber > highestNumbersList[lowestValueInHighestIndex]) {
        highestNumbersList[lowestValueInHighestIndex] = currentNumber;
      }

      if (currentNumber < lowestNumbersList[highestValueInLowestIndex]) {
        lowestNumbersList[highestValueInLowestIndex] = currentNumber;
      }
    }
  }

  function getSum(arr: number[]): number {
    return arr.reduce((acc, x) => acc + x, 0);
  }

  console.log(`${getSum(lowestNumbersList)} ${getSum(highestNumbersList)}`);
}

// miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([7, 69, 2, 221, 8974]);
