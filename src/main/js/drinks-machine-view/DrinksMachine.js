import React from 'react';
import DrinksDropdown from "./components/DrinksDropdown.js"
import CashInput from "./components/CashInput.js"
import Change from "./components/Change.js"
import {connect} from "react-redux";

@connect((store) =>{
  return {
    cash : store.cash,
    change : store.change,
    price : store.price,
    drinks: store.drinks
  }
})
export default class DrinksMachine extends React.Component{

  constructor(props) {
    super(props);
    this.handleCashChange = this.handleCashChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleCashChange(value){
    this.props.dispatch({
      type : "CHANGE_CASH",
      payload : value
    });
  }

  handlePriceChange(value){
    this.props.dispatch({
      type : "CHANGE_PRICE",
      payload : value
    });
  }

  onSubmit(e){
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
		return [
      <form  key="drinks-form" onSubmit={this.onSubmit}>
        <DrinksDropdown drinks={this.props.drinks} price={this.props.price} onChange={this.handlePriceChange}/>
        <CashInput cash={this.props.cash} onChange={this.handleCashChange}/>
      </form>,
      <Change change={this.props.change} key="result"/>
		];
	}
};
