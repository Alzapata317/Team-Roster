// INDEX.JS //
// require all of your classes/constructors, (Manager, Engineer, Intern)
const Manager = require('./lib/Manager')
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
// set up an empty array for the Team Members
const teamMembers = [];

    
const generateHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <nav>
        <h1>My Team</h1>
    </nav>
    <main>
      `;

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
            type: 'input',
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
            name: 'officeNumber',
            message: 'What is the office number that they work in?',
          },
        ])
      .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, "Manager");
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
      .then((choice) => {
      // conditional that runs function for employee type that the user selected
      switch ((choice.employment)) {
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
    
    function addEmployee() {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee',
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
        ])
        .then((answers) => {
          const employee = new Employee(answers.name, answers.id, answers.email, 'Employee');
          teamMembers.push(employee);
          // then you will need to push this new manager to the empty team array you set up above
          // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
          createTeam();
        })
    }
    function addEngineer() {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?',
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
            name: 'github',
            message: 'What is their github username?'
          }
        ])
        .then((answers) => {
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github, 'Engineer');
          teamMembers.push(engineer);
          // then you will need to push this new manager to the empty team array you set up above
          // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
          createTeam();
        })
    }
    function addIntern() {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
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
            name: 'school',
            message: 'What school does your intern go to?'
          }
        ])
        .then((answers) => {
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school, 'Intern');
          teamMembers.push(intern);
          // then you will need to push this new manager to the empty team array you set up above
          // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
          createTeam();
        })
    }
    // function for BUIDING THE TEAM //////////////////
    function buildTeam() {
      fs.writeFile('./dist/test.html', generateHTML, (err) => 
      err ? console.log(err) : console.log('Successfully created file!')
      );
      for (let i = 0; i < teamMembers.length; i++) {
      setTimeout(() => {
      switch (teamMembers[i].role) {
        case 'Manager':
                fs.appendFile('./dist/test.html',((`<div class="card">
                <div class="head">
                    <h2>${teamMembers[i].name}</h2>
                    <h2>${teamMembers[i].role}</h2>
                </div>
                <div>
                    <ul>
                        <li>Id: ${teamMembers[i].id}</li>
                        <li>Email: ${teamMembers[i].email}</li>
                        <li>Office Number: ${teamMembers[i].officeNumber}</li>
                    </ul>
                </div>
            </div>`)),(err) => 
                err ? console.log(err) : console.log('Successfully appended file!')
                ); 
          break;
        case 'Employee':
          fs.appendFile('./dist/test.html',((`
          <div class="card">
              <div class="head">
                  <h2>${teamMembers[i].name}</h2>
                  <h2>${teamMembers[i].role}</h2>
              </div>
              <div>
                  <ul>
                      <li>Id: ${teamMembers[i].id}</li>
                      <li>Email: ${teamMembers[i].email}</li>
                  </ul>
              </div>
          </div>`)),(err) => 
          err ? console.log(err) : console.log('Successfully appended file!')
          );
          break;
        case 'Engineer':
          fs.appendFile('./dist/test.html',((`
          <div class="card">
              <div class="head">
                  <h2>${teamMembers[i].name}</h2>
                  <h2>${teamMembers[i].role}</h2>
              </div>
              <div>
                  <ul>
                      <li>Id: ${teamMembers[i].id}</li>
                      <li>Email: ${teamMembers[i].email}</li>
                      <li>Github: ${teamMembers[i].github}</li>
                  </ul>
              </div>
          </div>`)),(err) => 
          err ? console.log(err) : console.log('Successfully appended file!')
          );           
          break;
        case 'Intern':
          fs.appendFile('./dist/test.html',((`
          <div class="card">
              <div class="head">
                  <h2>${teamMembers[i].name}</h2>
                  <h2>${teamMembers[i].role}</h2>
              </div>
              <div>
                  <ul>
                      <li>Id: ${teamMembers[i].id}</li>
                      <li>Email: ${teamMembers[i].email}</li>
                      <li>School: ${teamMembers[i].school}</li>
                  </ul>
              </div>
          </div>
    </main>
</body>
</html`)),(err) => 
          err ? console.log(err) : console.log('Successfully appended file!')
          );
          break;          
      
        default:
          console.log('fail')
          break;
      }        
      }, 100);
      }      
    }
      // probably call a function, passing in your team members array - send it to another js file 

  
    // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked
  
    createManager();
  }

init();