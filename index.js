// Code your solution here!

function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    const subString = string.substring(1, string.length - 1);
    printString(subString);
  } else {
    return true;
  }
}