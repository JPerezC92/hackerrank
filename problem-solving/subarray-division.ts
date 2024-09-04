function birthday(numList: number[], day: number, month: number): number {
  // Write your code here
  const segmentLimit = month - 1;

  return numList.reduce((acc, curr, currIndex, arr) => {
    const isLessElementsThanSegment = currIndex < segmentLimit;

    if (isLessElementsThanSegment) {
      return acc;
    }

    const prevSegment = arr.slice(currIndex - segmentLimit, currIndex + 1);

    const prevSegmentSum = prevSegment.reduce((acc, curr) => acc + curr, 0);

    if (prevSegmentSum !== day) {
      return acc;
    }

    return acc + 1;
  }, 0);
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
