function getTotalX(a: number[], b: number[]): number {
  let factorList: number[] = [];

  const rangeStart = a.at(-1) ?? 0;
  const rangeEnd = b.at(0) ?? 0;

  for (let i = rangeStart; i <= rangeEnd; i++) {
    const isFactorOfA = a.every((x) => i % x === 0);

    const isFactorOfB = b.every((x) => {
      if (i < x) {
        return x % i === 0;
      }

      return i % x === 0;
    });

    if (isFactorOfA && isFactorOfB) {
      factorList.push(i);
    }
  }

  return factorList.length;
}

getTotalX([2, 6], [24, 36]);
getTotalX([2, 4], [16, 32, 96]);
