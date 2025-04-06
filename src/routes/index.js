const { Router } = require("express");
const router = Router();

// Datos simulados en memoria
let usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
];

// GET - Obtener todos los usuarios
router.get("/health", (req, res) => {
  res.json({ status: "alive" });
});

// GET - Obtener todos los usuarios
router.get("/users", (req, res) => {
  res.json(usuarios);
});

// GET - Obtener un usuario por ID
router.get("/users/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario)
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  res.json(usuario);
});

// POST - Crear un nuevo usuario
router.post("/users", (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
  };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// PUT - Actualizar un usuario existente
router.put("/users/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (!usuario)
    return res.status(404).json({ mensaje: "Usuario no encontrado" });

  usuario.nombre = req.body.nombre;
  res.json(usuario);
});

// DELETE - Eliminar un usuario
router.delete("/users/:id", (req, res) => {
  usuarios = usuarios.filter((u) => u.id !== parseInt(req.params.id));
  res.status(204).send();
});

module.exports = router;
