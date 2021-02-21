// import { POST_USER_BEGIN, POST_USER_SUCCESS, POST_USER_FAIL } from "./types"; // type dari types untuk menghindari typo
// import axios from "axios"; // axios untuk get data

// export const postUser = () => async (dispatch) => {
//   dispatch({
//     type: POST_USER_BEGIN,
//     loading: true,
//     error: null,
//   });
//   try {
//     const res = await axios.post("13.250.101.249:3000/user/signup");
//     console.log("res dari action", res); // hasil response get data dari url di atas apabila sukses
//     dispatch({
//       type: POST_USER_SUCCESS,
//       loading: false,
//       payload: res.data, // data yang nantinya dimasukkan di reducer
//       error: null,
//     });
//   } catch (error) {
//     dispatch({
//       type: POST_USER_FAIL,
//       error: error.response,
//     });
//     console.log(error);
//   }
// };
