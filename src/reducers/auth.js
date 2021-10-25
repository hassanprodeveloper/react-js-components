// importing types from constants definded in constant/ index file
import { LOGIN } from "../constant/index";

const INITIAL_STATE = {
  loging: false,
  creating: false,
  token: "",
  expiry: "",
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  console.log(`auth reducer type:${action.type}`, action.payload);
  switch (action.type) {
    // ---------------------------------- login cases ---------------------------------- //
    // 1 case when login requested
    case `${LOGIN}_REQUEST`:
      return {
        ...state,
        loging: true,
      };
    // 2 case when login successful
    case `${LOGIN}_SUCCESS`:
      return {
        ...state,
        loging: false,
        token: action.payload.token,
        expiry: action.payload.expiry,
        user: action.payload.user,
      };
    // 3 case when login rejected response get from api
    case `${LOGIN}_FAIL`:
      return {
        ...state,
        loging: false,
      };
  }
  return state;
};
