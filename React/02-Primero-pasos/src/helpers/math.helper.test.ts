//test suit
import { describe, expect, test } from "vitest";
import { add } from "./math.helper";
//se necesita export todo lo que queremos testear
describe("add", () => {
  test("should add two positives number", () => {
    //! 1.arrange
    const a = 1;
    const b = 2;
    //! 2.Act
    const result = add(a, b);
    //! 3.Assert
    expect(result).toBe(a + b);
  });
  test("should add two negatives number", () => {
    //! 1.arrange
    const a = -1;
    const b = -2;
    //! 2.Act
    const result = add(a, b);
    //! 3.Assert
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("Prueba de Substract con numeros positivos", () => {
    const c = 12;
    const d = 10;
    const resultSubstract = c - d;
    expect(resultSubstract).toBe(c - d);

    console.log({ resultSubstract });
  });
  test("Prueba de Substract  con numeros negativos", () => {
    const c = -12;
    const d = -10;
    const resultSubstract = c - d;
    expect(resultSubstract).toBe(c - d);

    console.log({ resultSubstract });
  });
});

describe("multiply", () => {
  test("Prueba de multiply con numeros positivos", () => {
    const e = 12;
    const f = 610;
    const resultMultiply = e * f;
    expect(resultMultiply).toBe(e * f);
    console.log({ resultMultiply });
  });

  test("Prueba de multiply con numeros negativos", () => {
    const e = -12;
    const f = 610;
    const resultMultiply = e * f;
    expect(resultMultiply).toBe(e * f);
    console.log({ resultMultiply });
  });
});
