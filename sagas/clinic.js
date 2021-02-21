import { takeLatest, put } from "redux-saga/effects";
import { apiGetClinicAllRoute } from "../../helpers/api/clinic";
import { getHeaders } from "../../helpers/function/auth";
import { GET_CLINIC_FAILED, GET_CLINIC_SUCCESS, REQUEST_GET_CLINIC } from "../actions/types";

function* getClinic() { //kalo ada payload,ditulis pake kurawal
  try {
    const headers = yield getHeaders();
    const resClinic = yield apiGetClinicAllRoute(headers);
    console.log(resClinic.data.result, "TAMPILKAN KLINIK")
    yield put({ type: GET_CLINIC_SUCCESS, payload: resClinic.data.result }); // dilempar ke reducers
  } catch (e) {
    yield put({ type: GET_CLINIC_FAILED }); // dilempar ke reducer
    console.info("Gagal menampilkan data clinic");
  }
}

function* clinicSaga() {
  console.info("authsaga()");
  yield takeLatest(REQUEST_GET_CLINIC, getClinic); // bikin request get clinic
}
export default clinicSaga;