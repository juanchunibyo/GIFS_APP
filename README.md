# 🔍 GifExpertApp - Buscador de GIFs

Aplicación web interactiva desarrollada en **React** con **TypeScript** y construida con **Vite**, que consume la API REST de **Giphy Developers** para buscar, renderizar y gestionar el historial de GIFs en tiempo real.

---

## 🚀 Características y Temas Aprendidos

En esta **Sección 6 (GifExpertApp)** se cubrieron e implementaron los siguientes conceptos clave de desarrollo frontend:

* 🧩 **Arquitectura modular de componentes:** División de la UI en componentes reutilizables (`SearchBar`, `GifList`, `PreviousSearches`, `CustomHeader`).
* ⚡ **Manejo de estado complejo (`useState`):** Gestión eficiente de arreglos de datos en React para controlar resultados y términos de búsqueda previos sin mutar el estado.
* ⏱️ **Efectos y Debounce (`useEffect`):** Optimización de peticiones HTTP en el buscador mediante técnicas de retardos para evitar llamadas innecesarias a la API.
* 🌐 **Consumo de API HTTP:** Integración con la API REST de **Giphy** para la obtención de recursos dinámicos.
* 🔑 **Variables de Entorno (`.env`):** Protección y aislamiento de claves de API (`VITE_GIPHY_API_KEY`) siguiendo buenas prácticas de seguridad.
* 🛡️ **Tipado Estricto con TypeScript:** Definición de interfaces para los modelos de datos, props de componentes y respuestas HTTP.

---

## 🛠️ Tecnologías Utilizadas

* **React** (Vite)
* **TypeScript**
* **CSS3**
* **Giphy Developers REST API**

---

## 💻 Instalación y Configuración Local

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/juanchunibyo/GIFS_APP.git](https://github.com/juanchunibyo/GIFS_APP.git)
cd 03-gifs-app
