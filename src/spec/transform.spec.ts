import tranformation from "../app/transform";

describe("transform", () => {
    it("Zero: returns the right value", () => {
        const inputOriginalValueZero = 'word\nnew word here\nanother\nfourth\nmore words\nnew, word, here';
        expect(tranformation(inputOriginalValueZero)).toBe('word,"new word here",another,fourth,"more words","new word here"')
    });
    it("One: returns the right value", () => {
        const inputOriginalValueOne = 'word';
        expect(tranformation(inputOriginalValueOne)).toBe('word')
    });
    it("Two: returns the right value", () => {
        const inputOriginalValueTwo = 'word\nword, with comma';
        expect(tranformation(inputOriginalValueTwo)).toBe('word,"word with comma"')
    });
    it("Three: returns the right value", () => {
        const inputOriginalValueThree = 'word, with comma\nsecond word';
        expect(tranformation(inputOriginalValueThree)).toBe('"word with comma","second word"')
    });
})