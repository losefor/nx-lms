import { api } from "./client";

export const findMany = async (query: any) => {
  return api.get("/books", query);
};
