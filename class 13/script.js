// class variable 
// instance variable 
// class method 
// instance / prototype methods
// Inheritance
// Encapsulation
// Polymorphism
// Abstraction
// constructor methods 
// static method 

// class Bank {
//     useranme = 'ali'
//     static fullname() {
//         return `your account title is farhan khan`
//     }

//     constructor(name, age, city, country, account, balance) {
//         this.username = name
//         this.userage = age
//         this.usercity = city
//         this.usercountry = country
//         this.account = account
//         this.balance = balance
//     }

//     fullname() {
//         return `your account title is ${this.username}`
//     }
// }

// let std1 = new Bank('ali', 20, 'karachi', 'pakistan', 123456, 40000)
// let std2 = new Bank('farhan', 30, 'karachi', 'pakistan', 123456, 90000)
// console.log(std1.fullname());
// console.log(Bank.fullname());



// class Bank {
//     #balance;
//     constructor(name, age, city, country, account, balance) {
//         this.username = name
//         this.userage = age
//         this.usercity = city
//         this.usercountry = country
//         this.account = account
//         this.#balance = balance
//     }

//     fullname() {
//         return `your account title is ${this.username}`
//     }

//     getBalance() {
//         return `your current balance is: ${this.#balance}`
//     }

//     deposit(amount) {
//         this.#balance += amount
//     }


//     withdraw(amount) {
//         if (this.#balance >= amount) {
//             this.#balance -= amount
//         } else {
//             console.log("isufficient balance");
//         }
//     }
// }

// class NationalBank extends Bank {
//     constructor(name, age, city, country, account, balance, loan) {
//         super(name, age, city, country, account, balance)
//         this.loan = loan
//     }

//     deposit(amount) {
//         this.loan += amount
//     }
// }

// let std1 = new Bank('ali', 20, 'karachi', 'pakistan', 123456, 40000)
// let std2 = new NationalBank('farhan', 30, 'karachi', 'pakistan', 123456, 90000, 40000)
// std1.deposit(20000)
// std1.withdraw(50000)
// std1.deposit(60000)
// std2.deposit(60000)
// console.log(std2.fullname());
// console.log(std2.getBalance());

// console.log(std1);
// console.log(std2);

// get read
// set update

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get checkName() {
        return `my name is ${this.name}`
    }

    set updateName(name) {
        this.name = name
    }

}

let user1 = new User("ali", 20)
user1.updateName = "farhan khan"
console.log(user1.checkName);
