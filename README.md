Welcome. Here you can see how to use this restful api server on your machine

First, this project built with expressjs, with based on node.js

To run the program, open terminal (linux, macos) or use gitbash for windows

Point it using cd to the /node folder

Start apache and mysql from xampp control panel

Import mysql database named db_norestapi to localhost/phpmyadmin

In this project i use nodemon package to help me with server restart if there is new change(s) to the file 

To start the program, please type npm start in terminal

Open chrome browser

Type localhost:3000 to check if the program is running correctly

In this program you can get the movie poster url from OMDBapi

To change the title of the movie, open controller.js and change the value of title in line 6

Type localhost:3000/view to see all data from table favorite_movies

To send request to OMDBapi here i use axios package

You can use postman to POST to localhost:3000/movies/favorite which can add your favorite movies to database. But unfortunately i still can't get the url needed from OMDBapi

I also have tried to implement ORM using Sequelize, auth bearer token, and pino logger middleware but i do not have enough time to figure it out how to do it correctly.

Last thing i wanted to tell you, this is my first project using node.js. However i am very happy to learn new things and i have big interest in it. I will be very grateful if i accepted to this internship program so i can learn and grow together with your team.