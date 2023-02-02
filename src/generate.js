// Create team

const generateTeam = (team) => {
    
    // Create manager in html

    const generateManager = (manager) => {
      return `
      
      <div class="card">
          <h1>
              ${manager.getName()}
          </h1>
          <h2>
              Manager 💼
          </h2>
          <ul>
              <li>ID: ${manager.getId()}</li>
              <li>Email: <a href="mailto:${manager.getEmail()}">  ${manager.getEmail()} </a> </li>
              <li>Office Number: ${manager.getOfficeNumber()} </li>
          </ul>
      </div>
      
              `;
    };
  
    // Create engineer in html

    const generateEngineer = (engineer) => {
      return `
      
        <div class="card">
            <h1>
                ${engineer.getName()}
            </h1>
            <h2>
                ${engineer.getRole()} 💻
            </h2>
            <ul>
                <li>ID: ${engineer.getId()}</li>
                <li>Email: <a href="mailto:${engineer.getEmail()}">  ${engineer.getEmail()} </a> </li>
                <li>Github: <a href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()} </a> </li>
            </ul>
        </div>
          `;
    };
    
    // Create Intern in html

    const generateIntern = (intern) => {
      return `
      
        <div class="card">
            <h1>
                ${intern.getName()}
            </h1>
            <h2>
                ${intern.getRole()} 🎓
            </h2>
            <ul>
                <li>ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}">  ${intern.getEmail()} </a> </li>
                <li>School: ${intern.getSchool()} </li>
            </ul>
        </div>
          `;
    };
  
    // Push each role into html

    const html = [];
  
    team.forEach((employee) => {
      let roleHtml = "";
      if (employee.getRole() === "Manager") {
        roleHtml = generateManager(employee);
      } else if (employee.getRole() === "Engineer") {
        roleHtml = generateEngineer(employee);
      } else if (employee.getRole() === "Intern") {
        roleHtml = generateIntern(employee);
      }
      if (roleHtml) html.push(roleHtml);
    });
  
    return html.join("");
  };

  // Export

  module.exports = (team) => {
    return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
    <div class="header">
        <h1>My Team</h1>
    </div>
    <div class="container">
    ${generateTeam(team)}
    </div>
    </body>
    </html>
        `;
  };