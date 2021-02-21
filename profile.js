import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  REGISTER,
} from "../actions/types.js";

// initial state = nilai awal data profile yang ada di store
const initialState = {
  isLoading: false,
  data: 
    {
      email: "",
      foto: "",
      nama: "",
      role: "",
      gender: "",
      telepon: "",
      numPet: NaN,
    },
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case GET_PROFILE_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case UPDATE_PROFILE: {
      return {
        ...state,
        isLoading: true,
      };
    };
    case REGISTER: {
      console.info ('reducer register');
      console.log("action", action.payload)
      return {
          ...state,
          data:{
          ...state.data,
            email: action.email,
            nama: action.nama,
            role: action.role,
            gender: action.gender,
            telepon: action.telepon,
          },
          isLoading: true,
      }
  }
    case UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case UPDATE_PROFILE_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default profile;
