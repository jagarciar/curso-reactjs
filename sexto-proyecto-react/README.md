# Props

El objetivo de esta clase es enviar parámetros entre los componentes funcionales. 

Antes de crear los componentes necesarios debemos crear el proyecto. Al igual que en las anteriores clases vamos hacer uso de Vite. Para crear un proyecto con Vite debemos ejecutar el siguiente comando en la terminal:

```
npm create vite@latest
```

Después de ejecutar este comando se debe digitar el nombre del proyecto (en mi caso deje sexto-proyecto-react), el framework (React) y la variante (JavaScript + SWC). Cuando finalice la creación debemos realizar la instalación de los paquetes. La instalación de los paquetes se realiza a través del siguiente comando:

```
npm install
```

Vamos a eliminar los archivos App.jsx, App.css e index.css y vamos a crear los archivos Parametros2App.jsx y ParametrosApp.jsx.

En el archivo ParametrosApp.jsx vamos a digitar **rafc** y damos enter. Después de dar enter podremos ver que se creo un componente funcional llamado ParametrosApp. 

Encontrarán que dentro de los paréntesis se envia un parámetro llamado props (de tipo object). Al ser de tipo object podremos acceder a sus propiedades a través del punto. Por ejemplo, en el siguiente componente obtenemos la propiedad string de props. 

```javascript
import React from 'react'
import { Parametros2App } from './Parametros2App'

export const ParametrosApp = (props) => {
  return (
    <>
    <div>{props.string}</div>
    <Parametros2App string = "Y mi segundo nombre es Andrés" number={10}/>
    </>
  )
}
```

En el archivo Parametros2App.jsx vamos a digitar **rafc** y damos enter. Después de dar enter podremos ver que se creo un componente funcional llamado Parametros2App. 

Desde ParametrosApp.jsx vamos a importar a Parametros2App.jsx. 

A diferencia de ParametrosApp.jsx, Parametros2App.jsx recibe directamente las propiedades necesarias. Por ejemplo, en el siguiente componente se reciben los parámetros string y number. 

```javascript
import React from 'react'

export const Parametros2App = ({ string, number }) => {
    return (
        <><div>{string}</div><div>{number}</div></>
    )
}

```

Por tal motivo, dado que ParametrosApp.jsx crea un elemento de tipo Parametros2App.jsx, ParametrosApp.jsx deberá enviar (opcionalmente) los valores de los parámetros string y number. 

```javascript
import React from 'react'
import { Parametros2App } from './Parametros2App'

export const ParametrosApp = (props) => {
  return (
    <>
    <div>{props.string}</div>
    <Parametros2App string = "Y mi segundo nombre es Andrés" number={10}/>
    <Parametros2App string = "Y mi primer apellido es Garcia" />
    </>
  )
}
```

Finalmente, dado que desde main.jsx se importa a ParametrosApp.jsx, main.jsx deberá enviar (opcionalmente) los valores de las propiedades que se deseen. Esto dado que ParametrosApp.jsx espera un objeto nombrado props. 

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParametrosApp } from './ParametrosApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParametrosApp string = "Hola soy Jeyson" />
  </StrictMode>,
)
```

## Props obligatorios

Si queremos definir unos parámetros obligatorios debemos importar dentro del componente a PropTypes. Por ejemplo, en el siguiente componente se esperan dos parámetros : string y number. string está definido como obligatorio dado que en la definición de propTypes del componente, se define que es requerido. number está definido como opcional. 

Para poder importar a prop-types debemos instalar el paquete mediante el siguiente comando:

```
npm install --save prop-types
```

```javascript
import React from 'react'
import PropTypes from 'prop-types'

export const Parametros3App = ({string, number}) => {
  return (
    <div>Parametros3App</div>
  )
}

Parametros3App.propTypes = {
    string: PropTypes.string.isRequired
}
```

> Tenga en cuenta que también es viable enviar sobre la definición del parámetro el valor por defecto, es decir, por ejemplo : const Parametros3App = ({string, number = 10})

## Props por defecto

Si queremos definir los valores de algunos o todos los parámetros debemos importar dentro del componente a PropTypes. Por ejemplo, en el siguiente componente se esperan dos parámetros : string y number. number está definido como opcional y tiene como valor por defecto a 0. Es decir, si el componente padre no le envia un valor, el asumirá el valor 0. 

```javascript
import React from 'react'
import PropTypes from 'prop-types'

export const Parametros3App = ({string, number}) => {
  return (
    <>
        <div>{string}</div>
        <div>{number}</div>
    </>
  )
}

Parametros3App.defaultProps = {
    number : 0
}
```

Si queremos ver el resultado final debemos ejecutar el comando:

```
npm run dev
```