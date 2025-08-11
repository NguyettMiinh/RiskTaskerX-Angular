import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../share/types/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/auth/';
  constructor(private http: HttpClient) {}

  // tao api, tao type kieu du lieu dau vao
  signIn(userInfo: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.API_URL +
      'sign-in',
      userInfo 
    );
  }
}

// HttpClient.post<T> là một generic function, nghĩa là bạn truyền vào kiểu dữ liệu mà bạn mong đợi server trả về.
/**
 * Bạn gọi API bằng HttpClient → Angular trả về một Observable.

Observable sẽ đợi server trả dữ liệu (nó giống người đứng canh bưu điện).

Khi server trả lời, Observable gửi dữ liệu xuống cho tất cả những ai đã .subscribe() nó.

Nếu bạn không subscribe, thì Observable sẽ không gửi gì hết → bạn sẽ không nhận được dữ liệu.
 */
