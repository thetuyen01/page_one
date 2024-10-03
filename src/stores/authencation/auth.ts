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
        this.setToken({
          accessToken: (response?.data as IAuthResponse).access,
          refreshToken: (response?.data as IAuthResponse).refresh,
        });
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
        this.isLoggedIn = false;
        return false;
      }

      const response = await authService.checkRefreshToken({
        refresh_token: refreshToken,
      });
      if (response.status === 200 && response.data) {
        const { userInfo } = response.data as IAuthRefreshResponse;
        this.isLoggedIn = true;
        this.email = userInfo.email;
        this.isPremium = userInfo.isPremium;
      } else {
        this.isLoggedIn = false;
        this.email = "";
        this.isPremium = false;
        this.removeToken();
      }

      return response;
    },

    setToken(data: { accessToken: string; refreshToken: string }) {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    },

    getAccessToken() {
      return localStorage.getItem("accessToken");
    },

    removeToken() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    async logout() {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        this.isLoggedIn = false;
        return false;
      }
      const response = await authService.logout({
        refresh_token: refreshToken,
      });
      return response;
    },
    setLoggedIn(value: boolean) {
      this.isLoggedIn = value;
    },
  },
});
