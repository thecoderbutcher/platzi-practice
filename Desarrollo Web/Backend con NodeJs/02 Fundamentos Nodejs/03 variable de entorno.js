const nombre = process.env.NOMBRE || "Sin nombre"
const web = process.env.WEB || "Sin web"


console.log("hola " + nombre)
console.log("Mi web " + web)

//NOMBRE="Carlos" WEB="loquesea.com" node "02 Fundamentos Nodejs/03 variable de entorno.js"

/* Desarrollo Nodemon. Demons en linux, puedes tener procesos que ves ejecutandose nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.

sudo npm install -g nodemon

Nodemon
Producción

sudo npm install -g pm2

PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

Voy a poner monitorizar el código para saber si algo se rompe.
Me permite ver dashboards de mi código, puedo ver que está corriendo.
Puedo ver el rendimiento de mi cpu
Con: pm2 stop + id ---> me detiene el proceso que está en ejecución con ese ID.
PM2 */