export interface ApiResponse<T> {
    results: T;
    message: string;
    httpStatus: string;
}

