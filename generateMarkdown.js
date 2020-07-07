// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
   ${data.Description}
  ### ${data.TableofContents}
  #### ${data.Installation}
  #### ${data.Usage}
  ### ${data.License}
   ${data.Contributing}
   ${data.Tests}
   ${data.Questions}
`;
}

module.exports = generateMarkdown;
