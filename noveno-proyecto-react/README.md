# Arreglos & Listas

El objetivo de esta clase es hacer uso de una lista o un arreglo para imprimirlos por pantalla a través de un componente funcional.

Antes de crear el componente crear el proyecto. Al igual que en las clases anteriores vamos hacer uso de Vite. Para crear un proyecto con Vite debemos ejecutar el siguiente comando en la terminal:

```
npm create vite@latest
```

Después de ejecutar este comando se debe digitar el nombre del proyecto (en mi caso deje noveno-proyecto-react), el framework (React) y la variante (JavaScript + SWC). Cuando finalice la creación debemos realizar la instalación de los paquetes. La instalación de los paquetes se realiza a través del siguiente comando:

```
npm install
```

Vamos a eliminar los archivos App.jsx, App.css e index.css y vamos a crear los archivos ListasApp.jsx, ItemApp.jsx y Numeros.jsx. 

El archivo **Numeros.jsx** esportará los números del 1 al 10 en un variable nombrada**Numeros**. 

```javascript title="Numeros.jsx"
export const Numeros = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
```

El archivo **ListasApp.jsx** va exponer un componente funcional nombrado **ListasApp**. **ListasApp** retornará en una lista sin un orden definido (**<ul></ul>**). Cada elemento de la lista será el resultado de la importación del componente **ItemApp**.  

```javascript title="ListasApp.jsx"
import React from 'react'
import { useState } from 'react';
import { Numeros } from './Numeros'
import { ItemApp } from './ItemApp';

export const ListasApp = () => {
  
    const [numbers, setNumbers] = useState(Numeros);

    return (
        <ul>
            {numbers.map(x => <ItemApp key={x} label={x} value={x} />)}
        </ul>
    )
}
```

El archivo **ItemApp.jsx** retorna un componente funcional con tres parámetros : **key**, **label** y **value**. Es decir, cada que importan este componente (como en el caso de **ListasApp.jsx**) deben enviar (opcionalmente) el valor de las 3 propiedades. 

```javascript title="ItemApp.jsx"
import React from 'react'

export const ItemApp = ({key, label, value}) => {
  return (
    <li key={key} value={value}>{label}</li>
  )
}
```

## Adición de un elemento

Cuando adicionamos un elemento en el arreglo debemos hacer uso del **useState**. Recordemos que este hook nos permite almacenar un estado de nuestro componente funcional. 

En nuestro componente **ListasApp** se adicionó la función **handleClick** que responde al evento **onClick** sobre un botón. En la función **handleClick** hacemos uso del **setNumbers** definido en el **useState**. Allí vamos a enviar el arreglo y el nuevo elemento. 

```javascript title="ListasApp.jsx"
import React from 'react'
import { useState } from 'react';
import { Numeros } from './Numeros'
import { ItemApp } from './ItemApp';

export const ListasApp = () => {
  
    const [numbers, setNumbers] = useState(Numeros);

    const handleClick = (event) => {
        let lastNumber = numbers[numbers.length - 1];
        setNumbers([...setNumbers, lastNumber]);
    }

    return (
        <>
        <ul>
            {numbers.map(x => <ItemApp key={x} label={x} value={x} />)}
        </ul>
        <button onClick={handleClick}>Adicionar</button>
        </>
    )
}
```

Si queremos ver el resultado final debemos ejecutar el comando:

```
npm run dev
```