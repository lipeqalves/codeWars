function removeExclamationMarks(s) {
    return s.split("").filter((item) => item !="!").join("");
   }

   console.log(removeExclamationMarks("Hello World!"));