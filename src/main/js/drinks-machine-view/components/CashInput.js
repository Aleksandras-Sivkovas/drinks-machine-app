import React from 'react';


export default class CashInput extends React.Component{

  constructor(props) {
    super(props);
    this.handleCashChange = this.handleCashChange.bind(this);
  }

  handleCashChange(event){
    if(event.target.value === ""){
      this.props.onChange(0);
      return;
    }
    const value = parseInt(event.target.value);
    if(isNaN(value) || (value <= 0)){
      return;
    }
    this.props.onChange(value);
  }
  render() {
    const value = this.props.cash == 0 ? "" : this.props.cash;
		return (
      <div class="form-input">
        <div class="label">
          Cash
        </div>
        <div class="input">
          <input type="text" value={value} onChange={this.handleCashChange} />
        </div>
      </div>
		);
	}
};
