import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://fakestoreapi.com"
})

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export const loginUser = async (
    credentials: LoginCredentials
): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>("/auth/login", credentials)
    return response.data
}