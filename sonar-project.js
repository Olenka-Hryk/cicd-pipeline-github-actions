require("dotenv").config();

const sonarqubeScanner = require('sonarqube-scanner');
 sonarqubeScanner({
 serverUrl: 'http://localhost:9000',
 options: {
   'sonar.projectKey': 'code-inspection-sonarqube',
   'sonar.host.url': 'http://localhost:9000',
   'sonar.login': process.env.SONAR_TOKEN,
   },
 }, () => {
 console.log('Error Occurred while scanning');                    
 });