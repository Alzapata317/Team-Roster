class Manager {
    constructor(name, id, email,officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
    getOfficeNumber() {
        returns: this.officeNumber;
    }
    getRole() {
        returns: 'Manager';
    }
  }
  
  module.exports = Manager;