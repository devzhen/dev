import React from 'react';
import PropTypes from 'prop-types';

export default class CityForecast extends React.Component {

    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <h2>5 day weather forecast</h2>

                {this.props.children}

            </div>
        );
    }
}


CityForecast.propTypes = {};

CityForecast.defaultProps = {};