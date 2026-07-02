import api from "./api";

export const getThreads = (projectId) => api.get(`/threads/${projectId}`).then((r) => r.data);
export const createThread = (data) => api.post("/threads", data).then((r) => r.data);
export const deleteThread = (id) => api.delete(`/threads/${id}`).then((r) => r.data);
