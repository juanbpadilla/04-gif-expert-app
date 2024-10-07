import { useState } from "react"

export const GifExpertApp = () => {

  /**
   * ⚠️ IMPORTANTE:
   * Los hooks son funciones que nos permiten conectar el estado y el ciclo de vida de los componentes funcionales.
   * estos son pocisionales, es decir, el orden en el que se declaran es importante.
   * no se pueden llamar condicionalmente, ni dentro de un loop. Solo se pueden llamar en el nivel más alto de un componente.
   */
  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  console.log(categories);

  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gif */}
      <ol>
        { 
          categories.map( category => {
            return <li key={ category }>{ category }</li>
          }) 
        }
      </ol>
        {/* Gif Item */}

    </>
  )
}
