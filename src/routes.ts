import {
  API_AUTH_PREFIX,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  ERROR_ROUTE,
  VERIFICATION_ROUTE,
  RESET_PASSWORD_ROUTE,
  NEW_PASSWORD_ROUTE,
} from "./lib/constants";

export const publicRoutes = [HOME_ROUTE, VERIFICATION_ROUTE];

export const authRoutes = [
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  ERROR_ROUTE,
  RESET_PASSWORD_ROUTE,
  NEW_PASSWORD_ROUTE,
];

export const apiAuthPrefix = API_AUTH_PREFIX;
