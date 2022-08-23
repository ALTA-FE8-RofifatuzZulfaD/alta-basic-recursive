const maxSequence = require("./Problem4")

describe("maxSequence", () => {
    it("jumlah maksimum sub array", () => {
        expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    })
})