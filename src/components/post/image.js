import PropTypes from 'prop-types';
import React from 'react';

/**
 * Displays images
 * @method Image
 * @param  {object} props 
 */
const Image = ({ imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoL3I__nDf2VpGRLOB6jaeL_N0i4e36sCOjw&usqp=CAU' }) => {
    if (imageUrl) {
        return <img className="img-responsive" src={imageUrl} alt="" />;
    }
    return null;
};

Image.propTypes = {
    imageUrl: PropTypes.string
};

export default Image;
