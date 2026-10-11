import {all} from 'redux-saga/effects'
import { watchAuth } from "../features/auth/sagas";
import { watchIncidents } from "../features/incidents/sagas";

export default function* rootSaga(){
    //all() runs all watchers SIMULTANEOUSLY not one after another — at the same time
    yield all([
        watchAuth(),
        watchIncidents()
    ])
}