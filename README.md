# 🧩 Node.js API REST

API RESTful desarrollada con **Node.js**, **Express** y **MySQL** para la gestión de usuarios y laboratorios.  
El proyecto implementa un conjunto de endpoints que permiten **consultar, agregar y gestionar** datos almacenados en una base de datos MySQL.

---

## 🚀 Características principales

- Estructura modular con **Express Router**.  
- Conexión a base de datos mediante **promise-mysql**.  
- Controladores organizados para separar la lógica de negocio.  
- Manejo de CORS y logging con **morgan**.  
- Configuración mediante variables de entorno con **dotenv**.

---

## ⚙️ Instalación y configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/StebanJrb/Nodejs-API-REST.git
   cd Nodejs-API-REST
2. Instalar dependencias
    npm install

3.Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

HOST=localhost
DATABASE=nombre_de_tu_base
USER=tu_usuario
PASSWORD=tu_contraseña

4. Ejecutar el servidor

npm start


o, si no tienes script definido:

node index.js

El servidor se ejecutará en:
👉 http://localhost:3000

curl -X POST http://localhost:3000/api/labs \
-H "Content-Type: application/json" \
-d '{
  "room_id": "Lab 101",
  "user_id": 1,
  "start_time": "2025-10-29 09:00:00",
  "end_time": "2025-10-29 11:00:00",
  "event_title": "Práctica de Redes",
  "event_description": "Configuración de routers y switches."
}'
