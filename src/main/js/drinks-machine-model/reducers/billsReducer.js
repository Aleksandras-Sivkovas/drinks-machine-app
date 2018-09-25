export default function(
  state={
    fetching : true,
    error : false,
  },
  action
){
  switch(action.type){
    case "BILLS_FETCHING_PENDING" : {
      state = {
        ...state,
        bills : {
          fetching : true,
          error:false,
          value : null
        }
      }
      break;
    }
    case "BILLS_FETCHING_FULFILLED" : {
      state = state = {
        ...state,
        bills : {
          fetching : false,
          error:false,
          value:action.payload.data.value
        }
      }
      break;
    }
    case "BILLS_FETCHING_REJECTED" : {
      state = {
        ...state,
        bills : {
          fetching : false,
          error:true,
          value : null
        }
      }
      break;
    }
  }
  return state;
}
