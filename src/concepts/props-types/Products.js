import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../defaults/sample.png';

// NOTE: url has some missing parameter, so we use proptypes so we dont get error if we dont get that feild in API

const Product = ({ name, price, image }) => {
  // check if image is present or not
  const image_url = image && image.url;
  return (
    <article className="product">
      <img src={image_url || defaultImage} alt={name} />
      <h3>{name}</h3>
      <b>${price}</b>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// NOTE: use the not operator or defaultprops

Product.defaultProps = {
  name: 'Default Name',
  price: 99.99,
  image: defaultImage,
};

export default Product;
