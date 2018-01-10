import React from 'react';
import PropTypes from 'prop-types';

export default class SearchCity extends React.Component {


    constructor(props) {
        super(props);

        this.input = null;

        this.submitHandler = this.handleSubmit.bind(this);
    }


    render() {

        return (

            <div className="col-xs-12">
                <form className="form-inline" onSubmit={this.submitHandler}>
                    <div className="form-group">

                        <input type="text" className="form-control" name="search-city-name" placeholder="City name, country code"/>

                    </div>

                    <button type="submit" className="btn btn-default">
                        Search
                    </button>
                </form>
            </div>
        );
    }

    handleSubmit(e) {

        e.preventDefault();

        let formData = new FormData(e.target);

        let searchCityName = formData.get('search-city-name');

        this.props.submitFunc(searchCityName);
    }
}

SearchCity.propTypes = {
    submitFunc: PropTypes.func.isRequired
};

SearchCity.defaultProps = {
    submitFunc: null
};