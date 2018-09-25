export default function(
  state={
    fetching : true,
    error : false,
  },
  action
){
  switch(action.type){
    case "DRINKS_FETCHING_PENDING" : {
      state = {
        ...state,
        drinks : {
          fetching : true,
          error:false,
          value : null
        }
      }
      break;
    }
    case "DRINKS_FETCHING_FULFILLED" : {
      state = state = {
        ...state,
        drinks : {
          fetching : false,
          error:false,
          value:action.payload.data
        }
      }
      break;
    }
    case "DRINKS_FETCHING_REJECTED" : {
      state = {
        ...state,
        drinks : {
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
