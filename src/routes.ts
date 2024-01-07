import {
  API_AUTH_PREFIX,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "./lib/constants";

export const publicRoutes = [HOME_ROUTE];

export const authRoutes = [LOGIN_ROUTE, REGISTER_ROUTE];

export const apiAuthPrefix = API_AUTH_PREFIX;
