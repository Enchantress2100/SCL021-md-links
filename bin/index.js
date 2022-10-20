#! /usr/bin/env node  
// shebang line
//./bin/index.js
//basic CLI check!

//development of npm scraper

//NPM'S
let fs = require("fs");

//parametro que se esta pasando, puede ser relativo o absoluto
const path = require("path");

//transformar a ruta absoluta
//todo lo que es linea de comandos
//la ruta relativa ingresar sin / para que se ejecute bien
let myPath = process.argv[2]
console.log(myPath)
const myPath2 = process.argv[3];


//rutas disponibles para probar
//Users/enchantress/Desktop/Laboratoria/SCL021-md-links/filesTest/
//filestest/

//para validar los links
let validRegex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

//determinar si la ruta ingresada es absoluta, si no, transformarla.
const mdLinks = () => {
  if (path.isAbsolute(myPath)) {
    // Function to get current filenames in directory
    let filenames = fs.readdirSync(myPath);
    console.log("Filenames in directory:");
    filenames.forEach((file) => {
      console.log("File:", file);
      if (file.includes(".md")) {
        console.log("este es un archivo Markdown");
          fs.readFile(myPath + file, "utf-8", (err, data) => {
            if (err) {
              console.log("error: ", err);
            } else {
              console.log(data);
              //cuantificar links y validarlos
              if (myPath2.includes("--validate")) {
                let links = 0;
                links += data.match(validRegex).length;
                console.log(`Hay un total de ${links++} links válidos`);
                let noValid = 0;
                noValid += !/validRegex/.test(data).length;
                console.log(`Hay un total de ${noValid++} links inválidos`);
              }
              return data;
            }
          });
      } else {
        console.log("este archivo no es markdown");
        return false
      }
    });
  } else {
    let absolute = path.resolve(myPath);
    console.log(absolute);
    // Function to get current filenames in directory
    let filenames = fs.readdirSync(absolute);
    console.log("Filenames in directory:");
    filenames.forEach((file) => {
      console.log("File:", file);
      if (file.includes(".md")) {
        console.log("este es un archivo Markdown");
          fs.readFile(absolute + "/" + file, "utf-8", (err, data) => {
            if (err) {
              console.log("error: ", err);
            } else {
              console.log(data);
              //cuantificar links y validarlos
              if (myPath2.includes("--validate")) {
                let links = 0;
                links = data.match(validRegex).length;
                console.log(`Hay un total de ${links++} links válidos`);
                let noValid = 0;
                noValid = !/validRegex/.test(data).length
                console.log(`Hay un total de ${noValid++} links inválidos`);
                return data;
              }
            }
          });
      } else {
        console.log("este archivo no es markdown");
        return false
      }
    });
  }
}
mdLinks()

