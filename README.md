# Recipes Chest - A Chest of Yummy Recipes

A back-end part of the application recipes chest. Built with NodeJS, ExpressJS, Mongoose and MongoDB.

## Installation and Setup Instructions

I used the npm to install express, mongoose, nodemon, dotenv and cors. In order to install these libraries, run the following command in your terminal:

```bash
npm i express cors mongoose nodemon dotenv
```

To install the locally, run the following command in your terminal:

```bash
npm install
```

To run the backend, use the following command:

```bash
nodemon server
```

You can visit the App at:

- Backend: https://recipe-chest.onrender.com/api/recipes
- Frontend: https://recipe-chest-fronend.onrender.com/

## Technology Used

Back-End :

- ExpressJS
- Mongoose
- NodeJS
- dotenv
- cors

## User Stories

- Users can Create a recipe using Create recipe option
- Users can See the available recipes and their details
- Users can edit/Update a recipe
- Users can delete a recipe
- Users can search for recipes by entering the ingredients they have available at home.

## UI

Application : ![Alt text](./public/UI.png/)

## Description

This was the final project in the Software Engineering Bootcamp. The project's goal was to incorporate all the technologies learned during the Bootcamp and implement a full-stack CRUD application.

My objective was to build a full-stack application that fetches data from my backend API and displays it in the frontend. I initiated this process by installing all the necessary libraries for the backend. To maintain clean and organized code, I structured the project into Models-Views-Controllers. Finally, I used routes to handle incoming requests properly and stored my Mongo URI securely in the .env file.

One of the main challenges I encountered was when I uploaded my frontend to render.com. I kept receiving an error message stating that my database string was invalid. Troubleshooting this error was time-consuming, but I eventually discovered that the issue was related to the environment variable settings on render.com. After correcting the environment variable, the problem was resolved.

Another challenging task for me was creating a design that is visually appealing and modern for users. After spending a considerable amount of time researching online and studying other people's designs, I developed an idea for my project's UI design. I used a Paint application to create my initial design and found the color scheme for my project on colorhunt.com.

Furthermore, I encountered an issue related to converting a string into an array after receiving a list of ingredients from an input field. My ingredient field in my Model is an array, but the input field only provides data in string format. This required me to convert the data from a string to an array in React and then store it in the database. This process proved to be quite challenging. After conducting research on the internet and reading through similar problems on Stack Overflow, I managed to resolve the issue by performing type casting on the variable.

In summary, the technologies implemented in the backend part of the project include Express, Mongoose, Express Router, Node.js, CORS, and DOTENV. I chose to start the project by creating 'server.js' and used 'npm init -y' to generate a 'package.json' file.

## Future Enhancements:

In the next iteration, I plan to implement JWT authentication and authorization features. This will ensure that only authorized users can access their recipes, and I will also work on adding a login and signup feature.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

I would like to thank my instructor, Tishana Trainor, for assigning me this challenging project. I would also like to express my gratitude to Manara Ali for his assistance in creating this project and helping me resolve any issues I encountered along the way.
