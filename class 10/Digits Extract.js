// Digits Extract
function digitsExtract(str){
    return str.match(/\d+/g)
}
console.log(digitsExtract("my test score 223 my age is 20"));