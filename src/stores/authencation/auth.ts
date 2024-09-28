import { defineStore } from "pinia";
import type {
  IAuthState,
  IAuthRefreshResponse,
  IAuthResponse,
} from "@/types/authencation/auth";
import type { ILogin, IRegister } from "@/types/authencation/auth";
import { AuthService } from "@/services/authencation/auth";

const authService = new AuthService();

export const useAuthStore = defineStore("auth", {
  state: (): IAuthState => ({
    userName: "",
    email: "",
    isPremium: false,
    isLoggedIn: false,
  }),
  actions: {
    async login(data: ILogin) {
      const response = await authService.login(data);
      if (response.status === 200 && response.data) {
        this.isLoggedIn = true;
        this.email = (response?.data as IAuthResponse).email;
        this.isPremium = (response?.data as IAuthResponse)?.isPremium;
        localStorage.setItem(
          "refreshToken",
          (response?.data as IAuthResponse).refresh
        );
        localStorage.setItem(
          "accessToken",
          (response?.data as IAuthResponse).access
        );
      }
      return response;
    },
    async register(data: IRegister) {
      const response = await authService.register(data);
      return response;
    },
    async checkRefreshToken() {
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        return (this.isLoggedIn = false);
      }

      const response = await authService.checkRefreshToken({
        refresh_token: refreshToken,
      });
      if (response.status === 200) {
        this.isLoggedIn = true;
        this.email = (response.data as IAuthRefreshResponse).userInfo.email;
        this.isPremium = (
          response.data as IAuthRefreshResponse
        ).userInfo.isPremium;
      } else {
        this.isLoggedIn = false;
        this.email = "";
        this.isPremium = false;
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
      }

      return response;
    },
  },
});
