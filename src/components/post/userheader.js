import PropTypes from 'prop-types';
import React from 'react';
import humanize from 'humanize-duration';

/**
 * Common user header component to use in posts and comments
 * @method UserHeader
 * @param  {Object}   props
 */
const UserHeader = ({ created: date, director, imageUrl }) => {
    return (
        <div className="user-header">
            <div className="user-info-section">
                <img src={imageUrl} width={25} height={25} className="img-circle" />
                <a>{director}</a>
            </div>
            <small className="date">
                {humanize(new Date() - new Date(date), {
                    largest: 1,
                    round: true,
                    units: ['d', 'h', 'm']
                })}{' '}
                ago
            </small>
        </div>
    );
};

UserHeader.propTypes = {
    imageUrl: PropTypes.string,
    director: PropTypes.string,
    title: PropTypes.string,
    created: PropTypes.string,

    date: PropTypes.number,
    user: PropTypes.shape({
        profilePicture: PropTypes.string.isRequired,
        name: PropTypes.string
    })
};

UserHeader.defaultProps = {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT05A1XDOxuIeEdlYTby3XxKV27iIfda6H_w&usqp=CAU'
};

export default UserHeader;
