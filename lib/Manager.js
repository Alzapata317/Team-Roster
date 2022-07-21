class Manager {
    constructor(name, id, email,officeNumber, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = role;
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
        returns: this.role;
    }
  }
  
  module.exports = Manager;