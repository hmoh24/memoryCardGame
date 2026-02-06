import * as helpers from "../util/helperFuncs";

describe("Random index", () => {
  let array;

  beforeEach(() => {
    array = [0, 2, 4, 5];
  });
  test("Return random index within array bounds", () => {
    expect(helpers.randomIndex(array)).toBeLessThan(array.length);
    expect(helpers.randomIndex(array)).toBeGreaterThanOrEqual(0);
  });

  test("randomIndex varies over many calls", () => {
    const results = new Set();

    for (let i = 0; i < 200; i++) {
      results.add(helpers.randomIndex(array));
    }

    expect(results.size).toBeGreaterThan(1);
  });

  test("Return random index whole number", () => {
    expect(helpers.randomIndex(array)).toBeLessThan(array.length);
    expect(helpers.randomIndex(array)).toBeGreaterThanOrEqual(0);
  });
});

describe("Randomise array items", () => {
  let array;

  beforeEach(() => {
    array = [0, 2, 4, 5];
  });
  test("Return array of same size", () => {
    expect(helpers.randomiseArray(array, helpers.randomIndex).length).toBe(
      array.length,
    );
  });
  test("Return array of same content", () => {
    expect(
      helpers
        .randomiseArray(array, helpers.randomIndex)
        .every((returnValue) => array.includes(returnValue)),
    ).toBe(true);
  });
  test("RandomIndex function called (array length - 1) times", () => {
    const spy = jest.spyOn(helpers, "randomIndex").mockReturnValue(0);

    console.log(helpers.randomiseArray(array, helpers.randomIndex));

    expect(spy).toHaveBeenCalledTimes(array.length);

    spy.mockRestore();
  });
});
