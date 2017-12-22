const initialState = {
  user: {},
};

const user = (state = initialState, action) => {
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
      };
    }
    default:
      return {
        ...initialState,
      };
  }
};

export default user;
