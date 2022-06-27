void main() {
  print(isUpperCase('hello I AM DONALD'));
  print(isUpperCase('HELLO I AM DONALD'));
}

bool isUpperCase(String str) {
  // your code here
  if (str == str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
