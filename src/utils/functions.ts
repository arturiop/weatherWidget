import { keyLS } from './variables';

export const toCelsius = (temperature: number): string => {
  const result = (temperature - 273.15).toFixed(0);
  return `${result}°`;
};

export const capitalize = (line: string): string => line.charAt(0).toUpperCase() + line.slice(1);

export const deleteFromLocalStorage = (key:string, deleteValue:string): void => {
  const arrayValues: string[] = JSON.parse(localStorage.getItem(keyLS) || '[]');
  const filteredDate = arrayValues.filter((value) => value !== deleteValue);
  localStorage.setItem(key, JSON.stringify(filteredDate));
};

export const addCityToLocalStorage = (city: string): void => {
  const citiesLS: string[] = JSON.parse(localStorage.getItem(keyLS) || '[]');
  const concat = [city].concat(citiesLS);
  localStorage.setItem(keyLS, JSON.stringify(concat));
};

export const getIconURL = (iconCode: string): string => `http://openweathermap.org/img/w/${iconCode}.png`;
