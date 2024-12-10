function filterArray() {
        // Get the input values and convert them to arrays
        let input1 = document.getElementById('arrayInput1').value.split(',').map(item => item.trim());
        let input2 = document.getElementById('arrayInput2').value.split(',').map(item => item.trim());
        
        let result = [];

        // Filtering array1 based on array2 using nested loops
        for (let i = 0; i < input1.length; i++) {
            for (let j = 0; j < input2.length; j++) {
                if (input1[i] === input2[j]) {
                    result.push(input1[i]);
                    break; // Stop inner loop once a match is found
                }
            }
        }

        // Display the result in the output div
        document.getElementById('filterArrayOutput').innerText = `Filtered Array: [${result.join(', ')}]`;
    }