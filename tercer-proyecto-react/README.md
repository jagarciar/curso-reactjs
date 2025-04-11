# Componentes de clase

El objetivo de esta clase es crear un componente de clase haciendo uso del snippet **rcc**. 

Antes de crear el componente debemos crear el proyecto. Al igual que la clase 1 y la clase 2, se va hacer uso de Vite. Para crear un proyecto con Vite debemos ejecutar el siguiente comando en la terminal:

```
npm create vite@latest
```

Después de ejecutar este comando se debe digitar el nombre del proyecto (en mi caso deje tercer-proyecto-react), el framework (React) y la variante (JavaScript + SWC). Cuando finalice la creación debemos realizar la instalación de los paquetes. La instalación de los paquetes se realiza a través del siguiente comando:

```
npm install
```

Vamos a eliminar los archivos App.jsx, App.css e index.css y vamos a crear los archivos PorfolioApp.jsx, PorfolioApp.css y styles.css. 

En el archivo PorfolioApp.jsx vamos a digitar **rcc** y damos enter. Después de dar enter podremos ver que se creo un componente de clase llamado PorfolioApp.

Los archivos PorfolioApp.css y styles.css cumplen el mismo objetivo que fue explicado en la clase 2. 

Si queremos ver el resultado final debemos ejecutar el comando:

```
npm run dev
```