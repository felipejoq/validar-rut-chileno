# RUT Chile - Calculador de Dígito Verificador

Este proyecto es una aplicación web simple desarrollada con [Astro](https://astro.build/), que permite calcular el dígito verificador de un RUT chileno utilizando el algoritmo de módulo 11. La herramienta está pensada para facilitar la validación de RUTs, permitiendo al usuario ingresar el número base del RUT (sin el dígito verificador) y obteniendo como resultado el dígito correspondiente.

## 🚀 Características

- **Cálculo automático:** El usuario solo debe ingresar el cuerpo del RUT, y la aplicación se encarga de realizar el cálculo del dígito verificador.
- **Interfaz simple y amigable:** La aplicación tiene un diseño minimalista, enfocado en la usabilidad y la rapidez.

## 🧩 Algoritmo Módulo 11

El cálculo del dígito verificador en Chile se realiza a través del algoritmo de módulo 11. En este proceso, cada dígito del RUT se multiplica por una secuencia determinada de valores y, a partir de la suma de estos productos, se determina el dígito verificador, que puede ser un número entre 0 y 9 o la letra "K".

## ✨ Tecnologías Utilizadas

- **Astro:** Framework utilizado para el desarrollo de la interfaz y estructura de la aplicación.
- **JavaScript:** Para implementar el algoritmo de cálculo del dígito verificador.
- **Bun:** Herramienta para la gestión de dependencias y el entorno de desarrollo.

## 📂 Instalación y Uso

A continuación, los pasos para clonar el repositorio, instalar las dependencias y correr el proyecto en un entorno local.

### Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/tuusuario/rut-chile-calculador.git
cd rut-chile-calculador
bun install # o npm, pnpm, yarn, etc.
bun dev
```

Desarrollado por [Felipe](https://uncodigo.com/)