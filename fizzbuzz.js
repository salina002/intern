function fizzBuzz() {

    let output = '';//initialize an empty string to hold the final output
    
    //loop numbers from 1 to 100
    for (let i = 1; i <= 100; i++) {
           // Check if the number is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) 
            {
            output += "FizzBuzz ";//add fizzbuzz to the output
            }
            //check if the number is divisible by 3 only
        else if (i % 3 === 0) 
            {
            output += "Fizz "; //add fizz to the output
            }
            //check if the number is divisible by 5
        else if (i % 5 === 0)
             {
            output += "Buzz ";//add buzz to the output
             } 
             //If the number is not divisible by 3 or 5
        else{
            output += i + " ";
            }
    }
    document.getElementById('fizzBuzzOutput').innerText = output;//add the number itself to the output
}
