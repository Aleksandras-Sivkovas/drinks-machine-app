import React from 'react';


export default class Change extends React.Component{

  getChange(){
    const change = this.props.change;

    switch(change.status){
      case "CASH_TOO_LOW" : {
        return "Please enter more cash.";
      }
      case "NO_CHANGE" : {
        return "Machine has no bills to give change.";
      }
      case "OK" : {
        const changeItems = change.value;
        if(changeItems.length == 0){
          return "No change."
        }
        let result = [];
        for(let item of changeItems){
          result.push(
            <div key={item.bill}>
              {item.bill + " ct : " + item.amount}
            </div>
          );
        }

        return result;
      }
    }
    return "Choose a drink and enter cash to receive change.";
  }
  render() {
		return (
      <div class="form-input">
        <div class="label">
          Change
        </div>
        <div class="input">
          {this.getChange()}
        </div>
      </div>
		);
	}
};
