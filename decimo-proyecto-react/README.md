# Formularios

El objetivo de esta clase es implementar un formulario haciendo uso de componentes funcionales. 

Antes de crear el componente crear el proyecto. Al igual que en las clases anteriores vamos hacer uso de Vite. Para crear un proyecto con Vite debemos ejecutar el siguiente comando en la terminal:

```
npm create vite@latest
```

Después de ejecutar este comando se debe digitar el nombre del proyecto (en mi caso deje decimo-proyecto-react), el framework (React) y la variante (JavaScript + SWC). Cuando finalice la creación debemos realizar la instalación de los paquetes. La instalación de los paquetes se realiza a través del siguiente comando:

```
npm install
```

Vamos a eliminar los archivos App.jsx, App.css e index.css y vamos a crear los archivos FormularioApp.jsx e ItemApp.jsx.

En el archivo **ItemApp.jsx** vamos a exponer un componente funcional nombrado **ItemApp**. Este componente funcional recibe obligatoriamente los parámetros : **key**, **label** y **value**. De los tres parámetros el único que es de tipo **number** es el parámetro **key**. 

```javascript title="ItemApp.jsx"
import React from 'react'
import PropTypes from 'prop-types'

export const ItemApp = ({key, label, value}) => {  
  return (
    <li key={key} value={value}>{label}</li>
  )
}

ItemApp.propTypes = {
    key: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired
}
```

En el archivo **FormularioApp.jsx** vamos a exponer un componente funcional nombrado **FormularioApp**. El componente **FormularioApp** tiene definidas tres funciones que responden a los eventos **onSubmit** (la función fue nombrada **handleSubmit**), el evento **onClick** (la función fue nombrada **handleClick**) y el evento **onChange** (la función fue nombrada **handleChange**).

El componente **FormularioApp** va retornar un formulario el cuál tiene un campo de texto donde el usuario digitará el nombre de una tarea. Después de darle click al botón **Adicionar**, se creara un registro de una tarea y se mostrará al final de nuestro componente (en manera de lista sin un orden especifico). 

El campo de texto tiene asociado un evento **onChange** para que actualice el valor de la variable **nuevaTarea**. Las tareas que son adicionadas en nuestro componente son insertadas al arreglo creado bajo la variable **tareas**. Cada adición es generado a partir de un evento **onClick** de un botón adicionado al final del formulario y previo a la impresión de la lista no ordenada especificamente. 

```javascript title="FormularioApp.jsx"
import React from 'react'
import { useState } from 'react'
import { ItemApp } from './ItemApp'

export const FormularioApp = () => {

    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleClick = (event) => {
        const tam = tareas.length + 1;
        setTareas([...tareas, { id: tam, tarea: nuevaTarea }]);
    }

    const handleChange = (event) => {
        setNuevaTarea(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digite la tarea' onChange={handleChange} />
                <button onClick={handleClick}>Adicionar</button>
            </form>
            <ul>
                {tareas && tareas.map(x => <ItemApp key={x.id} value={x.tarea} label={x.tarea} />)}
            </ul>
        </>
    )
}
```