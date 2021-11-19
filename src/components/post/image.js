import PropTypes from 'prop-types';
import React from 'react';

/**
 * Displays images
 * @method Image
 * @param  {object} props 
 */
const Image = ({ imageUrl }) => {
        return <img className="img-responsive" src={imageUrl ? imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg'} alt="" />;
};

Image.propTypes = {
    imageUrl: PropTypes.string
};

export default Image;
