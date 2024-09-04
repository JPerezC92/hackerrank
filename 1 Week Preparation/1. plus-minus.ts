function plusMinus(arr: number[]): void {
  const divisor = arr.length;
  const { positivesCount, negativesCount, zeroesCount } = arr.reduce(
    (acc, x) => {
      if (x > 0) {
        acc.positivesCount++;
      } else if (x < 0) {
        acc.negativesCount++;
      } else {
        acc.zeroesCount++;
      }

      return acc;
    },
    {
      positivesCount: 0,
      negativesCount: 0,
      zeroesCount: 0,
    },
  );

  console.log((positivesCount / divisor).toFixed(6));
  console.log((negativesCount / divisor).toFixed(6));
  console.log((zeroesCount / divisor).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
