// Palindrome Check
function palindromeCheck(str) {
    return str == str.split("").reverse().join("") ? "Palindrome" : "Not Palindrome"
}
console.log(palindromeCheck("level"));
