// Use import type when importing interfaces and types:
import type { Incident } from "./types";

export const FETCH_INCIDENTS_REQUEST = 'FETCH_INCIDENTS_REQUEST';
export const FETCH_INCIDENTS_SUCCESS = 'FETCH_INCIDENTS_SUCCESS';
export const FETCH_INCIDENTS_FAILURE = 'FETCH_INCIDENTS_FAILURE';
export const SELECT_INCIDENT = 'SELECT_INCIDENT';
export const START_POLLING = 'START_POLLING';
export const STOP_POLLING = 'STOP_POLLING';

export const fetchIncidentsRequest = () =>
    ({type: FETCH_INCIDENTS_REQUEST} as const);

export const fetchIncidentsSuccess = (incidents: Incident[]) =>
    ({type: FETCH_INCIDENTS_SUCCESS, payload: incidents} as const);

export const fetchIncidentsFailure = (error:string) =>
    ({type: FETCH_INCIDENTS_FAILURE, payload:error} as const);

export const selectIncident = (incident: Incident) =>
    ({type: SELECT_INCIDENT, payload:incident} as const);

export const startPolling = () =>
    ({ type: START_POLLING } as const);

export const stopPolling = () =>
    ({ type: STOP_POLLING } as const);

//ReturnType — reads what a function returns and turns it into a type
export type IncidentActions = 
    |   ReturnType<typeof fetchIncidentsRequest>
    |   ReturnType<typeof fetchIncidentsSuccess>
    |   ReturnType<typeof fetchIncidentsFailure>
    |   ReturnType<typeof selectIncident>
    |   ReturnType<typeof startPolling>
    |   ReturnType<typeof stopPolling>;