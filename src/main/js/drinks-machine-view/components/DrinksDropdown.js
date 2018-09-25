import React from 'react';

export default class DrinksDropdown extends React.Component{

  constructor(props) {
    super(props);
    this.drinkChanged = this.drinkChanged.bind(this);
  }

  getDrinks(){
    const drinksData = this.props.drinks.value;
    const drinks = [
      <option value="0" key="0">Choose drink</option>
    ];
    if(!drinksData){
      return drinks;
    }
    for (let drink of drinksData) {
      drinks.push(
        <option
            value={drink.price}
            key={drink.name} >
          {drink.name + " " + drink.price + "ct"}
        </option>
      );
    }
    return drinks;
  }

  drinkChanged(e){
    this.props.onChange(e.target.value);
  }

  render() {
		return (
      <div class="form-input">
        <div class="label">
          Drink
        </div>
        <div class="input">
          <select onChange={this.drinkChanged} value={this.props.price}>
            {this.getDrinks()}
          </select>
        </div>
      </div>
		);
	}
};
