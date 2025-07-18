const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./main.js');
// could add test cases for errors such as users inputting strings instead of numbers
// toThrow(Error);

describe('Capitalize function', () => {
  it('capitalize the first letter of "banana"', () => {
    expect(capitalize('banana')).toMatch('Banana');
  });

  it('capitalize the first letter of "big2SMALL"', () => {
    expect(capitalize('big2SMALL')).toMatch('Big2SMALL');
  });
});

describe('ReverseString function', () => {
  it('reverse string "ABCdef123"', () => {
    expect(reverseString('ABCdef123')).toMatch('321fedCBA');
  });
  it('reverse string "woah-==-COOL"', () =>{
    expect (reverseString('woah-==-COOL')).toMatch('LOOC-==-haow');
  });
});

describe('Calculator object functions', () => {
  describe('Add function', () => {
    it('adds 4 + 12 = 16', () => {
      expect(calculator.add(4,12)).toBeCloseTo(16);
    });
    it('adds 999 + -1 = 998', () => {
      expect(calculator.add(999,-1)).toBeCloseTo(998);
    });
  });
  describe('Subtract function', () => {
    it('subtracts 10 - 7 = 3', () => {
      expect(calculator.subtract(10, 7)).toBeCloseTo(3);
    });
    it('subtracts 2 - 20 = -18', () => {
      expect(calculator.subtract(2, 20)).toBeCloseTo(-18);
    });
  });
  describe('Multiply function', () => {
    it('multiplies 6 * 12 = 72', () => {
      expect(calculator.multiply(6, 12)).toBeCloseTo(72);
    });
    it('multiplies -3 * 9 = -27', () => {
      expect(calculator.multiply(-3, 9)).toBeCloseTo(-27);
    });
  });
  describe('Divide function', () => {
    it('divides 12 / 4 = 3', () => {
      expect(calculator.divide(12, 4)).toBeCloseTo(3);
    });
    it('divides 20 / 6 = 3.333', () => {
      expect(calculator.divide(20,6)).toBeCloseTo(3.333333333333333333);
    })
  });
});

describe('Caesar Cipher function', () => {
  it('converts "xyz" to "abc"', () => {
    expect(caesarCipher('xyz',3)).toMatch('abc');
  });
  it('converts "HeLLo" to "LiPPs"', () => {
    expect(caesarCipher('HeLLo', 4)).toMatch('LiPPs');
  });
  it('converts "@pple, wowie!" to "@wwsl, dvdpl!"', () => {
    expect(caesarCipher('@pple, wowie!', 7)).toMatch('@wwsl, dvdpl!')
  })
});

describe('Analyze Array function', () => {
  it('analyzes this array [0, 6, 2, 6, 4, 8]', () => {
    let result = analyzeArray([0, 4, 3, 6, 3, 8]);
    expect(result.average).toBeCloseTo(4);
    expect(result.min).toBeCloseTo(0);
    expect(result.max).toBeCloseTo(8);
    expect(result.length).toEqual(6);
  });
  it('anaylzes this array [-4, 12, -9, 1, 28, 3, 7]', () => {
    let result = analyzeArray([-4, 12, -9, 1, 28, 3, 7]);
    expect(result.average).toBeCloseTo(5.42857);
    expect(result.min).toBeCloseTo(-9);
    expect(result.max).toBeCloseTo(28);
    expect(result.length).toEqual(7);
  });
  it('analyzes this array [0, 0.1, 0.2, 100, 99, 98, 1, -1]', () => {
    let result = analyzeArray([0, 0.1, 0.2, 100, 99, 98, 1, -1]);
    expect(result.average).toBeCloseTo(37.1625);
    expect(result.min).toBeCloseTo(-1);
    expect(result.max).toBeCloseTo(100);
    expect(result.length).toEqual(8);
  });
});