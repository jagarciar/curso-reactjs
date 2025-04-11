# Estilos

El objetivo de esta clase es alterar los estilos por diversos caminos sobre un componente funcional.  

Antes de crear el componente y los estilos debemos crear el proyecto. Al igual que en las clases anteriores vamos hacer uso de Vite. Para crear un proyecto con Vite debemos ejecutar el siguiente comando en la terminal:

```
npm create vite@latest
```

Después de ejecutar este comando se debe digitar el nombre del proyecto (en mi caso deje quinto-proyecto-react), el framework (React) y la variante (JavaScript + SWC). Cuando finalice la creación debemos realizar la instalación de los paquetes. La instalación de los paquetes se realiza a través del siguiente comando:

```
npm install
```

Vamos a eliminar los archivos App.jsx, App.css e index.css y vamos a crear los archivos PorfolioApp.jsx y PorfolioApp.css. 

En el archivo PorfolioApp.jsx vamos a digitar **rafc** y damos enter. Después de dar enter podremos ver que se creo un componente funcional llamado PorfolioApp.

Encontrarán que existen unos estilos en **PorfolioApp.css** como **id**, **center** y **h1**. Este tipo de importación y de creación es la más común dado que aisla el diseño y los estilos de la implementación funcional del componente. 

```css
h1{
    font-size: large;
}

#id{
    font-size:medium;
}

center{
    text-align: center;
    margin: 0 auto;
}
```

```javascript
import React from 'react'
import './PorfolioApp.css'

export const PorfolioApp = () => {

    return (
        <>
            <div className='center'>
                <h1>Título</h1>
                <h2 className='id'>Subtitulo</h2>
            </div>
        </>
    )
}
```

En **PorfolioApp.jsx** encontrarán que hay una variable llamada **active** y una segunda variable llamada **style**. La variable **style** definirá el estilo que será aplicado sobre un elemento dentro del componente. El valor de la variable **active** define el color del texto que tendrá el elemento que conlleve el estilo **style**. 

```javascript
import React from 'react'
import './PorfolioApp.css'

export const PorfolioApp = () => {

    const active = true

    const style = {
        color : active ? 'red' : 'black'
    }

    return (
        <>
            <div className='center'>
                <h3 style={style}>Estilos</h3>
            </div>
        </>
    )
}
```

Finalmente en **PorfolioApp.jsx** encontrarán que a través de **style** también podemos incluir el estilo. No es aconsejable hacerlo de esta manera dado que es más costoso el mantenimiento en el tiempo. 

```javascript
import React from 'react'
import './PorfolioApp.css'

export const PorfolioApp = () => {

    return (
        <>
            <div className='center'>
                <h4 style={{fontSize:'12px'}}>Estilos</h4>
            </div>
        </>
    )
}
```

Si queremos ver el resultado final debemos ejecutar el comando:

```
npm run dev
```