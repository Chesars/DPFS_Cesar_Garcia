# Kytesite Frontend

## Descripción

Este proyecto es el frontend de Kytesite, una tienda en línea que vende kites, wings y foils. La interfaz de usuario permite a los clientes navegar por los productos disponibles en la base de datos. También incluye middlewares de autenticación y validación.

El frontend está desarrollado con Express.js y utiliza una combinación de HTML, CSS y JavaScript para la interfaz de usuario.

## Características

- **Vista de Productos:** Los usuarios pueden navegar por los productos disponibles en la tienda.
- **Autenticación:** Los usuarios pueden iniciar sesión y registrarse.
- **Perfil de Usuario:** Los usuarios registrados pueden acceder al carrito.
- **Middlewares:** Implementación de middlewares para la autenticación y validación de usuarios.

## Requisitos

- Node.js (v14 o superior)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/chesars/DPFS_Cesar_Garcia.git
    cd kytesite-frontend
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia el servidor:
    ```bash
    nodemon
    ```

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `public/`: Contiene archivos estáticos como CSS, JavaScript y imágenes.
- `views/`: Contiene las plantillas de vistas en formato EJS.
- `routes/`: Contiene las rutas de Express para las diferentes páginas del frontend.
- `controllers/`: Contiene los controladores que manejan la lógica de las rutas.
- `middlewares/`: Contiene los middlewares para la autenticación y validación.

## Funcionalidades

### Vista de Productos

- Los usuarios pueden ver una lista de todos los productos disponibles en la base de datos.
- Cada producto muestra información como nombre, descripción, precio y categoría.

### Autenticación y Registro

- Los usuarios pueden registrarse proporcionando su nombre, correo electrónico y contraseña.
- Los usuarios registrados pueden iniciar sesión con su correo electrónico y contraseña.

### Perfil de Usuario

- Los usuarios registrados pueden acceder a su perfil desde la página de perfil.

### Middlewares

- **Autenticación:** Asegura que solo los usuarios autenticados puedan acceder a ciertas rutas.
- **Validación:** Verifica que los datos proporcionados por los usuarios cumplan con los requisitos esperados.

## Agradecimiento

Gracias a digitalHouse por proveer contenido de calidad y a cada uno de los integrantes de su equipo por ofrecer una academia de excelencia.
