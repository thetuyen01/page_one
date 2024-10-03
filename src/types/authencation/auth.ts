export interface ILogin {
  phone_or_email?: string;
  password?: string;
  isGoogle?: boolean;
  token?: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface IAuthState {
  userName?: string;
  email?: string;
  isPremium?: boolean;
  isLoggedIn: boolean;
}

export interface IAuthResponse {
  access: string;
  refresh: string;
  isPremium: boolean;
  email: string;
}

export interface IAuthRefreshResponse {
  userInfo: {
    email: string;
    isPremium: boolean;
  };
}
