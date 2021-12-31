import { api } from "./client";

export const login = async (data: any) => {
  return api.post("/auth/login", data);
};
