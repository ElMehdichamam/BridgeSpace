import { createContext, useState, useEffect, useCallback } from "react";
import * as authService from "../services/auth";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }
    authService
      .getMe()
      .then((u) => setUser(u))
      .catch(() => localStorage.removeItem("token"))
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (data) => {
    const res = await authService.login(data);
    localStorage.setItem("token", res.token);
    const u = await authService.getMe();
    setUser(u);
    return u;
  }, []);

  const register = useCallback(async (data) => {
    const res = await authService.register(data);
    localStorage.setItem("token", res.token);
    const u = await authService.getMe();
    setUser(u);
    return u;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
