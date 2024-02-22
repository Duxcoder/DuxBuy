import { BREAKPOINTS } from './breakpoints';

export { BREAKPOINTS };
export const APP_NAME = getEnvVar('VITE_APP_NAME');
export const BACKEND_URL = 'http://localhost:3000/';
export const CONTACTS = {
  PHONE: '8 800 950-33-98',
  EMAIL: 'info@hodfutureacademy.ru',
  ADDRESS: 'г. Москва, ул. Ленина, д. 50'
};

function getEnvVar(key: string) {
  const envVar = import.meta.env[key];
  if (envVar === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return envVar;
}
