# 🐾 Virtual Pet

**Virtual Pet** es una aplicación web que permite a los usuarios agendar citas para sus mascotas con veterinarios virtuales. El sistema ofrece una experiencia sencilla e intuitiva para registrar usuarios, gestionar sus mascotas y mantener un historial médico detallado de cada una de ellas.

---

## ✨ Funcionalidades principales

- Registro e inicio de sesión de usuarios.
- Consulta de todos los servicios ofrecidos por el veterinario virtual.
- Agendamiento de citas en línea con el veterinario de preferencia.
- Gestión del perfil del usuario.
- Registro de mascotas por usuario.
- Historial médico detallado para cada mascota.

---

## 🛠 Tecnologías utilizadas

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js  
- **Base de datos:** PostgreSQL  
- **ORM:** TypeORM  

---



## 📌 Notas

- Para agendar una cita, el usuario debe estar registrado e iniciar sesión.
- Cada cita se asocia a una mascota específica y queda registrada en su historial médico.
- El historial médico es accesible desde el perfil del usuario, permitiéndole ver diagnósticos y tratamientos previos.
- Puedes acceder como veterinario con las siguientes credenciales:  
  **Correo:** `dianaM@gmail.com`  
  **Contraseña:** `M@ndoza1`

> ⚠️ **Nota 1:** El registro de nuevos usuarios puede demorar un poco porque el servidor del backend está alojado en un servicio gratuito y puede tardar en activarse tras un período de inactividad.  
> ⚠️ **Nota 2:** El dashboard del veterinario no fue diseñado responsivamente, ya que se asumió que su uso sería exclusivamente desde una oficina en computadores de escritorio.


---


## 📬 Contacto

Si tienes preguntas o sugerencias, puedes escribirme a [jorgeula300@gmail.com].

---

_Disfruta de cuidar a tus mascotas con Virtual Pet 🐶🐱_

---

## 📂 Repositorios

- 🔙 Backend: [https://github.com/jorgeula300/back-virtual-pet](https://github.com/jorgeula300/back-virtual-pet)
- 🔜 Frontend: [https://github.com/jorgeula300/front-virtual-pet](https://github.com/jorgeula300/front-virtual-pet)

---

## 🚀 Cómo comenzar

### 1. Clona los dos repositorios

```bash
# Clonar backend
git clone https://github.com/jorgeula300/back-virtual-pet.git
cd back-virtual-pet
npm install
# Configura el archivo .env y ejecuta el servidor
npm run dev
