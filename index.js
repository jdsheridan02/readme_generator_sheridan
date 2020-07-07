const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js")
// array of questions for user

const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Describe your application/project"
    },
      {
        type: "input",
        name: "TableofContents",
        message: "aasd"
      },
      {
        type: "input",
        name: "Installation",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "Usage",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "License",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "Contributing",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "Tests",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "Questions",
        message: "What is the title of your project?"
      },
];


// function to write README file
function writeToFile(fileName, data) {
    const template = generateMarkdown(data);

    fs.writeFile(fileName, template, function(err){
        if (err) {throw err};
        console.log("file written!")
    })

    console.log("waiting for file")
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(data){
        console.log(data);
        const fileName = "readme.md";
        writeToFile(fileName, data);
    })
}

// function call to initialize program
init();
