import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserInfo } from "../share/types/Auth";

@Injectable({providedIn:'root'})
export class AuthService {
    constructor(private http: HttpClient) {}

    // tao api, tao type kieu du lieu dau vao
    signIn(userInfo: UserInfo): Observable<UserInfo> {
        return this.http.post<UserInfo>('http://localhost:8080/auth/sign-in',userInfo);
    }
}