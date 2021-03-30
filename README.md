# E-commerce back-end interract with data

## Table of contents
- [Description](#Description)
- [User Story](#User/Story)
- [Installation](#Installation)
- [Usage](#Usage)
- [Framework HTML/JS](#Framework)
- [Credits](#Credits)
- [Contributors](#Contributing)

## Illustration
sample with categories...
![sampleReadme](/Assets/categories-ill.gif)


## Description

A back end app for an e-commerce site that will be able to connect to the DataBase synced with Sequelize models that can interact so the user can: get, create, update and delete data from database...
   
## User/Story  
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Video_demonstration

[![video](/Assets/screenshot.png)](https://www.youtube.com/watch?v=Nq5AwY2l3cU "Video demonstration")

## Installation
```md
git clone <https://github.com/VictorCodrean/E_Commerce_Back_End.git> (to get the code)
npm i              (to install dependencies (...mysql2, sequelize, express, dotenv)) 
node <server.js>       (to run the program)
```

## Usage
```md
* Run the app: node server.js/ npm start
  It will start the app and by following api-routes
  can interract with DataBase
* Base options
  * GET ALL/ById - categorie(s), product(s) and tag(s)

  * POST - categories, products and tags

  * UPDATE - categories, products and tags

  * DELETE - categories, products and tags
```
## Framework
* JS - code:
    * modules imported...
        ```
        STARS OF THE SHOW - models that helps to interract with data in DataBase

        const { Model, DataTypes } = require('sequelize');
        const router = require('express').Router();

        const mysql = require("mysql");
        const express = require('express');
        require("dotenv").config()
        const sequelize = require("sequelize");

            ...
        ```
    * router
         ```
       router.get("/", () => {
         ...
       });

       router.post("/", () => {
         ...
       });

       router.put("/:id", () => {
         ...
       });

       router.delete("/:id", () => {
         ...
       });
        ```

    * Model
         ```
          class Category extends Model { }

           Category.init(
          {
           id: {
            ...
          }
          }
        ```
     
## Credits
 * - [StackOverFlow-ORM](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one)
 * - [Npm-mysql](https://www.npmjs.com/package/mysql)
 * - [edureka](https://www.edureka.co/blog/rest-api-with-node-js/)

## Directory
* [GitHub Source](https://github.com/VictorCodrean/E_Commerce_Back_End)

## Contributing
Victor Codrean    
*  [Repository link:](https://github.com/VictorCodrean/E_Commerce_Back_End)

Asking me any questions:

<a href="mailto:codreanvictor@gmail.com" style="text-decoration:none"><img height="20" src = "https://img.shields.io/badge/Gmail-c14438?&style=for-the-badge&logo=gmail&logoColor=white&style=plastic"></a>

[<img height="20" src="https://img.shields.io/badge/-GitHub-black.svg?&style=for-the-badge&logo=github&logoColor=white&style=plastic"/>](https://github.com/VictorCodrean)
