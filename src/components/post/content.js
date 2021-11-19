import PropTypes from 'prop-types';
import React from 'react';

/**
 * Displays post content
 * @method Content
 * @param  {object} props
 */
const Content = props => {
    const { opening_crawl } = props;
    return <p className="content">{ opening_crawl }</p>;
};

Content.propTypes = {
    post: PropTypes.object
};

export default Content;
