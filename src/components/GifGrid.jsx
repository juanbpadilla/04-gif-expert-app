import PropTypes from 'prop-types'

/**
 * 1️⃣Esta función se encarga de obtener los gifs de la categoría que se le pase por parámetro ( category ).
 * ..es una función asíncrona que retorna una promesa.
 * ..obtiene los gifs de la API de Giphy. el API_KEY se obtiene de las variables de entorno.
 * 
 * 2️⃣const resp = await fetch( url ) hace una petición a la API de Giphy y espera a que la petición se resuelva.
 * ..resp.json() convierte la respuesta de la API en un objeto JSON.
 * ..const { data } = await resp.json(); extrae la propiedad data de la respuesta de la API.
 * 
 * 3️⃣data.map( img => ({ ... }) ) recorre el arreglo de gifs y retorna un nuevo arreglo con los gifs que necesitamos.
 * ..En este caso, solo necesitamos el id, title y url de cada gif. Asi q creamos un objeto con esas propiedades.
 * ..data.map( img => ({ id: img.id, title: img.title, url: img.images.downsized_medium.url }) )
 * ..y se lo asignamos a la constante gifs.
 * 
 * 4️⃣Y finalmente, retornamos el arreglo gifs.
 * 
 * @param {*} category 
 * @returns 
 */
const gefGifts = async( category ) => {

  const apiKey = import.meta.env.VITE_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  console.log(gifs);
  return gifs;
}

export const GifGrid = ({ category }) => {
  
  gefGifts(category);

  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}