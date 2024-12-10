function factorial() {
    let n = Number(document.getElementById('factorialInput').value);

    //if the number is 0 or 1 , the factorial is 1
    if (n === 0 || n === 1) return 1;
    let result = 1;  //initialize the result to 1, as multiplication starts from 1
    
    
    for (let i = 2; i <= n; i++) {
        result *= i; //multiply the result by the current number in the loop
    }
    document.getElementById('factorialOutput').innerText = result;
}