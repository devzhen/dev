import React from 'react';
import PropTypes from 'prop-types';
import SearchCity from './SearchCity';

export default class Root extends React.Component {

    render() {
        return (
            <div>
                <SearchCity/>
            </div>
        );
    }
}


Root.propTypes = {};

Root.defaultProps = {};