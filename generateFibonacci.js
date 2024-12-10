function generateFibonacci() {
    // Get the number input from the user
    let n = Number(document.getElementById('fibonacciInput').value);
    
    // Handle the case where the user enters a number less than or equal to 0
    if (n <= 0) {
        document.getElementById('fibonacciOutput').innerText = "Please enter a positive number!";
        return;
    }
    
    // Initialize the Fibonacci sequence with the first two numbers: 0 and 1
    let fib = [0, 1];

    // Loop to generate Fibonacci numbers from the third number (index 2) to the nth number
    for (let i = 2; i < n; i++) {
        // Manually calculate the next Fibonacci number
        let nextFib = fib[i - 1] + fib[i - 2];  // Sum of the last two numbers
        fib[i] = nextFib; // Store the next Fibonacci number in the array
    }

    // Manually convert the array to a string without using 'join'
    let fibString = '';
    for (let i = 0; i < fib.length; i++) {
        fibString += fib[i]; // Append the number to the string
        if (i < fib.length - 1) {
            fibString += ', '; // Add a comma if it's not the last number
        }
    }

    // Display the Fibonacci sequence as a string in the output div
    document.getElementById('fibonacciOutput').innerText = fibString;
}
