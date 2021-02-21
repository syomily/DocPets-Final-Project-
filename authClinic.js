import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types.js";

const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = admin
  ? { isLoggedIn: true, admin }
  : { isLoggedIn: false, admin: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        admin: payload.admin,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        admin: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        admin: null,
      };
    default:
      return state;
  }
}
