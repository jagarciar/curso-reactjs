# Eventos

El objetivo de esta clase es implementar y capturar un evento o una acción que suceda dentro de un componente funcional. 

Antes de implementar un evento debemos crear el proyecto. Al igual que las anteriores clases se va hacer uso de Vite. Para crear un proyecto con Vite debemos ejecutar el siguiente comando en la terminal:

```
npm create vite@latest
```

Después de ejecutar este comando se debe digitar el nombre del proyecto (en mi caso deje septimo-proyecto-react), el framework (React) y la variante (JavaScript + SWC). Cuando finalice la creación debemos realizar la instalación de los paquetes. La instalación de los paquetes se realiza a través del siguiente comando:

```
npm install
```

Vamos a eliminar los archivos App.jsx, App.css e index.css y vamos a crear el archivo EventApp.jsx. 

En el archivo EventApp.jsx vamos a digitar **rafc** y damos enter. Después de dar enter podremos ver que se creo un componente de clase llamado EventApp.

En el siguiente ejemplo creamos un componente funcional llamado **EventApp**. Este componente contiene un botón el cuál captura un evento de tipo **onClick**. El evento invoca la función **handleClick** que esta implementada previo al retorno. 

> Las funciones que capturan los eventos siempren deben adicionar un parámetro que refiere al contexto del evento. 

```javascript
import React from 'react'

export const EventApp = () => {

    const handleClick = (event) => {
        
    }

    return (
        <>
            <button onClick={handleClick}>Enviar</button>
        </>
    )
}
```

Si queremos adicionar un segundo parámetro, debemos modificar tanto la función que implementa la captura del evento, como también la invocación. 

```javascript
import React from 'react'

export const EventApp = () => {

    const handleClick = (event, msg) => {
        
    }

    return (
        <>
            <button onClick={(event) => 
                    handleClick(event, 'Ejemplo del segundo parámetro')}>
                Enviar
            </button>
        </>
    )
}
```

> Todos los eventos en ReactJS herendan del tipo [SyntheticEvent](https://legacy.reactjs.org/docs/events.html)

> Los eventos en ReactJS están clasificados según su objetivo. Dentro de las opciones se encuentran : ClipboardEvent, DragEvent, InputEvent y otros. Para obtener más información, ReactJS dispone de esta [documentación](https://react.dev/reference/react-dom/components/common) de cada posible evento. 

Existe una segunda alternativa al implementar el ejemplo anterior. En este caso se creará 
un segundo componente funcional llamado **Boton**. El componente **Boton** se encargará
de retornar el elemento **button**. Dado que la función que implementa el **onClick** está
fuera del contexto del componente **EventApp**, debemos extraerla y dejarla dentro del
componente **Boton** o fuera de este.   

```javascript
import React from 'react'

const handleClick = (event, msg) => {
    console.log(event);
}

const Boton = () => {
    return (
        <>
            <button onClick={(event) => 
                    handleClick(event, "Soy el segundo parámetro")}>
                Enviar
            </button>
        </>
    )
}


export const EventApp = () => {

    return (
        <>
            <Boton/>
        </>
    )
}

```

**Boton**, al ser un componente funcional, recibe parámetros que son enviados desde
el componente padre **EventApp**. Por ejemplo, si quisieramos que el valor del parámetro
que se envia a **handleClick** se enviara desde **EventApp**, podemos adicionar un
parámetro en el componente **Boton**, este mismo será enviado desde **EventApp** y
será pasado como argumento a **handleClick**. 

```javascript
import React from 'react'

const handleClick = (event, msg) => {
    console.log(event);
}

const Boton = (msg) => {
    return (
        <>
            <button onClick={(event) => 
                    handleClick(event, msg)}>
                Enviar
            </button>
        </>
    )
}


export const EventApp = () => {

    return (
        <>
            <Boton msg="Soy el segundo parámetro"/>
        </>
    )
}

```

Si queremos ver el resultado final debemos ejecutar el comando:

```
npm run dev
```
