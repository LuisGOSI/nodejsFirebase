var rutapr = require("express").Router();
const { id } = require("../database/conexion").conexionpr;
var {
  mostrarProductos,
  nuevoProducto,
  borrarProducto,
  modificarProducto,
  buscarPorIDPr,
} = require("../database/productosbd");

rutapr.get("/productos/mostrarproductos", async (req, res) => {
  var productos = await mostrarProductos();
  res.render("productos/mostrarpr", { productos });
});

rutapr.get("/productos/nuevoproducto", (req, res) => {
  res.render("productos/nuevopr");
});

rutapr.post("/productos/nuevoproducto", async (req, res) => {
  var error = await nuevoProducto(req.body);
  res.redirect("/productos/productos/mostrarproductos");
});

rutapr.get("/productos/editarPr/:id", async (req, res) => {
  var product = await buscarPorIDPr(req.params.id);
  res.render("productos/modificarPr", { product });
});

rutapr.post("/productos/editarPr", async (req, res) => {
  var error = await modificarProducto(req.body);
  res.redirect("/productos/productos/mostrarproductos");
});

rutapr.get("/productos/borrarPr/:id", async (req, res) => {
  await borrarProducto(req.params.id);
  res.redirect("/productos/productos/mostrarproductos");
});

module.exports = rutapr;
