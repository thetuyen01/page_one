import axios from "axios";
import type {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const instance = axios.create({
  baseURL: "http://206.189.82.216:8000/api/v1", // Thay đổi URL này thành URL cơ bản của API của bạn
  headers: {
    "Content-Type": "application/json",
  },
});

// Hàm để lấy token từ localStorage hoặc sessionStorage
const getToken = (): string | null => {
  return localStorage.getItem("token"); // hoặc sessionStorage.getItem('token');
};

// Interceptor để thêm token vào header của tất cả các yêu cầu
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.headers["Authorization"] === undefined) {
      const token = getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const reqGet = async <T>(
  url: string,
  config?: AxiosRequestConfig,
  useToken: boolean = true
): Promise<AxiosResponse<T>> => {
  try {
    if (!useToken) {
      config = config || {};
      config.headers = config.headers || {};
      delete config.headers["Authorization"];
    }
    const response = await instance.get<T>(url, config);
    return response;
  } catch (error) {
    throw error;
  }
};

const reqPost = async <T>(
  url: string,
  data: any,
  useToken: boolean = true,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    if (!useToken) {
      config = config || {};
      config.headers = config.headers || {};
      delete config.headers["Authorization"];
    }
    const response = await instance.post<T>(url, data, config);
    return response;
  } catch (error) {
    throw error;
  }
};

const reqPut = async <T>(
  url: string,
  data: any,
  useToken: boolean = true,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    if (!useToken) {
      config = config || {};
      config.headers = config.headers || {};
      delete config.headers["Authorization"];
    }
    const response = await instance.put<T>(url, data, config);
    return response;
  } catch (error) {
    throw error;
  }
};

const reqDelete = async <T>(
  url: string,
  useToken: boolean = true,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    if (!useToken) {
      config = config || {};
      config.headers = config.headers || {};
      delete config.headers["Authorization"];
    }
    const response = await instance.delete<T>(url, config);
    return response;
  } catch (error) {
    throw error;
  }
};

export { reqGet, reqPost, reqPut, reqDelete };
