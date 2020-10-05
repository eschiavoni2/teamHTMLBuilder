// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub
    }
    getName() {
        return this.name
    }
    getID() {
        return this.id
    }
    getRole() {
        return "Engineer"
    }
    getgitHub() {
        return this.gitHub
    }
    }