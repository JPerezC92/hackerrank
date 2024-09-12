function lonelyinteger(a: number[]): number {
  // Write your code here

  const filtered = a.reduce((acc, curr, index) => {
    if (index === 0) {
      return acc.add(curr);
    } else if (acc.has(curr)) {
      acc.delete(curr);

      return acc;
    }

    acc.add(curr);

    return acc;
  }, new Set<number>());

  return filtered.values().next().value;
}

lonelyinteger([1, 1, 2]);
