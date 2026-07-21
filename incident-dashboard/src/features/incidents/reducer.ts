import {
  FETCH_INCIDENTS_FAILURE,
  FETCH_INCIDENTS_REQUEST,
  FETCH_INCIDENTS_SUCCESS,
  SELECT_INCIDENT,
  START_POLLING,
  STOP_POLLING,
  type IncidentActions,
} from "./actions";
import type { IncidentState } from "./types";

const initialState: IncidentState  = {
  list: [],
  selected: null,
  loading: false,
  error: null,
};
export function incidentReducer(
  state: IncidentState= initialState,
  action: IncidentActions,
): IncidentState {
  switch (action.type) {
    case FETCH_INCIDENTS_REQUEST:
        return {...state, loading:true, error:null }

    case FETCH_INCIDENTS_SUCCESS:
        return {...state, loading:false, list:action.payload}

    case FETCH_INCIDENTS_FAILURE:
        return {...state, loading:false, error:action.payload}

    case SELECT_INCIDENT:
        return {...state, selected:action.payload}

    case START_POLLING:
        return state;

    case STOP_POLLING:
        return state;
        
    default:
      return state;
  }
}
