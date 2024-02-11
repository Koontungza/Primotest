import { merge } from "./index";

describe("merge", () => {
  it("test1", () => {
    const collection1 = [1, 2, 3, 4];
    const collection2 = [5, 6, 7, 8];
    const collection3 = [12, 11, 10, 9];
    const expectedMerged = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual(expectedMerged);
  });

  it("test2", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];
    const expectedMerged: number[] = [];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual(expectedMerged);
  });

  it("test3", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8];
    const collection3 = [12, 11, 10, 9];
    const expectedMerged = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const result = merge(collection1, collection2, collection3);

    expect(result).toEqual(expectedMerged);
  });
});
