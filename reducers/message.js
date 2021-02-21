<<<<<<< HEAD
import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload };

    case CLEAR_MESSAGE:
      return { message: "" };

    default:
      return state;
  }
}
=======
// import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

// const initialState = {};

// export default function (state = initialState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case SET_MESSAGE:
//       return { message: payload };

//     case CLEAR_MESSAGE:
//       return { message: "" };

//     default:
//       return state;
//   }
// }
>>>>>>> d0325140346ae3bfb26e89d79804c23598ea7d93
