import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { GifItem } from './GifItem';
import { getGifts } from '../helpers/getGifs';


/**
 * GifGrid recibe una categoría como propiedad y muestra los gifs de esa categoría.
 * 
 * En este punto estamos usando el hook useState para manejar el estado de los gifs.
 * ..el estado inicial de los gifs es un arreglo vacío.
 * ..y usamos la función setImages para actualizar el estado de los gifs.
 * 
 * En este punto se hace uso del componente GifItem para mostrar los gifs.
 * ..GifItem recibe como propiedad un gif con las propiedades id, title y url.
 * ..usamos el operador spread para pasar todas las propiedades del gif como propiedades independientes.
 * ..y este componente se encarga de mostrar la imagen y el título del gif.
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

      <div className='card-grid'>
        {
          /**
           * images es un arreglo de gifs que se obtiene de la API de Giphy.
           * ..usamos el método map para recorrer el arreglo de gifs y retornar un componente GifItem por cada gif.
           * 
           * GifItem recibe como propiedad un gif con las propiedades id, title y url.
           * ..usamos el operador spread para pasar todas las propiedades del gif como propiedades independientes.
           * ..a esto se le conoce como "propiedades dinámicas" o "esparcimiento de propiedades". { ...image }
           * ..esto nos permite usar las propiedades del gif como propiedades independientes en el componente GifItem.
           * { ...image } es equivalente a { id={ image.id } title={ image.title } url={ image.url } }
           * 
           * @param {*} image
           * @returns
           */
          images.map(( image ) => (
            <GifItem 
              key={ image.id }
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}