import React from 'react';
import PropTypes from 'prop-types';

export default class CityForecast extends React.Component {

    render() {
        return (
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 city-forecast">
                <h3>5 day weather forecast</h3>

                {this.props.children}

            </div>
        );
    }
}


CityForecast.propTypes = {};

CityForecast.defaultProps = {};