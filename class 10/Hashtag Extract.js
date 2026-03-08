function hashtagsExtract(str) {
    return str.match(/#\w+/g)
}
console.log(hashtagsExtract("my favourite programe is #javascript and my favourite chapter is #regex"));
