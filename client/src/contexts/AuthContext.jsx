import { createContext, useContext, useState } from "react";
import useRequest from "../hooks/useRequest";

export const AuthContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const { request } = useRequest();

  const registerHandler = async (username, password, extraData) => {
    const newUser = { username, password, ...extraData };
    const result = await request("/users/register", "POST", newUser);
    setUser(result);
    localStorage.setItem("user", JSON.stringify(result));
  };

  const loginHandler = async (email, password) => {
    const result = await request("/users/login", "POST", { email, password });
    setUser(result);
    localStorage.setItem("user", JSON.stringify(result));
  };

  const logoutHandler = async () => {
    await request("/users/logout", "GET", null, { accessToken: user?.accessToken });
    setUser(null);
    localStorage.removeItem("user");
  };

  const userContextValues = {
    user,
    isAuthenticated: !!user?.accessToken,
    registerHandler,
    loginHandler,
    logoutHandler,
  };

  return <AuthContext.Provider value={userContextValues}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export default AuthContext;
