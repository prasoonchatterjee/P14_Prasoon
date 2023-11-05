class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }
  introduce() {
    return `I am ${this.name}, aged ${this.age} , I am ${this.gender}, and I am ${this.nationality}.`;
  }
}

const Prasoon = new Person('Prasoon',26,'Male','Indian');
const Aditya = new Person('Aditya',26,'Male','Indian');
const Shivam = new Person('Shivam',26,'Male','Indian');

console.log(Prasoon.introduce());
console.log(Aditya.introduce());
console.log(Shivam.introduce());

class Student extends Person{
  constructor(name, age, gender, nationality,subject){
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study(){
    return `I am studying ${this.subject}`
  }
}

const Sarah = new Student("Sarah",18,"female","British","Computer Science");

console.log(Sarah.introduce(),Sarah.study());