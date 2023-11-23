[![Continuous Integration](https://github.com/Olenka-Hryk/cicd-pipeline-github-actions/actions/workflows/build-and-test.yml/badge.svg)](https://github.com/Olenka-Hryk/cicd-pipeline-github-actions/actions/workflows/build-and-test.yml)


[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Olenka-Hryk_cicd-pipeline-github-actions)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Olenka-Hryk_cicd-pipeline-github-actions&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Olenka-Hryk_cicd-pipeline-github-actions)


# Description
This project is the Node.js backend part of an educational  project. It provides connection to DB, implements CRUD operations and sends responses to requests. 
## Setup
To set up the project, first run `npm install` then you can start server using `npm start -- --p 5000 --cp 3000` or `node index.js --p 5000 --cp 3000`, where `--p` is server port and `--cp` is client port. Alternatively, you can use .env file to configure the ports. The variables in the `.env` file are `PORT`and `CLIENT_PORT`. In order to obtain a configuration file, you can rename the [.env.example](./.env.example) into `.env`. 

Good luck!
