const initialState = {
    searchingAlgorithm: "",
    searchingColor: "",
    searchingSpeed: 1000,
    play: false,
    arrVal: [],
  };
  
  const updateProps = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_COLOR": {
        return { ...state, searchingColor: action.searchingColor };
      }
  
      case "UPDATE_ALGORITHM": {
        return { ...state, searchingAlgorithm: action.searchingAlgorithm };
      }
  
      case "UPDATE_SPEED": {
        return { ...state, searchingSpeed: action.searchingSpeed };
      }
  
      // case "UPDATE_NUM": {
      //   return { ...state, amt: action.amt };
      // }
      
      case "UPDATE_ARRAY": {
        return { ...state, arrVal: action.arrVal };
      }
  
      case 'PLAY_PAUSE': {
        return {...state,play:action.play};
     }
  
      default:
        return state;
    }
  };
  export default updateProps;
  