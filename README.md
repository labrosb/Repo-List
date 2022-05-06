# Repo-List

A simple app that presents a list of react related GitHub repositories, consuming the GitHub GraphQL API.

## Installation

- Clone the current repository
- Open a terminal, navigate to the repository and execute `npm install`, to install the project dependencies
- `Generate a .env` file in the root of the project and add the values `REACT_APP_API_URL` and `REACT_APP_GITHUB_ACCESS_TOKEN` (as they are in .env.example) 
  - The first value is `REACT_APP_API_URL=https://api.github.com/graphql` and its the URL to be used to communicate with the GitHub GraphQL API.
  - The second value is the access token, which you need to generate through your account. Follow the link for instructions https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token .

## Run
- To run the app, execute `npm run start`.
- To run the tests, execute `npm run test`. 
