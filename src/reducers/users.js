export const users = (state = {}, action) => {
  switch (action.type) {
    case "USERS_LIST":
    case "SEARCH_LIST": {
      return { ...state, list: action.payload };
    }
    case "CLEAR_DETAILS":
    case "USER_DETAILS": {
      return { ...state, details: action.payload };
    }
    case "REGISTER-USER":
    case "UPDATE_USER": {
      return { ...state, list: [...state.list, action.payload] };
    }
    case "DELETE-USER": {
      return { ...state, deleted: action.payload };
    }

    default:
      return state;
  }
};
