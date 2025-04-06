const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

// setup
const app = express();
const PORT = process.env.PORT || 3000
const swaggerDocument = YAML.load('./docs/openapi.yml');

// config
app.set('port', PORT);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routes
app.use(require('./routes/index.js'));

// start server
app.listen(PORT, () => {
    console.log(`starting server on port ${PORT}`);
    console.log(`Documentación de la API disponible en http://localhost:${PORT}/api-docs`);
});