
function findLargestNumber() {
    // Get the input string
    const input = document.getElementById('largestInput').value;
    
    // Convert the input string to an array of numbers manually
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    
    let largest = numbers[0]; // Assume the first number is the largest

    // Loop through the array to find the largest number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    
    // Display the result
    document.getElementById('largestNumberOutput').textContent = 'The largest number is: ' + largest;
}
