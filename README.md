# Backend-Proyect-CRUD

En este proyecto se va a abarcar el uso de frameworks y middleworks, en base a Javascript para poder hacer un servidor, rutas y controladores que nos ayudaran a la creacion de una API, a continuacion se dara a conocer toda la documentacion y procesos que se realizaron para lograr que el proyecto CRUD, tenga lista una API que pueda ser implementada en un proyecto Frontend.

## Requisitos | Dependencias y Dependencias de Desarollo

-  Express
-  Node.js
-  MongoDB - Base de Datos - Atlas
-  Mongoose
-  Dotenv
-  Morgan - Desarrollo
-  Nodemon - Desarrollo

## Proceso

1. Crear un repositorio en GitHub y enlazarlo con el repositorio local en el que estamos trabajando.
2. Iniciar un proyecto Node con el comando `npm init`.
3. Instala las dependencias con el comando `npm install` mas el nombre de la dependencia.
4. Para las dependencias de desarrollo se utiliza el mismo comando que el anterior punto pero al final de incluye un `-D`.
5. Se crea un archivo `.gitignore` para que todo lo correspondiente a las dependencias no se suba a el repositorio GitHub y el trabajo se vea mas limpio, en este caso pondremos dentro `node_modules`.
6. Se crea el archivo de entrada `Index.js`.
7. Se crea el archivo de variables de entorno `.env` donde se pondra la linea de codigo que enlazara nuestro servidor con nuestra base de datos, este tambien ira dentro del `.gitignore` ya que puede contener datos que vulneran nuestro servidor.
8. Se va a crear otro archivo `.env_variables` el cual solo tendra los nombres de las variables de entorno que utilizamos para dar una guia.
9. Apartir de este punto se decidira si vamos a manejar varios archivos para manejar y mantener nuestro codigo, o solo en un archivo colocar todo, en este caso se hace el manejo de varios archivos como por ejemplo.
   -  server.js
   -  connectionDB.js
   -  routesGames.js - Dentro de Carpeta
   -  gameModel.js - Dentro de Carpeta
   -  driversGames.js - Dentro de Carpeta

## Configuración

1. En el archivo `package.json` se pone `"type": "module"` para poder hacer uso de modularizacion en el proyecto.
2. En el archivo `package.json` en `scripts` se pone `"dev": "nodemon <archivo de entrada>"` para que se pueda correr el servidor con nodemon.

## Uso

1. Inicia el servidor: `npm run dev`
2. La API estará disponible en `http://localhost:2604` , la ruta raiz por el momento no tiene validacion y se tendra que agregar `/games` para hacer uso de los Endpoints/Metodos.

## Endpoints/Metodos

Describe aquí los endpoints disponibles en tu API, junto con sus métodos HTTP, parámetros y posibles respuestas.

Ejemplo:

-  `POST /games`: Crea un nuevo objeto de juego.
-  `GET /games/:id`: Obtiene un juego por su ID.
-  `GET /games`: Obtiene todos los juegos que este en el base de datos.
-  `PUT /games/:id`: Actualiza un juego existente.
-  `DELETE /games/:id`: Elimina un juego.
-  `GET /games/name:name`: Obtiene un juego por su nombre.

## Estructura del Proyecto

-  package.json
-  package-lock.json
-  .gitignore
-  .env_variables
-  .env - Oculto
-  node_modules - Oculto
-  src - Carpeta
   -  index.js
   -  server.js
   -  connectionDB.js
   -  drivers - Carpeta
      -  drivesGames.js
   -  model - Carpeta
      -  gameModel.js
   -  routes - Carpeta
      -  routesGames.js

## Contacto

-  Autor: Andres Felipe Rangel Peña
-  Email: andrespeco0987@gmail.com
