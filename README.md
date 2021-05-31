# GitHub GraphQL API

## 🧐 About <a name = "about"></a>

This app allows users dynamically search GitHub repos under their account.

The following Informations are displayed:

1. GitHub  username
2. Numbers of repos to be display according to the users's setting.
3. Licence under the repo.
4. Search repos.






## 🎈 Usage <a name="usage"></a>

A db.tsx file will need to created under the src folder.

Example of  the db.tsx:

```
const github = 
{
    baseURL: 'https://api.github.com/graphql',
    username: YOUR GITHUB USERNAME,
    headers: 
    {
        'Content-Type': 'application/json',
        Authorization: 'bearer AUTH TOKEN FROM GITHUB',
    },
};

export default github;
```

## 🚀 Start The Program <a name = "deployment"></a>

To start the program you will need to go to the program directory and open up your terminal and

1. Type `npm install` to download all the dependencies.
2. Type `npm start` to start the app.
3. Go to http://localhost:3000 and you will see the app running.

## ⛏️ Tech Stack <a name = "built_using"></a>

- Typescript
- React
- Bootstrap

