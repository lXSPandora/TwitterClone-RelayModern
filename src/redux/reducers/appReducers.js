const initialState = {
  image: '',
};

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'IMAGE_ADD': {
      const { image } = action;
      return {
        ...state,
        image,
      };
    }
    case 'IMAGE_REMOVE_ALL': {
      return {
        ...state,
        image: '',
      };
    }
    default:
      return {
        ...initialState,
      };
  }
};

export default appReducers;
