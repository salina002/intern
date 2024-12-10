function removeDuplicates() {
    // Get input and split into an array of numbers
    let input = document.getElementById('duplicateInput').value;
    let arr = [];
    let currentNum = '';

    // Manually split the input by commas into an array
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ',') {
            arr.push(Number(currentNum.trim()));
            currentNum = '';
        } else {
            currentNum += input[i];
        }
    }
    if (currentNum.trim() !== '') {
        arr.push(Number(currentNum.trim())); // Add the last number
    }

    // Remove duplicates manually
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    // Convert array to string and display
    let output = uniqueArr.join(', ');
    document.getElementById('removeDuplicatesOutput').innerText = output;
}
