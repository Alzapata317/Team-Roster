class Engineer {
    constructor(name, id, email, github,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
    getGithub() {
        returns: this.github;
    }
    getRole() {
        returns: this.role;
    }
  }
  
  module.exports = Engineer;