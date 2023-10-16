function palindromeChecker() {
    let sentence1 = document.getElementById('input').value;
    sentence1 = sentence1.replace(/\s/g, '').toLowerCase();
    let sentence2 = sentence1.split('').reverse().join('');
    let result = document.querySelector("#result");

    if (sentence1 === sentence2){
        result.innerHTML = "Palindrome"
    }
    else {
        result.innerHTML = "Not a palindrome"
    }
}