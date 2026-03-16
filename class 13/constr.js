function Student(name, age, city, country) {
    this.username = name
    this.userage = age
    this.usercity = city
    this.usercountry = country
    this.greet = function () {
        return `hello' ${name}`
    }
}

let std1 = new Student("ali khan", 20, "karachi", "pakistan")
let std2 = new Student("farhan khan", 30, "karachi", "pakistan")
let std3 = new Student("uzair khan", 60, "karachi", "pakistan")
console.log(std1.greet());
console.log(std2);
console.log(std3);
