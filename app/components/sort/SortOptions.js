import React from 'react';
import style from './style.scss';
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* 
*   Created by Madhavan 22/03/2020
**/
class SortOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDialog: false,
            selectedOption: undefined
        };
        this.showSortDialog = this.showSortDialog.bind(this);
        this.cancelDialog = this.cancelDialog.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.sortListItems = this.sortListItems.bind(this);
    }

    showSortDialog() {
        this.setState((state, props) => {
            return {showDialog: true};
        });
    }

    cancelDialog(){
        this.setState((state, props) => {
            return {showDialog: false};
        });
    }

    handleOptionChange(e) {
        const optionValue = e.target.value;
        this.setState((state, props) => {
            return {selectedOption: optionValue};
        }, function(){
            // callback
        });
    }

    sortListItems() {
        this.setState((state, props) => {
            return {showDialog: false};
        }, function(){
            if(this.state.selectedOption)
                this.props.sortListItems(this.state.selectedOption);
        });
    }

    render() {

        return  <div className="sort">
                    <div className="sort-desktop">
                        <div className="sort-by"><span>Sort By</span></div>
                        <a href="#" onClick={() => this.props.sortListItems("high")}><span>Price -- High Low</span></a>
                        <a href="#" onClick={() => this.props.sortListItems("low")}><span>Price -- Low High</span></a>
                        <a href="#" onClick={() => this.props.sortListItems("discount")}><span>Discount</span></a>
                    </div>
                    <div className="sort-mobile" onClick={this.showSortDialog} ><FontAwesomeIcon className="sort-icon" icon={faSort} size="2x" />Sort</div>
                    { this.state.showDialog ?
                    <div className="dialog">
                        <div className="sort-dialog">
                            <div className="dialog-header">Sort Options</div>
                            <div>
                                <div className="radio">
                                    <label>
                                    <input type="radio" value="high" checked={this.state.selectedOption === 'high'} onChange={this.handleOptionChange} />
                                    Price -- High Low
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                    <input type="radio" value="low" checked={this.state.selectedOption === 'low'} onChange={this.handleOptionChange}/>
                                    Price -- Low High
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                    <input type="radio" value="discount" checked={this.state.selectedOption === 'discount'} onChange={this.handleOptionChange}/>
                                    Discount
                                    </label>
                                </div>
                            </div>
                            <div className="button">
                                <a href="#" onClick={this.cancelDialog}>Cancel</a>
                                <a href="#" onClick={this.sortListItems}>Apply</a>
                            </div>
                        </div>
                    </div>

                    : null }
                </div>;
    }
}

export default SortOptions;