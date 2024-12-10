    // 
    function reverseString() {
        let str = document.getElementById('reverseInput').value;
        let reversedStr = '';

        //check if input string is valid
        if (str !==null && str !== ''){

            //Reverse the string using a loop
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        document.getElementById('reverseOutput').innerText = reversedStr;
        
        }else{
           alert("Enter a valid string");
        }
    
    }
