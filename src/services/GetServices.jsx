import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

// api url: https://gardener-community-api.vercel.app


// Get Featured gardeners
export const getFeaturedGardeners = () => {
    return api.get("/gardeners?status=active")
}