function reverseWords(str) {
    // Go for it
    let arr = str.split(" ");
      arr = arr.map((item) => item.split("").reverse().join(""));
      return arr.join(" ");
  }

  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));