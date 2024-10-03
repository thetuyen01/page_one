import endpoints from "@/shared/apis/endpoints";
import { reqPost } from "@/shared/apis/api-client";
import type { ILogin, IRegister } from "@/types/authencation/auth";

export class AuthService {
  login(data: ILogin) {
    return reqPost(endpoints.login, data);
  }

  register(data: IRegister) {
    return reqPost(endpoints.register, data);
  }

  logout(data: { refresh_token: string }) {
    return reqPost(endpoints.logout, data);
  }

  checkRefreshToken(data: { refresh_token: string }) {
    return reqPost(endpoints.refreshToken, data);
  }
}
