# Angular Forms Series - DAW2

Aplicación CRUD sobre series de Netflix desarrollado con el framework de [Angular](https://angular.io/), [Angular Material](https://material.angular.io/) y [Bootstrap 5](https://getbootstrap.com/).

La aplicación puede crear nuevos registros de series, ver los registros que ya están creados, editarlos y eliminarlos. También se puede realizar búsquedas de las series disponibles en la tabla de inicio. 

Además, en la página principal de la aplicación, se puede obtener un listado o registro del nombre de las series que se han seleccionado en la tabla.

El formulario que se ha realizado para crear y editar las series contiene diferentes campos, los cuales hay que rellenarlos todos obligatoriamente con texto (para el nombre, los géneros y la descripción), fecha, números (para las temporadas y los episodios) y país.

## Requerimientos

1. Tener instalado [Node.js y npm](https://nodejs.org/es/).
2. Tener instalada la `versión 13.2.6` del CLI Angular.
3. Tener instalado un navegador, preferiblemente el de `Google Chroome`.

## Cómo ejecutar el proyecto

En primer lugar, para ejecutar el proyecto localmente hay que descargar la carpeta del proyecto y descomprimirla. Luego, hay que realizar los siguientes pasos desde la terminal del equipo o desde la terminal de un IDE (Visual Studio Code, por ejemplo):

* Ir a la carpeta del proyecto: cd `FormAngular-DAW2-master`.
* Ejecutar el siguiente comando para descargar todas las dependencias que encuentre en el fichero **package.json** del proyecto: `npm install`.
* Por último, ejecutar el comando `ng serve` para arrancar el servidor de desarrollo, es decir, para ejecutar la aplicación. Después, navegar a `http://localhost:4200/`.
* También, se puede ejecutar `ng -o serve` para que la aplicación se ejecute y se abra automáticamente en el navegador por defecto. La aplicación, en ambos casos, se recargará automáticamente si cambia alguno de los archivos de origen.

Otra manera más sencila de acceder al proyecto realizado es haciendo clic [aquí](https://angular-forms-series.netlify.app/). **Recomendación:** acceder al proyecto desde Google Chrome para una visualización más rápida. 
