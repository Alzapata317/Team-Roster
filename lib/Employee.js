class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        returns: this.name;
    }
    getId() {
        returns: this.id;
    }
    getEmail() {
        returns: this.email;
    }
    getRole() {
        returns: 'Employee';
    }
  }
  
  module.exports = Employee;