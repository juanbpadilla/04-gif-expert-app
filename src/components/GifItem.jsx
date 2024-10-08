import PropTypes from 'prop-types';

/**
 * GifItem recibe un gif con las propiedades title y url.
 * ..y se encarga de mostrar la imagen y el título del gif.
 * 
 * @param {*} param0 
 * @returns 
 */
export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

