export type Role = 'viewer' | 'responder' | 'admin';

export interface User {
    id: string;
    email:string;
    role:Role;
}

export interface AuthState{
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}