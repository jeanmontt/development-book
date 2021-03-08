const express = require('express');

const routes = express.Router();

//INDEX
routes.get("/", (req, res) => {
  return res.render("index");
});

//HTML
routes.get("/html", (req, res) => {
  return res.render("techs/html/00_index");
});
routes.get("/html/conteudo", (req, res) => {
  return res.render("techs/html/01_subjects-layout");
});

module.exports = routes;