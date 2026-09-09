
//Use type when you're defining a set of specific values
//Use interface when you're defining the shape of an object.
export type Severity = 'critical' | 'high' | 'low';
export type Status = 'open' | 'investigating' | 'resolved';

export interface Incident {
    id: string;
    title: string;
    severity: Severity;
    status: Status;
    assignee: string;
    team: string;
    createdAt : string;
}
export interface IncidentState {
    list: Incident[];
    selected: Incident | null;
    loading : boolean;
    error: string | null;
}