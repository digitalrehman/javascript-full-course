function student(name, age, city, country) {
    return {
        name,
        age,
        city,
        country,
        greet: function () {
            return `Hello ${this.name}`
        }
    }
}

let std1 = student("ali khan", 20, "karachi", "pakistan")
let std2 = student("farhan khan", 30, "karachi", "pakistan")
let std3 = student("uzair khan", 60, "karachi", "pakistan")
console.log(std1);
console.log(std2);
console.log(std3);
