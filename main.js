function capitalize(string){
  return string.charAt(0).toUpperCase() + string.substring(1);
}

function reverseString(string){
  return [...string].reverse().join("");
}

calculator = {
  add(n1, n2){
    return n1 + n2;
  },
  subtract(n1, n2){
    return n1 - n2;
  },
  multiply(n1, n2){
    return n1 * n2;
  },
  divide(n1, n2){
    return n1 / n2;
  }
}

function caesarCipher(string, key){
  function convertToASCIICode(string){
    return [...string].map(s => s.charCodeAt());
  }
  function convertToString(codes){
    return codes.map(c => String.fromCharCode(c)).join("");
  }
  function cipherAlphabets(codes, key){
    return codes.map(c => {
      // Uppercase alphabets: ABC...Z
      if (c >= 65 && c <= 90){
        c += key;
        if (c > 90){
          c -= 26;
        }
      }
      // Lowercase alphabets: abc...z
      else if (c >= 97 && c <= 122){
        c += key;
        if (c > 122){
          c -= 26;
        }
      }
      return c;
    });
  }
  let codes = convertToASCIICode(string);
  let shiftedCodes = cipherAlphabets(codes, key);
  let shiftedString = convertToString(shiftedCodes);
  return shiftedString;
}

function analyzeArray(nums){
  function getAverage(nums){
    return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
  }
  return {
    average: getAverage(nums),
    min: Math.min(...nums),
    max: Math.max(...nums),
    length: nums.length
  }
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };