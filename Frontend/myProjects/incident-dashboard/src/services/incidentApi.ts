import type { Incident } from "../features/incidents/types";
import { api } from "./axiosInstance";

export const incidentApi = {
    //The type in <> always describes what comes back from the API.
    //PUT    →  replace the entire object
    //PATCH  →  update only specific fields
    //getAll →  GET → fetch all incidents
    //getById →  GET → fetch one incident
    //create  →  POST → create new incident
    //updateStatus → PATCH → update one field of an incident
    //Omit takes the Incident interface and removes those two fields:
    getAll : () =>
        api.get<Incident[]>('/incidents').then((r)=> r.data),
    getById : (id:string) =>
        api.get<Incident>(`/incidents/${id}`).then((r)=> r.data),
    create: (data: Omit<Incident, 'id' | 'createdAt'>) =>
        api.post<Incident>('/incidents', data).then((r) => r.data),
    updateStatus:(id:string, status:Incident['status'])=>
        api.patch<Incident>(`/incidents/${id}`, {status}).then((r) => r.data)
}