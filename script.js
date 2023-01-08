const txtInput = document.querySelector(".inputs input"),
  checkBtn = document.querySelector(".inputs button"),
  infoTxt = document.querySelector(".info-txt");

let filterInput;
//check pallindrome
checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";
  if (filterInput != reverseInput) {
    return (
      (infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't  a palindrome!`),
      console.log("Not palindrome")
    );
  }
  infoTxt.innerHTML = `
  Yes, <span>'${txtInput.value}'</span> is  a palindrome!`;
  console.log("palindrome");
});

txtInput.addEventListener("keyup", () => {
  // removing spaces & all special characters from entered value

  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");

  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoTxt.style.display = "none";
  checkBtn.classList.remove("active");
});
