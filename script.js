const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const checkPalindromeDiv = document.getElementById("checkPalindrome");

checkBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const textInput = document.getElementById("text-input").value.trim();

  if (textInput === "") {
    alert("Please input a value");
    return;
  }

  if (textInput.length === 1) {
    result.textContent = `${textInput} is a palindrome`;
    return;
  }

  // Remove non-alphanumeric characters from the input string
  const alphanumericString = textInput.replace(/[\W_]/g, "").toLowerCase();
  const rev = alphanumericString.split("").reverse().join("");

  if (alphanumericString === rev) {
    result.textContent = `${textInput} is a palindrome`;
  } else {
    result.textContent = `${textInput} is not a palindrome`;
  }

  result.style.display = "block";
});


checkPalindromeDiv.addEventListener('mouseenter', () => {
  gsap.to(checkPalindromeDiv, {
    scale: 1.05,
    duration: 0.3,
  });
});

checkPalindromeDiv.addEventListener('mouseleave', () => {
  gsap.to(checkPalindromeDiv, { scale: 1, duration: 0.3 });
});

// Add click animation
checkBtn.addEventListener('click', () => {
  gsap.from(checkBtn, { y: -10, ease: 'bounce.out', duration: 0.5 });
});
