¿Qué es el testing?
En el mundo actual las tecnologias con las que vivimos necesitan codigo, esto ha hecho que el desarrollo de software se haya vuelto industrial, donde contamos con procesos y herramientas, como el testing, que nos permiten entregar mas rapido proyectos de calidad a nuestros clientes reduciendo el riesgo de errores en produccion.

¿Por que hacer testing?
Normalmente hay cuatro fases en el desarrollo de software para crear un producto:

Diseño ⇒ Desarrollo ⇒ Pruebas ⇒ Produccion

En estas fases, detectar un error se vuelve cada vez mas costoso. Ahi es donde hacemos tecnicas para prevenir estas situaciones. El testing es la manera en la que nosotros gestionamos el riesgo y tratamos de evitar, en la medida de lo posible, los errores en el sistema.

Gestionar riesgos como Google
Analisis de codigo estatico: Mientras desarrollamos vamos viendo nuestros resultados.
Pruebas unitarias: Nos aseguramos que el codigo funciona como queremos.
Pruebas de integracion: Verificar que varios elementos funcionan bien trabajando juntos.
Revision de codigo: Equipo o persona encargada de revisar el codigo de las demas personas.
QA: Equipos de creacion de pruebas automaticas o manuales.

La pirámide clásica del testing: (de menos a más costoso y tendría que haber más pruebas de las primeras que de las últimas)

unit tests
integration tests
end to end tests (e2e)
ui test: emulan el dispositivo físico
En javascript se recomienda en vez la pirámide el trofeo de tests:

static tests: el tronco (el segundo mayor número de pruebas)
unit tests: mismo num. de pruebas que e2e y menos que static e integration
integration tests: el mayor número de pruebas debe ser aquí
e2e tests: mismo tamaño que unit tests y menos que static e integration

Deuda Técnica Igual que en las finanzas, las deudas no son buenas ni malas, solo son una estrategia para alcanzar algo y luego se paga.

haciendo pruebas se maneja el riesgo

Diseño
Desarrollo
Pruebas
Producción
El momento y pruebas dependen de la fase en la que se encuentra la compañía:

Tracción
Inflexión
Escala
Expansión
La deuda de deficiencia del desarrollador puede ser alta porque en la fase de tracción, la compañía busca velocidad > precisión , de modo que en esta etapa el testing no se valora, ya que buscan lanzar, lanzar, lanzar...

Cuando se entra a la fase de inflexión, hay más usuarios y se empiezan a escribir más pruebas, curando la deuda.

Herramientas de Testing [resumen]

Estas herramientas mencionadas están clasificadas según el tipo o nivel de pruebas a realizar.

Multipropósito o Robustas Pueden ejecutar la mayoría de pruebas de la pirámide o trofeo, tanto para backend, frontend, integration test, algunas hasta UI y API s testing. ++Jest,++ _Chai, Mocha, Ava, Jasmine _

UI Testing Pruebas desplegadas en un dispositivo real o simulado bajo un Browser (navegador) automatizando toques y gestos en la aplicación. ++Playwright,++ _ Cypress, WebdriverIO, Puppeteer_

API Testing En general, las APIs no tienen UI, usan protocolos de servicios por peticiones. ++Supertest,++ Dredd, Postman

Pruebas Estáticas Estas pruebas no ejecutan el código, estas herramientas se integran al editor de código y van analizando si hay alguna mala práctica. ESLint, Prettier, Typescript tools (TSLint)

*Todas estas herramientas manejan una sola estructura (de forma), de modo que el lenguaje o framework pasa a un segundo plano.

Pruebas estáticas
Las pruebas estáticas se caracterizan por no ejecutar código, solo lo analizan y nos dan un feedback temprano.

Estas nos ayudan a ver si estamos teniendo buenas prácticas al escribir nuestro código.

Hay herramientas que nos ayudan a ejecutar esta pruebas estáticas como lo son:

ESLint
Prettier
TypeScript
Vamos a empezar a crear pruebas estáticas con ESLint, para esto debemos instalarlo:


npm i -D eslint
Luego de instalarlo, vamos a ejecutar el siguiente comando que nos permitirá traer ciertas configuraciones y establecer configuraciones por defecto:


npx eslint --init
Luego nos va a preguntar las siguientes opciones:

Si queremos hacer un check de nuestra sintaxis

Si queremos hacer check de sintaxis y encontrar problemas

Si queremos hacer check de sintaxis, encontrar problemas y forzar el estilo de código

Luego nos preguntará una serie de cosas relacionadas a que tecnologías estamos utilizando en nuestro proyecto, respondemos estas preguntas.

Luego nos pregunta si corre en navegador o en un entorno de Node.

Nos pregunta si queremos usar una guía de estilo de código, la más popular y las más recomendable suele ser la de Airbnb.

Luego elegimos el formato del código.

Por ultimo nos pregunta si deseamos instalar esos paquetes.

Ya con esto podemos tener un análisis de código estático para poder tener un estándar en el cual nos podamos basar a la hora de escribir nuestro código y siguiendo buenas practicas, siguiendo un estándar que nos permita escribir un código de la misma forma siguiendo convenciones.

Luego en el archivo de configuración package.json podemos establecer un script que nos permita hacer un examen de cualquier archivo en nuestra carpeta scr.


{
  ...
  "scripts": {
    ...
		// Marca los errores
    "lint": "eslint src/**",
		// Marcar los errores y arreglar los problemas
    "lint:fix": "eslint src/** --fix"
  },
  ...
}
Arreglar errores de Jest
Para que no nos salte errores cuando usamos nuestras funciones de Jest usamos en el archivo de configuración de .eslint.js la siguiente configuración:


module.exports = {
  env: {
    ...
		// Todo lo que venga de Jest no los alerta
    jest: true,
  },
  ...
};