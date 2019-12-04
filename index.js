// Code your solution here!

function printString(str) {
  console.log(str[0])
  if (str.length > 1) {
    const subString = str.substring(1, str.length);
    printString(subString);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str.length < 2) {
    return str
  } else {
    const subString = str.substring(0, str.length - 1)
    return str.slice(-1) + reverseString(subString)
  }
}

function isPalindrome(str) {
  if (str[0] !== str.slice(-1)) {
    return false
  }

  if (str.length > 1) {
    const subString = str.substring(1, str.length - 1)
    isPalindrome(subString)
  }

  return true
}