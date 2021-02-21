import { takeLatest, put } from "redux-saga/effects";

import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  LOGOUT,
} from "../actions/types";

//import ACTION from '../types'

import { GET_PROFILE } from "../actions/types";
import {
  removeToken,
  saveAccountId,
  saveToken,
} from "../../helpers/function/auth.js";
import { apiLogin, apiRegister } from "../../helpers/api/auth";
import { GET_ANIMAL } from "../actions/types";


function* login(action) {
  try {
    //LOGIN
    const resLogin = yield apiLogin(action.payload);
    console.info("data resLogin :", resLogin.data);

    if (resLogin && resLogin.data) {
      // save token to local storage
      yield saveToken(resLogin.data.result.token);
      yield saveAccountId(resLogin.data.id);

      yield put({ type: LOGIN_SUCCESS });

      console.info("Selamat datang, " + resLogin.data.result.user.nama);
      yield put({ type: GET_PROFILE });
      yield put({ type: GET_ANIMAL });
    } else {
      // show alert
      console.info("Login Gagal");
      yield put({ type: LOGIN_FAILED });
    }
  } catch {
    console.info("Gagal login");
    yield put({ type: LOGIN_FAILED });
  }
}

function* register(action) {
  try {
    console.info("register saga: ", action);
    const resRegister = yield apiRegister(action.payload);
    console.info("data resRegister :", resRegister.data);

    if (resRegister && resRegister.data) {
      // save token to local storage
      yield saveToken(resRegister.data.result.token);
      yield saveAccountId(resRegister.data.id);

      yield put({ type: GET_PROFILE, payload: resRegister.data.result.user });
      yield put({ type: REGISTER_SUCCESS });
      console.info("Selamat Datang, " + resRegister.data.result.user.nama);
    } else {
      console.info("Register gagal");
      yield put({ type: REGISTER_FAILED });
    }
  } catch (e) {
    console.info("Gagal register");
  }
}

function* logout() {
  try {
    yield removeToken();
  } catch (e) {
    console.info("Gagal logout");
  }
}

function* authSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTER, register);
  yield takeLatest(LOGOUT, logout);
}
export default authSaga;
