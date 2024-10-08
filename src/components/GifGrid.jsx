import PropTypes from 'prop-types'
import { getGifts } from '../helpers/getGifs';
import { useEffect, useState } from 'react';


/**
 * GifGrid recibe una categoría como propiedad y muestra los gifs de esa categoría.
 * 
 * En este punto estamos usando el hook useState para manejar el estado de los gifs.
 * ..el estado inicial de los gifs es un arreglo vacío.
 * ..y usamos la función setImages para actualizar el estado de los gifs.
 * 
 * Este componente retorna un fragmento con un título h3 y una lista ordenada (ol) de gifs.
 * ..el título h3 muestra la categoría de los gifs. y la lista ordenada muestra los gifs de esa categoría.
 * 
 * @param {*} param0 
 * @returns 
 */
export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  /**
   * getImages es una función que se encarga de obtener los gifs de la 
   * ..categoría que se le pase por parámetro ( category ).
   * ..es una función asíncrona que retorna una promesa.
   * 
   * @param {string} category
   * @returns
   */
  const getImages = async() => {
    const newImages = await getGifts(category);
    setImages(newImages);
  }

  /**
   * useEffect es un hook que nos permite ejecutar efectos secundarios en componentes funcionales.
   * ..es decir, nos permite ejecutar código que no tiene que ver con la representación del componente.
   * 
   * Antes de hacer la petición a la API de Giphy, validamos si la categoría está vacía.
   * ..si la categoría está vacía, retornamos un return para que la función no haga nada.
   * ..esto evita que se hagan peticiones innecesarias a la API, si la categoría está vacía.
   * 
   * ⚠️useEffect no puede ser async, por lo que no podemos hacer la petición a la API de Giphy dentro de useEffect.
   *    🚫useEffect( async() => { const newImages = await getGifts(category); setImages(newImages) }, [] )
   * 
   * Hay varias formas de solucionar esto:
   * 1. Usar then en la llamada a la función getGifts(category).
   *   getGifts(category)
   *    .then( newImages => setImages(newImages) );
   * 
   * 2. Crear una función asíncrona dentro de useEffect y llamarla.
   *  const fetchGifts = async() => { const newImages = await getGifts(category); setImages(newImages) }
   * 
   * 3. ✅Crear una función asíncrona fuera de useEffect y llamarla.
   *  const getImages = async() => { const newImages = await getGifts(category); setImages(newImages) }
   */
  useEffect( () => {
    if (category.trim() === '') return;
    getImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <>
      <h3>{ category }</h3>

      <ol>
        {/* images.map */}
        {
          // 1️⃣sin desestructurar
          // images.map(image => ( <li key={ image.id }>{ image.title }</li> ))

          // 2️⃣desestructurando
          images.map(({ id, title }) => (
            <li key={ id }>{ title }</li>
          ))
        }
      </ol>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}