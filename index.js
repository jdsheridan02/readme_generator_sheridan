const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js")

const badge = ("https://img.shields.io/github/languages/top/jdsheridan02/readme_generator_sheridan")

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
        message: "Do you need to add a table of contents? What are the sections of your project?"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How is your project supposed to be used?"
    },
    {
        type: "input",
        name: "License",
        message: "Do you want to open your project for other developers to share, use, and improve?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "How would you like other developers to contribute to your project?"
    },
    {
        type: "input",
        name: "Tests",
        message: "Did you create tests for your project? Can you elaborate?"
    },
    {
        type: "input",
        name: "Questions",
        message: "Do you have any questions that you couldnt find the answer to when working on your project?"
    },
];


// function to write README file
function writeToFile(fileName, data) {
    const template = generateMarkdown(data);

    fs.writeFile(fileName, template, function (err) {
        if (err) { throw err };
        console.log("file written!")
    })
    questions.push(badge)
    console.log("waiting for file")
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (data) {
        console.log(data);
        const fileName = "readme.md";
        writeToFile(fileName, data);
    })
}

// function call to initialize program
init();
