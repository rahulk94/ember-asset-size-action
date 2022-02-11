import { expect } from "chai";
import { diffTotals } from "../lib/helpers";

describe("Diff Totals", function () {
  it("should show the correct total difference in size", function () {
    const masterTotals = {
      css: {
        raw: 2000,
        gzip: 20,
      },
      js: {
        raw: 2000,
        gzip: 20,
      },
    };

    const prTotals = {
      css: {
        // ensure we have test coverage for increases & decresases
        raw: 2100,
        gzip: 19,
      },
      js: {
        raw: 1800,
        gzip: 15,
      },
    };

    const diff = diffTotals(prTotals, masterTotals);

    expect(diff).to.deep.equal({
      css: {
        raw: 100,
        gzip: -1,
      },
      js: {
        raw: -200,
        gzip: -5,
      },
    });
  });
});
