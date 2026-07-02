import api from "./api";

export const searchUsers = (q) => api.get(`/users/search?q=${q}`).then((r) => r.data);
