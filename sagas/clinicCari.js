import { takeLatest, put } from "redux-saga/effects";
import { apiGetClinicByNameRoute } from "../../helpers/api/clinic";
import { getHeaders } from "../../helpers/function/auth";
import { GET_CLINIC_FAILED, GET_CLINIC_SUCCESS_SEARCH } from "../actions/types";

function* getClinic(action) {
  try {
    const headers = yield getHeaders();
    const resClinic = yield apiGetClinicByNameRoute(action.payload, headers);
    yield put({ type: GET_CLINIC_SUCCESS_SEARCH, payload: resClinic.data });
  } catch (e) {
    yield put({ type: GET_CLINIC_FAILED });
    console.info("Gagal menampilkan data clinic 1");
  }
}

function* clinicCariSaga() {
  console.info("authsaga()");
  yield takeLatest("GET_CLINIC_CARI", getClinic);
}
export default clinicCariSaga;
