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
  console.log(str.slice(-1))
  if (str.length > 1) {
    const subString = str.substring(0, str.length - 1)
    reverseString(subString)
  } else {
    return true
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