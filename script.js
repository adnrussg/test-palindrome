// Cache DOM elements
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

// Function to validate input
const getSanitizedInput = (input) =>
  input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

// Function to check if a string is a palindrome
const isPalindrome = (str) => str === str.split("").reverse().join("");

// Function to handle palindrome checking
const checkPalindrome = () => {
  const userInput = textInput.value.trim();
  resultDiv.replaceChildren(); // Clear previous result

  if (!userInput) {
    alert("Please input a value");
    return;
  }

  const sanitizedInput = getSanitizedInput(userInput);
  const palindromeCheck = isPalindrome(sanitizedInput);

  // Create result message
  const message = document.createElement("p");
  message.classList.add("user-input");
  const strongText = document.createElement("strong");
  strongText.textContent = userInput;
  message.appendChild(strongText);
  message.appendChild(
    document.createTextNode(
      ` ${palindromeCheck ? "is" : "is not"} a palindrome.`
    )
  );

  resultDiv.appendChild(message);
  resultDiv.classList.remove("hidden");
};

// Event listeners
checkBtn.addEventListener("click", () => {
  checkPalindrome();
  textInput.value = ""; // Clear input field
});

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome();
    textInput.value = ""; // Clear input field
  }
});
