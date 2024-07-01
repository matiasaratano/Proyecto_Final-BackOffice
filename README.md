# Gestión de Presencialidad - Backoffice

## Descripción General

El backoffice para el proyecto Gestión de Presencialidad permite la gestión de usuarios, reservas, viandas y reportes de la aplicación móvil desarrollada para BDT Global. La aplicación móvil facilita la gestión de asientos y la presencialidad en la empresa.

## Características Principales

- Gestión de usuarios (alta de nuevos usuarios y modificación/eliminación de los existentes).
- Gestión de reservas (cancelación de reservas).
- Acceso al documento de viandas.
- Generación de reportes.

## Requisitos del Sistema

Para desarrollar y ejecutar el proyecto localmente, se requieren las siguientes herramientas:

- Node.js
- npm o yarn (gestores de paquetes)

Para los usuarios finales, el backoffice es accesible a través de cualquier navegador moderno.

## Instalación y Configuración

Estas instrucciones son para desarrolladores que deseen clonar y ejecutar el proyecto localmente.

### Clonación del Repositorio

- git clone https://github.com/matiasaratano/Proyecto_Final-BackOffice.git
- cd Proyecto_Final-BackOffice

### Instalación de Dependencias

- Usando npm: npm install
- O usando yarn: yarn install

### Ejecución del Proyecto en Desarrollo

- Usando npm: npm start
- O usando yarn: yarn start

El proyecto se ejecutará en http://localhost:3000.

### Compilación para Producción

- Usando npm: npm run build
- O usando yarn: yarn build

Esto creará una versión optimizada del proyecto en la carpeta build.

## Uso del Backoffice

Los usuarios finales pueden acceder al backoffice a través de su navegador preferido utilizando la URL proporcionada por el administrador del sistema.

## Estructura del Proyecto

Una breve descripción de la estructura de carpetas y archivos principales (se desarrolla en profundidad en los manuales):

- public/ # Archivos públicos
- src/ # Código fuente del proyecto
- components/ # Componentes de React
- screen/ # Páginas del backoffice
- App.js # Componente principal
- .gitignore # Archivos y carpetas ignorados por Git
- package.json # Dependencias y scripts del proyecto
- README.md # Este archivo

## Créditos

Proyecto desarrollado por:

- Kevin Mercs
- Fernandez Nicolas
- Venuti Ezequiel
- Sosa Juan
- Aratano Matias

Agradecimientos especiales a nuestros profesores de Ort, Velurtas Jorge y Rivas Martin y BDT Global por su apoyo y colaboración.
