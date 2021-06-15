//funkcia na kontrolu cisiel bez predvolby
const removeSpacesAndSpecials = (str) => {
  return str.replace(/\s+[ - _ / . , + x]/g, "");
};

const areNumbersEqual = (nr1, nr2) => {
  const numberWithoutSpecials1 = removeSpacesAndSpecials(nr1.substr(-8));
  const numberWithoutSpecials2 = removeSpacesAndSpecials(nr2.substr(-8));

  return numberWithoutSpecials1 === numberWithoutSpecials2;
};

//funkcia na kontrolu cisiel s predvolbou (1 cislo ako predvolba)
const removeSpacesAndSpecials = (str) => {
  return str.replace(/\s+[ - _ / . , + x]/g, "");
};

const areNumbersEqual = (nr1, nr2) => {
  const numberWithoutSpecials1 = removeSpacesAndSpecials(nr1.substr(-9));
  const numberWithoutSpecials2 = removeSpacesAndSpecials(nr2.substr(-9));

  return numberWithoutSpecials1 === numberWithoutSpecials2;
};

//funkcia na kontrolu cisiel s predvolbou (2 cislo ako predvolba)
const removeSpacesAndSpecials = (str) => {
  return str.replace(/\s+[ - _ / . , + x]/g, "");
};

const areNumbersEqual = (nr1, nr2) => {
  const numberWithoutSpecials1 = removeSpacesAndSpecials(nr1.substr(-11));
  const numberWithoutSpecials2 = removeSpacesAndSpecials(nr2.substr(-11));

  return numberWithoutSpecials1 === numberWithoutSpecials2;
};

//funkcia na kontrolu cisiel s predvolbou (3 cislo ako predvolba)
const removeSpacesAndSpecials = (str) => {
  return str.replace(/\s+[ - _ / . , + x]/g, "");
};

const areNumbersEqual = (nr1, nr2) => {
  const numberWithoutSpecials1 = removeSpacesAndSpecials(nr1.substr(-12));
  const numberWithoutSpecials2 = removeSpacesAndSpecials(nr2.substr(-12));

  return numberWithoutSpecials1 === numberWithoutSpecials2;
};

//funkcia na kontrolu cisiel s predvolbou (4 cislo ako predvolba)

const removeSpacesAndSpecials = (str) => {
  return str.replace(/\s+[ - _ / . , + x]/g, "");
};

const areNumbersEqual = (nr1, nr2) => {
  const numberWithoutSpecials1 = removeSpacesAndSpecials(nr1.substr(-13));
  const numberWithoutSpecials2 = removeSpacesAndSpecials(nr2.substr(-13));

  return numberWithoutSpecials1 === numberWithoutSpecials2;
};

//TEST

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

  //Zahranicne cisla s 1 cislom ako predvolbou
  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("8107556427269", "+7556427269")).toBe(true);
  });

  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("7556427269", "+7556427269")).toBe(true);
  });

  //Zahranicne cisla s 2 cislom ako predvolbou
  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("0086556427269", "+86556427269")).toBe(true);
  });

  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("6556427269", "+86556427269")).toBe(true);
  });

  //Zahranicne cisla s 4 cislom ako predvolbou
  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("0011284556427269", "+1284556427269")).toBe(
      true
    );
  });

  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("4556427269", "+1284556427269")).toBe(true);
  });
  //Zahranicne cisla mozu mat aj x v sebe tak este test aj s tym
  it("Check prexif on landline number", () => {
    expect(phoneNrsAreEqualPrefix("1xx056556427269", "+86556427269")).toBe(
      true
    );
  });
});

// ak testy s pomlckami bodkami medzerami... presli na slovenskych cislach, budu fungovat aj na zahranicnych cislach.
