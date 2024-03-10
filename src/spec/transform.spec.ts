import tranformation from "../app/transform";

describe("transform", () => {
    it.skip("Zero: returns the right value", () => {
        const inputOriginalValueZero = 'zebra\nstriped zebra\nblack, horse\nhorse\nlittle white bunny';
        expect(tranformation(inputOriginalValueZero)).toBe('black,horse,"little white bunny",zebra')
    });
    it("One: returns the right value", () => {
        const inputOriginalValueOne = 'puppy';
        expect(tranformation(inputOriginalValueOne)).toBe('puppy')
    });
    it.skip("Two: returns the right value", () => {
        const inputOriginalValueTwo = 'puppy\nsmall, dog';
        expect(tranformation(inputOriginalValueTwo)).toBe('dog,small,puppy')
    });
    it.skip("Three: returns the right value", () => {
        const inputOriginalValueThree = 'cat\nkitten\nbrown kitten\nbrown, small kitten';
        expect(tranformation(inputOriginalValueThree)).toBe('cat,brown,kitten')
    });
})