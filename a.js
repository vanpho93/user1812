class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, I am ${this.name}`);
    }
}

class Child extends Person {
    getAgeOfPerson() {
        console.log(`${this.name} is ${this.age} years old.`);
    }

    static compare(p1, p2) {
        const message = p1.age > p2.age ? `${p1.name} is bigger than ${p2.name}` : `${p2.name} bigger than ${p1.name}`
        console.log(message);
    }

    sayHello() {
        super.sayHello();
        console.log(`Xin chao, toi la ${this.name}`);
    }
}

const teo = new Child('Teo Nguyen', 10);
const ti = new Child('Ti Nguyen', 12);
Child.compare(teo, ti);

teo.sayHello();
// teo.getAgeOfPerson();
// console.log(teo);
// teo.sayHello();
// teo.getAgeOfPerson();
