const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
        {
            type: 'input',
            message: 'Tell me the name of your project: ',
            name: 'proj_name',
        },

        {
            type: 'rawlist',
            message: 'What license do you want in your project?: ',
// Top 5 licenses on Github - from: https://github.blog/2015-03-09-open-source-license-usage-on-github-com/
            choices: ['mit', 'ms-pl', 'gpl-2.0', 'apache-2.0', 'gpl-3.0'],
            name: 'license',
        },

        {
            type: 'input',
            message: 'What is the link of your project?: ',
            name: 'link',
        },

        {
            type: 'input',
            message: 'Tell me more about your project (description): ',
            name: 'description',
        },

        {
            type: 'input',
            message: 'Type the names of the languages ​​and frameworks you use in the project (use "," to separate): ',
            name: 'technology',
        },

        {
            type: 'input',
            message: 'Say the names of the people who were involved in the project: ',
            name: 'author',
        },

        {
            type: 'input',
            message: 'Describe how a user can use your application: ',
            name: 'usage',
        },

        {
            type: 'input',
            message: 'Type your github profile URL: ',
            name: 'github',
        },

        {
            type: 'input',
            message: 'Type your e-mail: ',
            name: 'email',
        },
    ])
    .then((data) => 
        add_information(data)
    )

var add_information = ({proj_name, license, link, description, technology, author, usage, github, email}) => {

    var informations = 
`# Name: ${proj_name}

${license} cover this project.

<img src='https://img.shields.io/badge/${license}-badge-yellow'>
    

# link: ${link}
    

## *Table of Contents*
- [Description](#description)
- [Technologies](#technologies)
- [Author's](#authors)
- [Usage](#usage)
- [Questions](#questions)
    


## *Description*
${description}



## *Technologies*
${technology}



## *Authors*
${author}



## *Usage*
${usage}


## *Questions*
For Any Questions About The Project, Please Contact Me In:
${email}

Don't forget to follow me on my GitHub: ${github}
`

    fs.writeFile('../README.md', informations, (err) =>{
        if (err){
            throw err;
        };
    })
}

