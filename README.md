# eSeries - DAW2

Aplicación CRUD sobre series de Netflix desarrollada con el framework de [Angular](https://angular.io/), [Angular Material](https://material.angular.io/), [Bootstrap 5](https://getbootstrap.com/) y [firebase](https://firebase.google.com/?hl=es) como base de datos. Para la autenticación de los usuarios se ha usado [Firebase Authentication](https://firebase.google.com/docs/auth) y para la base de datos [Cloud Firestore](https://firebase.google.com/docs/firestore).

La aplicación puede crear nuevos registros de series, ver los registros que ya están creados, editarlos y eliminarlos. También se puede realizar búsquedas de las series disponibles en la tabla de inicio. 

Además, en la página principal de la aplicación, se muestra una pequeña introducción de la aplicación y un formulario para iniciar sesión o registrarse (campos a rellenar: email y contraseña). Este paso es primordial para poder acceder al listado de series y poder realizar cualquier tipo de acción.

Una vez se haya iniciado sesión, se muestra una introducción de la base de datos y seguidamente, se puede acceder al listado de las series que se encuentran en la base de datos. Además, en la parte posterior del listado, se puede obtener un resumen o registro de las series que se han seleccionado en la tabla.

El formulario que se ha realizado para crear y editar las series contiene diferentes campos, los cuales hay que rellenarlos todos obligatoriamente con texto (para el nombre, los géneros y la descripción), fecha, números (para las temporadas y los episodios) y país.

## Requerimientos

1. Tener instalado [Node.js y npm](https://nodejs.org/es/).
2. Tener instalada la `versión 13.2.6` del CLI Angular.
3. Tener instalado un navegador, preferiblemente el de `Google Chroome`.
4. Tener instalado los paquetes necesarios para Angular Material, Bootstrap y Firebase (ver en las páginas oficiales).
## Cómo ejecutar el proyecto

En primer lugar, para ejecutar el proyecto localmente hay que descargar la carpeta del proyecto y descomprimirla. Luego, hay que realizar los siguientes pasos desde la terminal del equipo o desde la terminal de un IDE (Visual Studio Code, por ejemplo):

* Ir a la carpeta del proyecto: cd `CRUD_series-DAW2-main`.
* Ejecutar el siguiente comando para descargar todas las dependencias que encuentre en el fichero **package.json** del proyecto: `npm install`.
* Por último, ejecutar el comando `ng serve` para arrancar el servidor de desarrollo, es decir, para ejecutar la aplicación. Después, navegar a `http://localhost:4200/`.
* También, se puede ejecutar `ng -o serve` para que la aplicación se ejecute y se abra automáticamente en el navegador por defecto. La aplicación, en ambos casos, se recargará automáticamente si cambia alguno de los archivos de origen.

Otra manera más sencila de acceder al proyecto realizado es haciendo clic [aquí](https://eseries-angular.netlify.app/). **Recomendación:** acceder al proyecto desde Google Chrome para una visualización más rápida. 

