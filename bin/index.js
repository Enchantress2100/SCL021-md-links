#! /usr/bin/env node  
// shebang line
//basic CLI check!

//development of npm scraper

//carpeta donde se están guardando los archivos
const filesTest = "./filesTest/";

//NPM'S
let fs = require("fs");
const path = require("path");
//const chalk = require("chalk");
//const emoji = require("node-emoji");
const dirPath = path.join(__dirname, filesTest)

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
           }
         });
      } else if (path.extname(file) !== ".md") {
        return false
      }
    })
  }
});
} else {
  //transformar la ruta a absoluta si es relativa
  path.resolve('/Users/enchantress/Desktop/Laboratoria/SCL021-md-links/', dirPath)
}

