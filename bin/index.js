#! /usr/bin/env node  
// shebang line
//./bin/index.js
//basic CLI check!

//development of npm scraper

//NPM'S
const colors = require("colors");
//const emoji = require("node-emoji");
let fs = require("fs");
const path = require("path");
//ruta relativa.
let myPath = process.argv[2]
//ruta absoluta
const myAbsPath = require("path").resolve();
//unir argumento con el path
let route= myPath

let options = { validate: false, stats: false };


//determinar si la ruta ingresada es absoluta, si no, transformarla.
function mdLinks(route, options) {
  let arrValidate = [];
  if (route.isAbsolute) {
    fs.readdir(route, (err, files) => {
      if (err) {
        console.log("error: ", err);
      } else {
        files.forEach((file) => {
          //leer los archivos específicos que terminen en .md
          if (route.extname(file) === ".md") {
            fs.readFile(route + file, "utf-8", (err, data) => {
              if (err) {
                console.log("error: ", err);
              } else {
                console.log(data);
              }
            });
            //validate -- stats
            if (myPath === '--validate') {
              options.validate = true;
              return response.forEach((element) => {
                fetch(element.href)
                  .then((res) => {
                    arrValidate.push(element);

                    if (res.status === 200) {
                      return console.log(
                        `File: ${element.file.magenta} \n Link: ${res.url.cyan} \n Status: ${res.statusText.bgGreen} ${res.status}  ${element.text.yellow}`
                      );
                    } else if (res.status === 404) {
                      return console.log(
                        ` File: ${element.file.blue} \n Link: ${element.href.cyan}   \n Status: ${res.statusText.bgRed} ${res.status}  ${element.text.yellow}`
                      );
                    }
                  })
                  .catch((err) => {console.log (`File: ${element.file.blue} \n Link: ${element.href.bgRed} ${element.text.red}  <--- Enlace No Válido o con Problemas`
                    );
                  });
              });
            }
          } else if (process.argv[3] === '--stats') {
            options.stats = true;
            let urlArray = [];
            response.forEach(element => {
              urlArray.push(element.href)
            })
            console.log(`El total de links en el archivo ${fileUser.cyan} es: ${urlArray.length}`);

          } else {
            return response.forEach((element) => {
              let file = element.file,
                href = element.href,
                text = element.text;
              return console.log(file.blue + ' ' + text.yellow + ' ' + href.green);
            });
          }
        });
      }
    });
  } 
}
// console.log('myPath: '+myPath)
// console.log(`${myAbsPath}`)
//console.log(route)

//mdLinks(route)


//modularizar (meter todo dentro de una funcion para recibir los argumentos de la usuaria) aceptar los comandos que me de la usuaria (process.args)
//gestionar la ruta de una carpeta o archivo
//hacer una peticion y verificar si son correctas
//http get 

console.log(route);