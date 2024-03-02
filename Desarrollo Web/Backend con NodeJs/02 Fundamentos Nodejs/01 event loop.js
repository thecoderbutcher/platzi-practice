/**
 * ++Event Queue:++ Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

++Event Loop:++ Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

++Thread Pool:++ Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.
 El Event Loop es la forma en que Node funciona, tiene principalmente un hilo llamado Event Queue, en este es donde se enfilan todas las acciones que se van a ejecutar. Pero si por alguna razón a esta fila llega un evento que se demora como un setTimeout, una promesa o algo más, este tipo de eventos irán a parar a el Thread Pool, es un segundo hilo que se crea para resolver estos eventos con sus propios subs-hilos, una vez estos eventos son resolvidos se les manda de nuevo al Event Queue para que puedan ser ejecutados de manera correcta.

*/