// Email Validate
// useranme@domain.extension
function emailValidate(email) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(email)
}
console.log(emailValidate("ali123@gmail.com"));
console.log(emailValidate("ali123@gmail"));