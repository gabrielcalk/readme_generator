function generateMarkdown({proj_name, license, link, description, technology, author, usage, github, email, video}) {
    return`# Name: ${proj_name}

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

${video}


## *Questions*
For Any Questions About The Project, Please Contact Me In:
${email}

Don't forget to follow me on my GitHub: ${github}
`
}

export default generateMarkdown;
