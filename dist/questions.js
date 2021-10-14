import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';
import fs from 'fs';

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
        write(generateMarkdown(data))
    )

const write = (data) => {
    fs.writeFile('../README.md', data, (err) =>{
        if (err){
            throw err;
        };
    })
}


