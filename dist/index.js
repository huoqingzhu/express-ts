class Person {
    constructor(theName) {
        this.name = theName;
    }
    getName() {
        return this.name;
    }
}
const huo = new Person("Node");
console.log(huo.getName());
