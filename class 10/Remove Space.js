function spaceRemove(str) {
    return str.replace(/\s+/g, " ").trim()
}
console.log(spaceRemove("   Multiple     Spaces    Remove    "));
