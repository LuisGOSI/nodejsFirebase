var ruta = require("express").Router();
const { id } = require("../database/conexion");
var {
  mostrarUsuarios,
  nuevoUsuario,
  buscarPorID,
  modificarUsuario,
  borrarUsuario,
} = require("../database/usuariosbd");

ruta.get("/", async (req, res) => {
  var usuarios = await mostrarUsuarios();
  // console.log(usuarios);
  res.render("usuarios/mostrar", { usuarios });
  // console.log(usuarios);
});

ruta.get("/nuevousuario", async (req, res) => {
  res.render("usuarios/nuevo");
});

ruta.post("/nuevousuario", async (req, res) => {
  var error = await nuevoUsuario(req.body);
  res.redirect("/");
});

ruta.get("/editar/:id", async (req, res) => {
  var user = await buscarPorID(req.params.id);
  console.log(user);
  res.render("usuarios/modificar", { user });
});

ruta.post("/editar", async (req, res) => {
  var error = await modificarUsuario(req.body);
  res.redirect("/");
});

ruta.get("/borrar/:id", async (req, res) => {
  await borrarUsuario(req.params.id);
  res.redirect("/");
});

module.exports = ruta;
