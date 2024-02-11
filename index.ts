export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const mergedCollection: number[] = [];
  let i = 0,
    j = 0,
    k = collection3.length - 1;

  while (i < collection1.length || j < collection2.length || k >= 0) {
    const minOfThree = Math.min(
      i < collection1.length ? collection1[i] : Infinity,
      j < collection2.length ? collection2[j] : Infinity,
      k >= 0 ? collection3[k] : Infinity
    );

    mergedCollection.push(minOfThree);

    if (minOfThree === collection1[i]) {
      i++;
    } else if (minOfThree === collection2[j]) {
      j++;
    } else {
      k--;
    }
  }

  return mergedCollection;
}
