import { AxiosResponse } from 'axios';

export type CurrentWeatherResponseType = Promise<AxiosResponse<CurrentDataCityWeatherType>>;
export type ForecastCityResponseType = Promise<AxiosResponse<ForecastCityType>>;

export type CurrentDataCityWeatherType = {
  coord: {
    lon: number // 44.5136,
    lat: number // 40.1811
  },
  weather: [
    {
      id: number // 701,
      main: string // "Mist",
      description: string// "mist",
      icon: string // "50d"
    },
  ],
  main: {
    temp:number // 287.24,
    feels_like: number // 287.16,
    temp_min: number // 287.24,
    temp_max: number // 287.83,
    pressure: number // 1020,
    humidity: number // 94
  },
  visibility: number // 2300,
  wind: {
    speed: number // 0.51,
    deg:number // 0
  },
  clouds: {
    all: number // 40
  },
  base: string // 'stations',
  dt: number // 1635930368,
  sys: {
    type: number // 1,
    id:number // 8851,
    country: string // "AM",
    sunrise: number // 1635910409,
    sunset: number // 1635947847
  },
  timezone: number// 14400,
  id: number // 616052,
  name: string // "Yerevan",
  cod: number // 200

};

export type ForecastItemType = {
  dt: number,
  main: {
    temp: number,
    feels_like:number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    },
  ],
  clouds: {
    all: number
  },
  wind: {
    speed: number,
    deg: number,
    gust:number
  },
  visibility: number,
  pop: number,
  sys: {
    pod: string
  },
  dt_txt:string
};

export type ForecastCityType = {
  cod: string,
  message: number,
  cnt: number,
  list: Array<ForecastItemType>,
  city: {
    'id': 524901,
    'name': string,
    'coord': {
      lat: number,
      lon: number
    },
    country: number,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
  }
};
