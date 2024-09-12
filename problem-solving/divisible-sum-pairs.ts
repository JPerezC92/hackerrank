function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  const arrLength = n;
  const divisor = k;
  let matchesCount = 0;

  for (let index = 0; index < arrLength; index++) {
    const element = ar[index];

    const possibleCouples = ar.filter(
      (value, filterIndex) =>
        filterIndex > index && (element + value) % divisor === 0,
    );

    matchesCount = matchesCount + possibleCouples.length;
  }

  return matchesCount;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
