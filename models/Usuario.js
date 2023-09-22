class Usuario {
  constructor(id, data) {
    // console.log(data);
    this.bandera = 0;
    this.id = id;
    this.nombre = data.nombre;
    this.usuario = data.usuario;
    this.password = data.password;
  }
  set id(id) {
    if (id != null) id.length > 0 ? (this._id = id) : (this.bandera = 1);
  }
  set nombre(nombre) {
    // console.log("Hola");
    // console.log(nombre);
    nombre.length > 0 ? (this._nombre = nombre) : (this.bandera = 1);
  }
  set usuario(usuario) {
    usuario.length > 0 ? (this._usuario = usuario) : (this.bandera = 1);
  }
  set password(password) {
    password.length > 0 ? (this._password = password) : (this.bandera = 1);
    // console.log(this._password);
  }
  get id() {
    return this._id;
  }
  get nombre() {
    return this._nombre;
  }
  get usuario() {
    return this._usuario;
  }
  get password() {
    return this._password;
  }
  get obtenerDatos() {
    if (this._id != null) {
      return {
        id: this.id,
        nombre: this.nombre,
        usuario: this.usuario,
        password: this.password,
      };
    } else {
      return {
        nombre: this.nombre,
        usuario: this.usuario,
        password: this.password,
      };
    }
  }
}

module.exports = Usuario;
