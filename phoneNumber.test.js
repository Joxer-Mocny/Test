//tato funkcia odstrani z telefonych cisel bodky, ciarky, medzery, pomlcky, podciarkovniky a lomitka
const removeSpacesAndSpecials = (str) => {
  return (str = str.replace(/\s+[ - _ / . , ]/g, ""));
};
//tato funkcia skontroluje poslednych 9 cisiel v telefonom cisle
const phoneNrsAreEqual = (nr1, nr2) => {
  return (
    removeSpacesAndSpecials(nr1.substr(-8)) ===
    removeSpacesAndSpecials(nr2.substr(-8))
  );
};
// ak su posledne devet telefone cisla rovnake skontroluje predvolbu
const phoneNrsAreEqualPrefix = (nr1, nr2) => {
  if ((phoneNrsAreEqual = true));
  return (
    removeSpacesAndSpecials(nr1.substr(-9, -10, -11)) ===
    removeSpacesAndSpecials(nr2.subtr(-9, -10, -11))
  );
};
//tento test skontroluje ci sa  cisla v zapise s bodkami, ciarkami, medzerami, pomlckami, podciarkovnikmi a lomitkami rovnaju.
describe("Check phoneNrsAreEqual function", () => {
  it("Check inequality landline number", () => {
    expect(phoneNrsAreEqual("0556427269", "0556427268")).toBe(false);
  });
  it("Check inequality mobile number", () => {
    expect(phoneNrsAreEqual("0910233859", "0910233858")).toBe(false);
  });
  it("Check equality landline number", () => {
    expect(phoneNrsAreEqual("0556427269", "0556427269")).toBe(true);
  });
  it("Check equality mobile number", () => {
    expect(phoneNrsAreEqual("0910233859", "0910233859")).toBe(true);
  });
  it("Check space mobile number", () => {
    expect(phoneNrsAreEqual("0910233859", "0910 233 859")).toBe(true);
  });
  it("Check space landline number", () => {
    expect(phoneNrsAreEqual("0556427269", "055 644 7269")).toBe(true);
  });
  it("Check for equality whit dots on landline number ", () => {
    expect(phoneNrsAreEqual("0556447269", "055.6427269")).toBe(true);
  });
  it("Check for equality whit dots on mobile phone number ", () => {
    expect(phoneNrsAreEqual("0910233859", "0910.233.859")).toBe(true);
  });
  it("Check for equality whit comas on landline number ", () => {
    expect(phoneNrsAreEqual("0556447269", "055,6427269")).toBe(true);
  });
  it("Check for equality whit comas on mobile phone number ", () => {
    expect(phoneNrsAreEqual("0910233859", "0910,233,859")).toBe(true);
  });
  it("Check for equality whit slash on landline number ", () => {
    expect(phoneNrsAreEqual("0556447269", "055/6427269")).toBe(true);
  });
  it("Check for equality whit slash on mobile phone number ", () => {
    expect(phoneNrsAreEqual("0910233859", "0910/233859")).toBe(true);
  });
  it("Check for equality whit dash on  landline number", () => {
    expect(phoneNrsAreEqual("0556447269", "055-642-7269")).toBe(true);
  });
  it("Check for equality whit dash on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910233859", "0910-233-859")).toBe(true);
  });
  it("Check for equality whit underscore on landline number ", () => {
    expect(phoneNrsAreEqual("0556447269", "055_642_7269")).toBe(true);
  });
  it("Check for equality whit underscore on mobile phone number ", () => {
    expect(phoneNrsAreEqual("0910233859", "0910_233_859")).toBe(true);
  });
  it("Check for equality whit slash and space on landline  number", () => {
    expect(phoneNrsAreEqual("0556447269", "055/642 7269")).toBe(true);
  });
  it("Check for equality whit slash and space on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910233859", "0910/233 859")).toBe(true);
  });
  it("Check for equality whit slash and space on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910 233 859", "0910/233 859")).toBe(true);
  });
  it("Check for equality whit slash and space on landline  number", () => {
    expect(phoneNrsAreEqual("055 644 7269", "055/642 7269")).toBe(true);
  });
  it("Check for equality whit slash and dash on landline number ", () => {
    expect(phoneNrsAreEqual("0556447269", "055/642-7269")).toBe(true);
  });
  it("Check for equality whit slash and dash on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910233859", "0910/233-859")).toBe(true);
  });
  it("Check for equality whit slash and dash on landline number ", () => {
    expect(phoneNrsAreEqual("055-644-7269", "055/6427269")).toBe(true);
  });
  it("Check for equality whit slash and dash on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910-233-859", "0910/233859")).toBe(true);
  });
  it("Check for equality whit dash and space on landline  number", () => {
    expect(phoneNrsAreEqual("055 6447269", "055-6427269")).toBe(true);
  });
  it("Check for equality whit dash and space on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910 233 859", "0910-233859")).toBe(true);
  });
  it("Check for equality whit dash and space on landline  number", () => {
    expect(phoneNrsAreEqual("055 644 7269", "055-6427-269")).toBe(true);
  });
  it("Check for equality whit dash and space on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910 233 859", "0910-233-859")).toBe(true);
  });
  it("Check for equality whit underscope and space on landline  number", () => {
    expect(phoneNrsAreEqual("055 6447269", "055_6427269")).toBe(true);
  });
  it("Check for equality whit underscope and space on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910_233859", "0910 233859")).toBe(true);
  });
  it("Check for equality whit underscope and space on landline  number", () => {
    expect(phoneNrsAreEqual("055 6447269", "055_6427269")).toBe(true);
  });
  it("Check for equality whit underscope and space on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910 233 859", "0910_233_859")).toBe(true);
  });
  it("Check for equality whit slash, dash and space on landline number ", () => {
    expect(phoneNrsAreEqual("055 6427269", "055/642-7269")).toBe(true);
  });
  it("Check for equality whit slash, dash and space on landline number ", () => {
    expect(phoneNrsAreEqual("055/6427 269", "055-642-7269")).toBe(true);
  });
  it("Check for equality whit slash, dash and space on landline number ", () => {
    expect(phoneNrsAreEqual("055/6427269", "055-642 7269")).toBe(true);
  });
  it("Check for equality whit slash, dash and space on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910 233 859", "0910/233-859")).toBe(true);
  });
  it("Check for equality whit slash, dash and space on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910 233-859", "0910/233 859")).toBe(true);
  });
  it("Check for equality whit slash, dash and space on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910/233/859", "0910-233 859")).toBe(true);
  });
  it("Check for equality whit slash, dash and underscore on landline number ", () => {
    expect(phoneNrsAreEqual("055_642_7269", "055/642-7269")).toBe(true);
  });
  it("Check for equality whit slash, dash and underscore on landline number ", () => {
    expect(phoneNrsAreEqual("055-642_7269", "055/642-7269")).toBe(true);
  });
  it("Check for equality whit slash, dash and underscore on landline number ", () => {
    expect(phoneNrsAreEqual("055/642_7269", "055/642-7269")).toBe(true);
  });
  it("Check for equality whit slash, dash and underscore on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910_233_859", "0910/233-859")).toBe(true);
  });
  it("Check for equality whit slash, dash and underscore on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910-233_859", "0910/233-859")).toBe(true);
  });
  it("Check for equality whit slash, dash and underscore on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910/233_859", "0910/233-859")).toBe(true);
  });
  it("Check for equality whit space, dash and underscore on landline number ", () => {
    expect(phoneNrsAreEqual("055 642_7269", "055 642-7269")).toBe(true);
  });
  it("Check for equality whit space, dash and underscore on landline number ", () => {
    expect(phoneNrsAreEqual("055-642_7269", "055 6427269")).toBe(true);
  });
  it("Check for equality whit space, dash and underscore on landline number ", () => {
    expect(phoneNrsAreEqual("055_642_7269", "055 642-7269")).toBe(true);
  });
  it("Check for equality whit space, dash and underscore on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910_233 859", "0910-233-859")).toBe(true);
  });
  it("Check for equality whit slash, dash and underscore on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910-233_859", "0910 233 859")).toBe(true);
  });
  it("Check for equality whit slash, dash and underscore on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910 233_859", "0910 233-859")).toBe(true);
  });
  it("Check for equality whit slash, space, dash and underscore on landline number ", () => {
    expect(phoneNrsAreEqual("055/6427 269", "055_642-7269")).toBe(true);
  });
  it("Check for equality whit slash, space, dash and underscore on mobile phone number", () => {
    expect(phoneNrsAreEqual("0910/233 859", "0910_233-859")).toBe(true);
  });
});
//ak predosli test presiel tak skontroluje predvolby
describe("Check phoneNrsAreEqualPrefix function", () => {
  it("Check prefix on mobile number", () => {
    expect(phoneNrsAreEqual("0910233859", "+421910233859")).toBe(true);
  });

  it("Check prefix on mobile number", () => {
    expect(phoneNrsAreEqualPrefix("0910233859", "00421910233859")).toBe(true);
  });
  it("Check prefix on mobile number", () => {
    expect(phoneNrsAreEqualPrefix("00421910233859", "+421910233859")).toBe(
      true
    );
  });

  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("0556427269", "+421556427269")).toBe(true);
  });

  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("0556427269", "00421556427269")).toBe(true);
  });

  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("00421556427269", "+421556427269")).toBe(
      true
    );
  });
});
