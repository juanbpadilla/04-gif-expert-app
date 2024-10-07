import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  /**
   * ⚠️ IMPORTANTE:
   * Los hooks son funciones que nos permiten conectar el estado y el ciclo de vida de los componentes funcionales.
   * estos son pocisionales, es decir, el orden en el que se declaran es importante.
   * no se pueden llamar condicionalmente, ni dentro de un loop. Solo se pueden llamar en el nivel más alto de un componente.
   */
  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
    /**
     * Hay muchas formas de agregar un nuevo elemento a un arreglo usando el hook useState.
     * 1. crear una variable que contenga el nuevo arreglo y luego pasarlo al hook.
     * const newCategories = [...categories, 'Valorant'];
     * setCategories(newCategories)
     * 
     * 2. Usar el callback del hook useState.
     * setCategories( cat => [ ...cat, 'Valorant' ] );
     * 
     * 3. Pasar el nuevo arreglo directamente al hook.
     * setCategories([ ...categories, 'Valorant' ]);
     */
    setCategories([ 'Valorant', ...categories ]);
  }

  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory />

      {/* Listado de Gif */}
      <button onClick={ onAddCategory }>Agregar</button>
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
