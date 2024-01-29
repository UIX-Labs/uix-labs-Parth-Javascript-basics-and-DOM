//Write code for the 1st task below this

function Person(name, age) {

  this.name = name;
  this.age = age;

  
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}


const person1 = new Person('Omparth', 21);


person1.greet();
//Write your code above this line
//Write code for the 2nd task below this
  function Person(name, age) {
 
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}


function Student(name, age, studentId) {
 
  Person.call(this, name, age);


  this.studentId = studentId;


  this.study = function() {
    console.log(`${this.name} with student ID ${this.studentId} is studying.`);
  };
}


Student.prototype = Object.create(Person.prototype);


const student1 = new Student('parth', 21, 'S123');


student1.greet();


student1.study();

//Write your code above this line
//Write code for the 3rd task below this
function Person(name, age) {
  this.name = name;
  this.age = age;
}


Person.prototype.introduce = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


function Student(name, age, studentId) {
  Person.call(this, name, age);
  this.studentId = studentId;
}


Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function() {
  console.log(`${this.name} with student ID ${this.studentId} is studying.`);
};


const person1 = new Person('Omparth', 21);
const student1 = new Student('Abhishek', 20, 'S12345');


person1.introduce();  
student1.introduce(); 
//Write your code above this line
//Write code for the 4th task below this

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


function Student(name, age, studentId) {
  Person.call(this, name, age);
  this.studentId = studentId;
}


Student.prototype = Object.create(Person.prototype);


Student.prototype.greet = function() {
  console.log(`Hey, I'm a student named ${this.name}, and I'm ${this.age} years old.`);
};


Student.prototype.study = function() {
  console.log(`${this.name} with student ID ${this.studentId} is studying.`);
};


const person1 = new Person('Omparth', 25);
const student1 = new Student('Abhi', 20, 'S12345');

person1.greet();  
student1.greet(); 

//Write your code above this line
//Write code for the 5th task below this

//ES6 Approach
class Employee {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}, and my title is ${this.title}.`);
  }
}


const employee1 = new Employee('Omparth', 'Front-End Developer');


employee1.greet();


//prototype Based Approach
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


const person2 = new Person('John', 25);

person2.greet();

//Write your code above this line


