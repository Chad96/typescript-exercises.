// 1. Create a Person class with name and age properties.
/* 2. Add a private property socialSecurityNumber to the Person class and a method
to get the age.*/
var Person = /** @class */ (function () {
    function Person(name, age, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
