Qué es Express?
Es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. 
Proporciona mecanismos para:
  Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
  Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.
  Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
  Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.

Instalacion de plugin
  npm i eslint eslint-config-prettier eslint-plugin-prettier prettier -D
Instalacion de Express
  npm i express 

El routing se se refiere a determinar cómo una aplicación responde a una solicitud de cliente a un punto final en particular y un método de solicitud HTTP específico.
La definición de la ruta adopta la siguiente estructura:
  app.METHOD(PATH, HANDLER)
app es una instancia de express.
METHOD es un método de solicitud HTTP, en minúsculas.
PATH es una ruta en el servidor.
HANDLER es la función ejecutada cuando la ruta coincide.

REST - Representaion State Transfer
Es una convencion (una forma de crear API, es decir lógica de restrincciones y recomendaciones) que existe en backend para hacer servicios web que se comunican a través del protocolo HTTP

Este protocolo tiene varios verbos y define como queremos modificar o alterar cierta información, estos son:
  GET: Es el método que se utiliza para solicitar información, no deberia tener otros efectos a parte de recibir la data. 
    Por ejemplo: Solicitarle a la aplicación todos los datos de una entidad de la DB o los datos de un ID espécífico.
    Datos en lista y en detalle
  PUT: Es el método modificador, usualmente se envía también el id del elemento que deseo modificar
    Por ejemplo: Soy un Admin y deseo modificar un titulo, una imágen, un texto.
    Datos en lista y en detalle (MALA PRACTICA)
  POST: Es para crear, si queremos crear un producto, debe ser a través de este método.
  DELETE: Para eliminar información
    Datos en lista y en detalle (MALA PRACTICA)

La convencion de REST nos dice que deberiamos (casi) siempre tener una ruta por entidad (entidad: usuarios → route /users )
El diseño REST o RESTful API está diseñado para aprovechar los protocolos existentes.⠀⠀
Si bien REST se puede usar en casi cualquier protocolo, generalmente aprovecha HTTP cuando se usa para API web.⠀⠀
Es decir. UTILIZAREMOS LOS MÉTODOS QUE EXISTEN EN HTTP PARA CREAR LA ARQUITECTURA DE NUESTRA API

Utilizando Métodos para la forma de nuestra API RESTfull
Cuando se crea una API utilizando la arquitectura (mejor conocido como web service) REST, se dice que es una API RESTfulll
Se puede utilizar el método con la ruta general para traer toda la entidad o con un {id} para ser más específico (en algunos casos no aplica)
Hacer PUT y DELETE a una lista es una MALA PRACTICA
Diferencia entre PUT y PATCH
  PUT tiene que actualizar todos los valores
  PATCH actualiza solo un valor deseado.

GET
El método GET es uno de los métodos HTTP estándar utilizado para solicitar datos de un recurso específico en un servidor. En el contexto de Express.js*, el método* GET se utiliza para manejar las solicitudes HTTP** GET enviadas desde el cliente al servidor.
El método GET se utiliza para solicitar recursos y datos específicos del servidor.
En Express.js*, se pueden definir rutas* GET utilizando el método app.get().
El método app.get() toma dos argumentos: el primero es la ruta URL que se está escuchando y el segundo es la función de controlador que se ejecutará cuando se reciba una solicitud GET en esa ruta. Por ejemplo 
  app.get('/users', function(req, res) { ... }) 
define una ruta GET en Express.js que escucha las solicitudes GET en la ruta /users*.*
La función de controlador proporcionada se ejecutará cada vez que se realice una solicitud GET a esa ruta. Dentro de esta función, se puede manejar la lógica de respuesta para la solicitud, como la obtención de datos de la base de datos y el envío de una respuesta al cliente.
En Express.js*, la información de la solicitud* GET se puede acceder a través del objeto req** (solicitud) que se pasa como argumento a la función de controlador. Es posible acceder a los parámetros de la solicitud, como los parámetros de consulta (req.query), los parámetros de ruta (req.params) y el cuerpo de la solicitud (req.body).
Para enviar una respuesta al cliente, se puede utilizar el objeto res** (respuesta) que también se pasa como argumento a la función de controlador. Lo que permite usar métodos como res.send(), res.json(), res.render() y otros para enviar diferentes tipos de respuestas al cliente, como texto plano, JSON*, renderizado de plantillas, etc.*

Express.Router
Crea un controlador(handler) de rutas modulares y montables. Una instancia de Router es un sistema de enrutamiento y middleware completo, por esa razón lo podemos tomar como si fuera una mini app.
Cada modulo de nuestras rutas es una mini aplicación en la que creamos sus rutas independientes y podemos incluirle middlewares, que se ejecutarán cuando se coincida con el path.

Qué es un middleware?
Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.


App.use
app.use Lo que hace es montar un middleware en la ruta especificada. Por ejemplo: