function countApplesAndOranges(
  s: number, // start point of house
  t: number, // end point of house
  a: number, // location of apple tree
  b: number, // location of orange tree
  apples: number[],
  oranges: number[],
): void {
  let countOranges = 0;
  let countApples = 0;

  for (
    let index = 0;
    index < apples.length || index < oranges.length;
    index++
  ) {
    const apple = apples[index];
    const orange = oranges[index];

    if (apple + a >= s && apple + a <= t) {
      countApples++;
    }

    if (orange + b >= s && orange + b <= t) {
      countOranges++;
    }
  }

  console.log(countApples);
  console.log(countOranges);
}
