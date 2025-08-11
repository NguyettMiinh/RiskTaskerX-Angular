import { ApiResponse } from "./api";

// payload gui len khi login
export interface LoginRequest {
    email: string;
    password: string;
}
// thong tin user khi server tra ve
export interface LoginResults {
    token: string;
    id: number;
    username:string;
    email: string;
}

export type LoginResponse = ApiResponse<LoginResults>;