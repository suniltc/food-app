import React from 'react';
import PropTypes from 'prop-types';

const NonVeg = (props) => {
    return (
        <span className="mr-2">
        	<img src={props.nonVeg ? "/img/nonveg-icon.png" : "/img/veg-icon.png"} className="spicy" alt="food"/>
            <span className="font-italic food">{props.nonVeg ? 'Non-Veg' : 'Veg'}</span>
        </span>
    );
}

NonVeg.propTypes = {
    nonVeg: PropTypes.bool
};

export default NonVeg;
