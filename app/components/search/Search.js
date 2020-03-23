import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.scss';

/* 
*   Created by Madhavan 22/03/2020
**/
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput : '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        return  <div>
                    <input size="10" type="text" className="text-line" name="searchInput" onChange={this.handleChange}  />
                    <FontAwesomeIcon onClick={() => this.props.searchCart(this.state.searchInput)} icon={faSearch} style={{ color: '#fff' }} size="2x" />
                </div>;
    }
}

export default Search;