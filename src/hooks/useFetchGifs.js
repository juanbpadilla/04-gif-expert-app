import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGifs'

/**
 * useFetchGifs es un hook personalizado que se encarga de obtener los gifs de la categoría que se le pase por parámetro.
 * ..useFetchGifs retorna un objeto con dos propiedades:
 * ..images: un arreglo de gifs que se obtiene de la API de Giphy.
 * ..isLoading: un estado que nos permite saber si se están cargando los gifs.
 * 
 * useFetchGifs recibe una categoría como parámetro.
 * ..y se encarga de obtener los gifs de esa categoría.
 * 
 * En este punto estamos usando dos useState para manejar el estado de los gifs y el estado de carga.
 * ..el estado inicial de los gifs es un arreglo vacío.
 * ..y el estado inicial de isLoading es true.
 * ..y usamos la función setImages para actualizar el estado de los gifs 
 * ..y setIsLoading para actualizar el estado de carga.
 * 
 * @param {string} category 
 * @returns 
 */
export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState( true );

  /**
   * getImages es una función que se encarga de obtener los gifs de la 
   * ..categoría que se le pase por parámetro ( category ).
   * ..es una función asíncrona que retorna una promesa.
   * 
   * Cuando getImages se ejecuta, setIsLoading se establece en true.
   * ..esto nos permite mostrar un mensaje de carga mientras se obtienen los gifs.
   * ..y cuando se obtienen los gifs, setIsLoading se establece en false, indicando que ya se obtuvieron los gifs.
   * 
   * @param {string} category
   * @returns
   */
  const getImages = async() => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading( false );
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

  return {
    images: images,
    isLoading: isLoading
  }

}
