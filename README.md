# API REST en Node.js con Express

Este proyecto es una API REST simple creada con **Node.js** y **Express**. Realiza operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de usuarios simulados.

## Requisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

- **Node.js** (al menos versión 14.0)
- **npm** (que viene con Node.js)

Si no tienes **Node.js** instalado, puedes descargarlo desde [aquí](https://nodejs.org/).

## Instalación

### 1. Clonar el repositorio

Primero, clona el proyecto o simplemente descarga los archivos.

```bash
git clone https://github.com/storresoliv/simple-rest-api.git
cd simple-rest-api
```
### 2. Instalar dependencias

Dentro del directorio del proyecto, instala las dependencias necesarias ejecutando:

```bash
npm install
```

Esto instalará Express, que es el framework utilizado para crear la API.

### 3. Iniciar el servidor

Una vez que las dependencias estén instaladas, puedes iniciar el servidor ejecutando:

```bash
npm start
```
El servidor estará disponible en `http://localhost:3000/`.

## Documentación de la API

La documentación interactiva de la API está disponible a través de Swagger UI. Puedes acceder a ella en el siguiente enlace:

http://localhost:3000/api-docs

La documentación se genera a partir del archivo OpenAPI (openapi.yml), que describe todos los endpoints disponibles en la API, sus parámetros, respuestas y ejemplos.

## Endpoints disponibles
### 1. GET /users

Obtiene todos los usuarios.

Respuesta:
```json
[
  { "id": 1, "nombre": "Ana" },
  { "id": 2, "nombre": "Luis" }
]
```

### 2. GET /users/:id

Obtiene un usuario por su ID.

Ejemplo:

    Solicitar: GET http://localhost:3000/users/1

    Respuesta:

```json
{ "id": 1, "nombre": "Ana" }
```

### 3. POST /users

Crea un nuevo usuario.

Ejemplo:

    Solicitar: POST http://localhost:3000/users

    Con cuerpo (Body) en formato JSON:

```json
{
  "nombre": "Carlos"
}
```

    Respuesta:

```json
{ "id": 3, "nombre": "Carlos" }
```

### 4. PUT /users/:id

Actualiza un usuario existente por su ID.

Ejemplo:

    Solicitar: PUT http://localhost:3000/users/1

    Con cuerpo (Body) en formato JSON:

```json
{
  "nombre": "Ana actualizada"
}
```

    Respuesta:

```json
{ "id": 1, "nombre": "Ana actualizada" }
```

### 5. DELETE /users/:id

Elimina un usuario por su ID.

Ejemplo:

    Solicitar: DELETE http://localhost:3000/users/1

    Respuesta: 204 No Content (sin cuerpo de respuesta).

Probar en el Navegador

Puedes probar los endpoints GET directamente en el navegador:

    Abre el navegador y ve a http://localhost:3000/users para obtener todos los usuarios.

    Abre el navegador y ve a http://localhost:3000/users/1 para obtener el usuario con ID 1.

Para los demás métodos como POST, PUT y DELETE, puedes usar herramientas como Postman, Insomnia o curl para enviar las solicitudes.
Usar curl desde la terminal:

    Para obtener todos los usuarios:

curl http://localhost:3000/users

    Para crear un nuevo usuario:

curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"nombre": "Carlos"}'

    Para actualizar un usuario:

curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"nombre": "Ana actualizada"}'

    Para eliminar un usuario:

curl -X DELETE http://localhost:3000/users/1

Detalles adicionales
Middleware

El proyecto incluye un middleware para parsear el cuerpo de las solicitudes JSON usando express.json().
Créditos

    Express: https://expressjs.com

    Node.js: https://nodejs.org