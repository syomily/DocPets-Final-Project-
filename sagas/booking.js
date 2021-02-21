import { takeLatest, put } from "redux-saga/effects";
import { getAccountId, getHeaders } from "../../helpers/function/auth";
import {
  apiAddBooking,
  apiGetBooking,
  apiHistoryBooking,
} from "../../helpers/api/booking";
import {
  BOOKING,
  BOOKING_SUCCESS,
  BOOKING_FAILED,
  GET_BOOKING,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_FAILED,
  GET_HISTORY_BOOKING,
  GET_HISTORY_BOOKING_FAILED,
  GET_HISTORY_BOOKING_SUCCESS,
} from "../actions/types.js";

function* addBooking(action) {
  try {
    const headers = yield getHeaders();
    const accountId = yield getAccountId();
    console.log("headers add booking", action.payload);
    const resAddBooking = yield apiAddBooking(headers, action.payload);
    console.log("setelah api booking", resAddBooking.data);

    yield put({ type: BOOKING_SUCCESS, payload: resAddBooking.data });
    console.log("berhasil menambah booking");
  } catch (e) {
    console.info("Gagal Menambahkan Booking");
    console.log(JSON.stringify(e));
    yield put({ type: BOOKING_FAILED });
  }
}

function* getBooking() {
  try {
    const headers = yield getHeaders();
    const accountId = yield getAccountId();
    console.log("headers saga get booking");

    const resGetBooking = yield apiGetBooking(accountId, headers);
    console.log("ini res get booking", resGetBooking.data);
    yield put({ type: GET_BOOKING_SUCCESS, payload: resGetBooking.data });
    console.log("berhasil mendapatkan data booking");
  } catch (e) {
    console.info("Gagal Mendapatkan Data Booking");
    console.log(JSON.stringify(e));
    yield put({ type: GET_BOOKING_FAILED });
  }
}

function* getHistoryBooking() {
  try {
    const headers = yield getHeaders();
    const accountId = yield getAccountId();
    console.log("headers saga get history");

    const resGetHistoryBooking = yield apiHistoryBooking(accountId, headers);
    console.log("ini res get animal", resGetHistoryBooking.data);
    yield put({
      type: GET_HISTORY_BOOKING_SUCCESS,
      payload: resGetHistoryBooking.data,
    });
    console.log("berhasil mendapatkan data history booking");
  } catch {
    console.info("Gagal Mendapatkan Data History Booking");
    yield put({ type: GET_HISTORY_BOOKING_FAILED });
  }
}

function* bookingSaga() {
  yield takeLatest(BOOKING, addBooking);
  yield takeLatest(GET_BOOKING, getBooking);
  yield takeLatest(GET_HISTORY_BOOKING, getHistoryBooking);
}

export default bookingSaga;
