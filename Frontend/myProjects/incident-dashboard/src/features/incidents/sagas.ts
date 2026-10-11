import { incidentApi } from "../../services/incidentApi"
import { fetchIncidentsFailure, fetchIncidentsSuccess, START_POLLING } from "./actions"
import { call, delay, put, takeLatest } from "redux-saga/effects";
import type { Incident } from "./types";

// fetchIncidentsSaga — reusable, does just one fetch
function* fetchIncidentsSaga(){
    try {
        const data:Incident[] = yield call(incidentApi.getAll)
        yield put(fetchIncidentsSuccess(data))
    } catch(error:unknown){
        const message = error instanceof Error ? error.message : 'Failed to fetch incidents';
        yield put(fetchIncidentsFailure(message))
    }
}

// pollIncidentsSaga — the loop, calls fetch repeatedly
function* pollIncidentsSaga(){
    while(true){
        yield call(fetchIncidentsSaga)
        yield delay(30000)
    }
}

// watchIncidents — the listener
export function* watchIncidents(){
    yield takeLatest(START_POLLING, pollIncidentsSaga)
}
