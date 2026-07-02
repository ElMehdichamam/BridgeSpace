import api from "./api";

export const getProjects = () => api.get("/projects").then((r) => r.data);
export const getProject = (id) => api.get(`/projects/${id}`).then((r) => r.data);
export const createProject = (data) => api.post("/projects", data).then((r) => r.data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data).then((r) => r.data);
export const deleteProject = (id) => api.delete(`/projects/${id}`).then((r) => r.data);
export const addMember = (id, userId) => api.post(`/projects/${id}/members`, { userId }).then((r) => r.data);
export const removeMember = (id, userId) => api.delete(`/projects/${id}/members`, { data: { userId } }).then((r) => r.data);
