function strengthCheck(str) {
    let pattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/
    return pattern.test(str)
}

console.log(strengthCheck("Password123"));
console.log(strengthCheck("password123"));
