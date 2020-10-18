const initialState = {
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "saveuser": {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};

export default AuthReducer;
