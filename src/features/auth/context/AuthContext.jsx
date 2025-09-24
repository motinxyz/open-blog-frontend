import { createContext } from "react";

export const AuthContext = createContext({
  authState: {},
  refreshAuthStatus: async () => {},
});
