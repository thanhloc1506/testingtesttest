import { isPrime } from "./example";

describe("isPrime()", () => {
  it("should return true when num is prime", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(23)).toBe(true);
    expect(isPrime(47)).toBe(true);
    expect(isPrime(307)).toBe(true);
    expect(isPrime(853)).toBe(true);
  });
  it("should return false when num is not prime", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(1000)).toBe(false);
    expect(isPrime(888)).toBe(false);
  });
});
