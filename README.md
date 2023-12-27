# App Hotel&Bookings

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7 y Yarn 1.x como administrador de paquetes de Node.js

Otras librerías incluidas son:
- Primeng
- Primeicons
- Primeflex

Se requiere del uso de Node.js >= 20.10.0

## Servidor de producción

El front se encuentra alojado en Netlify, en la url https://hotels-bookings-mock.netlify.app/

El back se encuentra alojado en Vercel, en la url https://hotels-mock-back.vercel.app/

## Servidor de desarrollo

Instale Node.js en el equipo.

Ejecute `npm i -g yarn` para añadir yarn como administrador de paquetes.
Ejecute `npm i -g @angular/cli` para añadir la última versión de Angular.

Ejecute `yarn install` en el path del proyecto para descargar las librerías
o módulos necesarios para el proyecto.

Ejecute `yarn start` para el servidor de desarrollo. Navegue a `http://localhost:4200/`.

Para montar la base de datos en desarrollo local, instale la librería [json-server](https://www.npmjs.com/package/json-server) ejecutando
`npm i -g json-server`, luego genere el servidor mock de la base de datos
ejecutando `json-server db.json --watch` apuntando al path del repositorio.

## Datos de ejecución

Ya hay dos usuarios preestablecidos en el fromulario de login, que se
cambian solo seleccionando los radiobuttons de roles. Hay otros usuarios
que se pueden usar, y están en la ruta de la base de datos con endpoint
`/users`.

La estructura de la base de datos mockeada puede verse en el archivo `db.json`
que se encuentra en el path base del proyecto.

#### Desarrollado por
Fabio Alejandro Castañeda B. - Desarrollador de Software/Ingeniero Mecatrónico -
2023
