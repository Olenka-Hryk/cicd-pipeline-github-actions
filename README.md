[![Continuous Integration](https://github.com/Olenka-Hryk/cicd-pipeline-github-actions/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/Olenka-Hryk/cicd-pipeline-github-actions/actions/workflows/build-and-test.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)

# Description
This project is the Node.js backend part of an educational  project. It provides connection to DB, implements CRUD operations and sends responses to requests. 
## Setup
To set up the project, first run `npm install` then you can start server using `npm start -- --p 5000 --cp 3000` or `node index.js --p 5000 --cp 3000`, where `--p` is server port and `--cp` is client port. Alternatively, you can use .env file to configure the ports. The variables in the `.env` file are `PORT`and `CLIENT_PORT`. In order to obtain a configuration file, you can rename the [.env.example](./.env.example) into `.env`. 

Good luck!
