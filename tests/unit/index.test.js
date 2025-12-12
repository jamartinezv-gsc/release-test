import { describe, it, expect, vi, beforeEach } from "vitest";
import { suma } from "@/index.js";

describe("suma function", () => {
    it("should return the sum of two numbers", () => {
        expect(suma(2, 3)).toBe(5);
        expect(suma(-1, 1)).toBe(0);
        expect(suma(0, 0)).toBe(0);
    });
});