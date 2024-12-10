function countVowels() {
    // Get the input string from the user
    let str = document.getElementById('vowelInput').value;
    
    // Define the vowels to check against
    let vowels = 'aeiouAEIOU';
    let count = 0; // Initialize the vowel count to 0

    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
        // Compare each character with vowels 
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++; // Increment count if a vowel is found
                break;  // Exit the inner loop once a match is found
            }
        }
    }

    // Display the total vowel count in the output div
    document.getElementById('vowelsOutput').innerText = `Total Vowels: ${count}`;
}
