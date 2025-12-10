import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Named exports...
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);

export const getProducts = () => API.get("/products");
export const getProductDetails = (id) => API.get(`/products/${id}`);
export const createProduct = (data) => API.post("/products", data);

export const postReview = (data) => API.post("/reviews", data);

export const sendMessage = (data) => API.post("/chat", data);
export const getMessages = () => API.get("/chat");

export const adminGetAllReviews = () => API.get("/reviews/all");
export const adminDeleteReview = (id) => API.delete(`/reviews/${id}`);

// ADD THIS 👇
export default API;
