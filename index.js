// INDEX.JS //

// require all of your classes/constructors, (Manager, Engineer, Intern)
const Manager = require('./lib/Manager')
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
// set up an empty array for the Team Members
const teamMembers = {}
// set up functions for iniitalizing the app, creating a manager, determining which type of employee the user wants to add, adding each member type, and building the team

// function for INITIALIZING ////////////////
function init() {
    // first thing you'll probably want to do is add a function for creating a manager, since that's the first thing you have to do
    // function for CREATING A MANAGER ///////////////
    function createManager() {
      // use inquirer
      // and prompt to ask questions
      inquirer
        .prompt([
          {
            type: 'iput',
            name: 'name',
            message: 'What is the name of the team manager?',
          },
          {
            type: 'input',
            name: 'id',
            message: 'What is their id number?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is their email address?',
          },
          {
            type: 'input',
            name: 'office#',
            message: 'What is the office number that they work in?',
          },
        ])
      .then((answers) => {
      const manager = new Manager(answers);
      teamMembers.push(manager);
      // then you will need to push this new manager to the empty team array you set up above
      // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
      createTeam();
    })
    }
  
    // function for DETERMINING TYPE OF EMPLOYEE //////////////////
    function createTeam() {
      // use inquirer
      // and prompt to ask questions - such as what type of employee they would like to add
      inquirer
        .prompt([
          {
            type: 'list',
            name: 'employment',
            message: 'What type of employee would you like to add to the team?',
            choices: ['Employee', 'Engineer', 'Intern', 'Would not like to add another employee'],
          },
        ])
      // then, based on their choice, run the function associated with adding that employee type
      then((choice) => {
      // conditional that runs function for employee type that the user selected
      switch (choice) {
        case 'Employee':
          addEmployee()
          break;
        case 'Engineer':
          addEngineer()
          break;
        case 'Intern':
          addIntern()
          break;
        case 'Would not like to add another employee':
          buildTeam()
          break;
        default:
          console.log('No value was read')
          break;
      }
      // if they choose Intern, run addIntern function
      // if they no longer want to add members, you'll need to run the function that actually builds the team (creates the file, etc)
      })
    }
  
    // function for ADDING A MEMBER /////////////////
    // a seperate function for each member type
    function addIntern() {
      // use inquirer
      // and prompt to ask questions
      // take the answers, create a new instance of Intern, and add those answers to that new Intern
      // push this new member into you team array
    }
  
    // function for BUIDING THE TEAM //////////////////
    function buildTeam() {
      // creating the file, adding your team to it
      // probably call a function, passing in your team members array - send it to another js file 
    }
  
    // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked
  
    createManager();
  }