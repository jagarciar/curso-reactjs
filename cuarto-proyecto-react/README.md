# JSX

El objetivo de esta clase es entender el uso de las variables en un componente funcional. 

> JSX significa JavaScript XML y permite crear estructuras tipo árbol o elementos de React como si fueran variables de JavaScript. 

Antes de crear el componente debemos crear el proyecto. Al igual que las anteriores clases, se va hacer uso de Vite. Para crear un proyecto con Vite debemos ejecutar el siguiente comando en la terminal:

```
npm create vite@latest
```

Después de ejecutar este comando se debe digitar el nombre del proyecto (en mi caso deje cuarto-proyecto-react), el framework (React) y la variante (JavaScript + SWC). Cuando finalice la creación debemos realizar la instalación de los paquetes. La instalación de los paquetes se realiza a través del siguiente comando:

```
npm install
```

Vamos a eliminar los archivos App.jsx, App.css e index.css y vamos a crear los archivos VariablesApp.jsx, VariablesApp.css y styles.css. 

En el archivo VariablesApp.jsx vamos a digitar **rfca** y damos enter. Después de dar enter podremos ver que se creo un componente de clase llamado VariablesApp.

Encontran en el archivo ubicado en la ruta **./src/VariablesApp.jsx** contiene la definición de varias variables de diferentes tipos. Las primeras tres corresponden a cadenas de texto (string), las siguientes dos son números enteros y flotantes, arreglos, booleanos, una función, un objeto y una fecha. Tenga en cuenta los comentarios que fueron incluidos y que informan como se comporta la variable si la imprimimos dentro de un <div></div>.

> Tenga en cuenta que las variables de tipo Date y de tipo object deben imprimirse a través de la función JSON.stringify