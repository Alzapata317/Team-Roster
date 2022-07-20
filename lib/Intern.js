class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        returns: this.school;
    }
    getRole() {
        returns: 'Intern';
    }
  }
  
  module.exports = Intern;