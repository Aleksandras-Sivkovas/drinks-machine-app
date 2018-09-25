function calculateChange(state){
  const price = state.price;
  const cash = state.cash;
  state.change = {};
  const containedBills = state.bills.value;
  let change = cash - price;
  if(change < 0){
    state.change.status = "CASH_TOO_LOW";
    return state
  }
  let start;
  for(
    start = 0;
    ((start < containedBills.length) && (containedBills[start] > change));
    start++
  );

  if(start == containedBills.length){
    state.change.status = "NO_CHANGE";
    return state
  }

  state.change.value = [];
  for(
    let i = start;
    ((i < containedBills.length) || (change != 0));
    i++
  ){
    const bill = containedBills[i];
    const amount = Math.floor(change/bill);
    if(amount == 0){
      continue;
    }
    const item = {
      bill : bill,
      amount : amount
    };
    state.change.value.push(item);
    change = change % bill;
  }

  if(change != 0){
    state.change.status = "NO_CHANGE";
    return state
  }

  state.change.status = "OK";
  return state;

}

export default function(
  state={
    cash:0,
    change: {
      status: "OK",
      value:[
      ]
    },
    price : 0,
  },
  action
){
  switch(action.type){
    case "CHANGE_PRICE" : {
      state = calculateChange({...state,price : action.payload});
      break;
    }
    case "CHANGE_CASH" : {
      state = calculateChange({...state,cash : action.payload});
      break;
    }
  }
  return state;
}
