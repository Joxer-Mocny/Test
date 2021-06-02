const removeSpaces = (str) => {
  return (str = str.replace(/\s+/g, ""));
};

const phoneNrsAreEqual = (nr1, nr2) => {
  return removeSpaces(nr1.substr(-8)) === removeSpaces(nr2.substr(-8));
};

describe("Check phoneNrsAreEqual function", () => {
  it("Check inequality", () => {
    expect(phoneNrsAreEqual("0556427269", "+421556447269")).toBe(false);
  });

  it("Check spaces", () => {
    expect(phoneNrsAreEqual("0910233859", "0910 233 859")).toBe(true);
  });

  it("Check prefix", () => {
    expect(phoneNrsAreEqual("0910233859", "+421910233859")).toBe(true);
  });
});

