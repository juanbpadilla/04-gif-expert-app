import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {
  return (
    <>
      <h3>{ category }</h3>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}