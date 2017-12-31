const initialState = {
  image: {},
};

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'IMAGE_ADD': {
      const { name, uri } = action;
      return {
        ...state,
        image: {
          name,
          uri,
        },
      };
    }
    case 'IMAGE_REMOVE_ALL': {
      return {
        ...state,
        image: {},
      };
    }
    default:
      return {
        ...initialState,
      };
  }
};

export default appReducers;
