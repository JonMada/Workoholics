# Workoholics | Prueba Técnica

Este proyecto está desarrollado utilizando **Vite** y **React.js**. El objetivo de esta prueba es crear una plataforma que responda a los requisitos establecidos por el cliente y que sea completamente funcional en un entorno de desarrollo local.

## Instrucciones para correr el proyecto en local

### Requisitos previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu máquina:

1. **Node.js**:

   - Puedes verificar si tienes **Node.js** instalado ejecutando el siguiente comando en tu terminal:

     ```bash
     node -v
     ```

   - Si **Node.js** no está instalado, puedes descargarlo e instalarlo desde el sitio oficial [Node.js](https://nodejs.org/).

### Pasos para ejecutar el proyecto

1. **Clona el repositorio en tu máquina**:

   ```bash
   git clone https://github.com/JonMada/Workoholics
   ```

2. **Dirígete al directorio del proyecto**:

   ```bash
   cd Workoholics
   ```

3. **Instala las dependencias**:

   - Ahora, necesitas instalar las dependencias del proyecto. Ejecuta el siguiente comando:

     ```bash
     npm install
     ```

4. **Inicia el servidor de desarrollo**:

   - Para ver la aplicación en acción, ejecuta:

     ```bash
     npm run dev
     ```

     Este comando iniciará un servidor de desarrollo en tu máquina local. Una vez ejecutado, el servidor estará escuchando en un puerto específico (normalmente el puerto `5173`).

5. **Abre el navegador**:

   - Una vez que el servidor esté en funcionamiento, abre tu navegador web y visita la siguiente URL:

     ```
     http://localhost:5173
     ```

     En esta página deberías poder ver el proyecto corriendo localmente.

### ¿Qué hacer si el proyecto no se ejecuta correctamente?

1. **Revisar la versión de Node.js**:
   Si obtienes errores relacionados con la versión de Node.js, asegúrate de que estás utilizando una versión compatible con el proyecto.

2. **Verificar dependencias**:
   Si tienes problemas con las dependencias, puedes intentar eliminar la carpeta `node_modules` y ejecutar nuevamente `npm install` para reinstalar todas las dependencias:

   ```bash
   rm -rf node_modules
   npm install
   ```
