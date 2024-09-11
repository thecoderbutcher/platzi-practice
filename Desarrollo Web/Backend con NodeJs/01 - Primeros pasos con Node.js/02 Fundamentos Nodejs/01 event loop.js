/**
 * NodeJS es un entorno de ejecución de JavaScript fuera del navegador. 
 * Se crea en 2009, orientado a servidores. Es muy importante que esté fuera del navegador debido 
 * a que ya no es necesario un navegador web para ejecutar código JavaScript.
 * 
 * Características principales de JavaScript:
 *  Concurrencia: Es monohilo, con entradas y salidas asíncronas.
 *  Motor V8: Creado por Google en 2008 para Chrome. Escrito en C++. Convierte JS en código máquina en lugar de interpretarlo en tiempo real.
 *  Todo funciona en base a Módulos, que son piezas de código muy pequeñas que modularizan nuestros sistemas y ayudan a entender mejor el código.
 *  Orientación a Eventos, existe un bucle de eventos que se ejecuta constantemente. Lo que nos permite programar de forma reactiva, lo que quiere decir que podemos programar con la lógica de “Cuando sucede algo, se ejecuta esta parte de mi código y eso a su vez dispara otra parte”.

 * ++Event Queue:++ Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), 
 * estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

++Event Loop:++ Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. 
En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

++Thread Pool:++ Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.
El Event Loop es la forma en que Node funciona, tiene principalmente un hilo llamado Event Queue, en este es donde se enfilan todas las acciones que se van a ejecutar. Pero si por alguna razón a esta fila llega un evento que se demora como un setTimeout, una promesa o algo más, este tipo de eventos irán a parar a el Thread Pool, es un segundo hilo que se crea para resolver estos eventos con sus propios subs-hilos, una vez estos eventos son resolvidos se les manda de nuevo al Event Queue para que puedan ser ejecutados de manera correcta.

*/