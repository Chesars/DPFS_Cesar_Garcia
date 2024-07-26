# Kytesite Admin Panel Backend

## Descripción

Este proyecto es el backend para el panel de administración de Kytesite, un sitio web que vende kites, wings y foils. El panel de administración permite a los administradores de la tienda agregar, eliminar y editar los productos de la tienda, así como agregar o eliminar otros administradores.

El backend está desarrollado con Express.js y utiliza una base de datos MySQL para almacenar la información de productos y administradores.

## Características

- **Gestión de Productos:** Los administradores pueden agregar, eliminar y editar productos de la tienda.
- **Gestión de Administradores:** Los administradores pueden agregar y eliminar otros administradores.
- **Seguridad:** La autenticación y autorización están implementadas para asegurar que solo los administradores puedan acceder y modificar la información sensible.

## Requisitos

- Node.js (v14 o superior)
- MySQL (v8 o superior)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/chesars/DPFS_cesar_garcia.git
    cd kytesite-admin-panel
    ```

2. Instala las dependencias(detalladas en los sprints):
    ```bash
    npm install
    ```

3. Configura la base de datos:

   - Crea una base de datos MySQL llamada `kytesite`.
   - Importa la estructura de la base de datos utilizando el archivo `structure.sql` proporcionado.


5. Inicia el servidor:
    ```bash
    nodemon
    ```

## Agradecimiento

Gracias a digitalHouse por proveer contenido de calidad y a cada uno de los integrantes de su equipo por ofrecer una academia de excelencia.

