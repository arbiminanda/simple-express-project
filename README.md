# Simple Express Project

This is express project to demonstrate simple https request functionality

# Project Structure

```
server.js                   main express project file, contains all method that apps can handle
index.html                  simple html file to show about details
calculator.html             simple calculator apps that send post request when user click submit
```

# Paths

```
GET - /                      home
GET - /contact               show contact text as response
GET - /about                 show index.html as response
GET - /calculator            show calculator.html as response
POST - /calculator           parse and handle post request from calculator.html
```

# Run Script

- Open terminal/cmd, go to the project directory and install all dependencies

```
npm install
```

- Run this command to run the server:

```
nodemon server.js
```
