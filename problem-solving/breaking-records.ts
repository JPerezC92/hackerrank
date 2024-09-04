function breakingRecords(scores: number[]): number[] {
  const notInitialized = "not initialized";
  type NotInitialized = typeof notInitialized;
  let timesBrokeBestRecord = 0;
  let timesBrokeWorstRecord = 0;
  let bestRecord: number | NotInitialized = notInitialized;
  let worstRecord: number | NotInitialized = notInitialized;

  for (let i = 0; i < scores.length; i++) {
    const currentScore = scores[i];

    if (i === 0) {
      bestRecord = currentScore;
      worstRecord = currentScore;
      continue;
    }

    if (bestRecord !== notInitialized && currentScore > bestRecord) {
      timesBrokeBestRecord++;
      bestRecord = currentScore;
    }

    if (worstRecord !== notInitialized && currentScore < worstRecord) {
      timesBrokeWorstRecord++;
      worstRecord = currentScore;
    }
  }

  return [timesBrokeBestRecord ?? 0, timesBrokeWorstRecord ?? 0];
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
breakingRecords([0, 9, 3, 10, 2, 20]);
