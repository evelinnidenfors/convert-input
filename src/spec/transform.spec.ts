import Tranformation from "../app/transform";

describe("transform", () => {
    it("Zero: returns the right value", () => {
        const inputOriginalValueZero = 'word\nnew word here\nanother\nfourth\nmore words\nnew, word, here';
        expect(Tranformation(inputOriginalValueZero)).toBe('word,"new word here",another,fourth,"more words","new word here"')
    });
    it("One: returns the right value", () => {
        const inputOriginalValueOne = 'word';
        expect(Tranformation(inputOriginalValueOne)).toBe('word')
    });
    it("Two: returns the right value", () => {
        const inputOriginalValueTwo = 'word\nword, with comma';
        expect(Tranformation(inputOriginalValueTwo)).toBe('word,"word with comma"')
    });
    it("Three: returns the right value", () => {
        const inputOriginalValueThree = 'word, with comma\nsecond word';
        expect(Tranformation(inputOriginalValueThree)).toBe('"word with comma","second word"')
    });
})