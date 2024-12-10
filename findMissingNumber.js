function findMissingNumber() {
    // Get the array and number n from the user input
    let arr = document.getElementById('arrInput').value.split(',').map(Number);
    let n = Number(document.getElementById('nInput').value);
    
    // Calculate the sum of the numbers from 1 to n using the formula
    let expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the sum of the elements in the array
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    
    // The missing number is the difference between the expected sum and actual sum
    let missingNumber = expectedSum - actualSum;
    
    // Display the result
    document.getElementById('missingNumberOutput').innerText = "Missing Number: " + missingNumber;
}
