import axios, { AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

instance.interceptors.request.use((axiosConfig: AxiosRequestConfig) => {
  const { city } = axiosConfig.params;

  const params = {
    q: city,
    appid: `${process.env.REACT_APP_API_KEY}`,
  };

  return { ...axiosConfig, params };
},
(error) => error);
