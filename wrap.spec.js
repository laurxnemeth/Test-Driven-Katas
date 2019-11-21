const { expect } = require("chai");
const wrap = require("./wrap")

describe("wrap", () => {
    it("Returns empty string if empty string was provided", () => {
        expect(wrap("", 10)).to.equal("");
    });

    it("First parameter is a string", () => {
        expect(wrap(typeof line)).to.equal("string"); 
    });

    it("Second parameter is a number", () => {
        expect(maxLen).to.be.an("number")
    });
});

