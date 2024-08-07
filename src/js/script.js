const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');
const regex = /[^a-zA-Z0-9]/g;

// Checks if the text input is currently empty
const emptyInput = () => { alert('Please input a value'); };

// takes in an input, parses input through regex and reverses it to compare if they are the same.
const checkPalindrome = (input) => {
    const parsedInput = input.toLowerCase().replace(regex, '');
    const reverseInput = parsedInput.split("").reverse().join("");

    if (parsedInput === reverseInput) {
        return `<strong>${input}</strong> is a Palindrome.`;
    } else {
        return `<strong>${input}</strong> is not a Palindrome.`;
    }
};

// shows the result and expands the container size
const showResult = () => {;
    result.innerHTML = '';
    result.innerHTML = checkPalindrome(textInput.value);
    result.classList.remove('hidden');
    textInput.value = '';
}

checkButton.addEventListener('click', () => {
    if (textInput.value.length === 0) {
        emptyInput();
    } else {
        showResult();
    }
});