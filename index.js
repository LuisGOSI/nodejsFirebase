var express=require("express");
var rutas=require("./routes/usuariosRutas");
var rutaspr=require("./routes/productosRutas");

var app=express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", rutas);
app.use("/productos", rutaspr);

var port=process.env.port || 3000;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port);
});
