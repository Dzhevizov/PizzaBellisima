import { createContext, useState } from "react";

export const AuthContext = createContext();

const hardcodedUsers = [
  { username: "admin", password: "1234", role: "admin" },
  { username: "client", password: "1234", role: "client" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const found = hardcodedUsers.find(
      u => u.username === username && u.password === password
    );
    if (found) {
      setUser(found);
      return true;
    }
    return false;
  };

  const register = (username, password) => {
    hardcodedUsers.push({ username, password, role: "client" });
    setUser({ username, password, role: "client" });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
