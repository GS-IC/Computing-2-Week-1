import Reverse from "../server/Reverse.js";

// This test intentionally has a bug in it that you should fix.
// There is also a jslint error which should give a clue.
describe("Reverse", function () {
    it("Reversing a string twice returns the original string", function () {
        const str = "Hello world, I'm a string!";
        const reverseOnce = Reverse.reverse(str);
        const reverseTwice = Reverse.reverse(reverseOnce);
        if (reverseTwice !== str) {
            throw new Error(
                `The string "${str}" should be equal to itself reversed twice` +
                ` "${reverseOnce}", but is not.`
            );
        }
    });
});
