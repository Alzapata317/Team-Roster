class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGithub() {
        returns: this.github;
    }
    getRole() {
        returns: 'Engineer';
    }
  }
  
  module.exports = Engineer;