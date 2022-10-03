#! /usr/bin/env node  
// shebang line
//./bin/index.js
//basic CLI check!

//development of npm scraper

//NPM'S
//const chalk = require("chalk");
//const emoji = require("node-emoji");
let fs = require("fs");
const path = require("path");
const argv = require("yargs")
.usage("Count the links in a file.\nUsage: $0")
.example("$0 -f", "count the links in the given file")
.demand("f")
.alias("f", "file")
.describe("f", "Load a file").argv;

let s = fs.createReadStream(argv.file);

  //aceptar parametros segun el usuario
  //carpeta donde se están guardando los archivos
  const filesTest = "./filesTest/";
  const dirPath = path.join(__dirname, filesTest);
  //comprobar si la ruta es absoluta o relativa
  if (path.isAbsolute(dirPath)) {
    //mostrar los archivos que hay en la carpeta
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.log("error: ", err);
      } else {
        files.forEach((file) => {
          console.log(file);
          //leer los archivos específicos que terminen en .md
          if (path.extname(file) === ".md") {
            fs.readFile(dirPath + file, "utf-8", (err, data) => {
              if (err) {
                console.log("error: ", err);
              } else {
                console.log(data);
                let links = 0;
                let noValid = 0;
                s.on("data", function (buf) {
                  links += buf.toString().match(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).length;
                  noValid += !buf.toString().match(/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/).length;
                  });
                s.on("end", function () {console.log(`${links} links with appropiate safety protocol included in this document \n${noValid} links are not valid.`
                  );
                });
              }
            });
          } else if (path.extname(file) !== ".md") {
            return false;
          }
        });
      }
    });
  } else {
    //transformar la ruta a absoluta si es relativa
    path.resolve("/Users/enchantress/Desktop/Laboratoria/SCL021-md-links/", dirPath);
  }


//modularizar (meter todo dentro de una funcion para recibir los argumentos de la usuaria) aceptar los comandos que me de la usuaria (process.args)
//gestionar la ruta de una carpeta o archivo
//hacer una peticion y verificar si son correctas
//http get 
