import axios from "axios";

export const api = axios.create({
    baseURL: "https://gardener-community-api.vercel.app/",
});


// Get Featured gardeners
export const getFeaturedGardeners = () => {
    return api.get("/gardeners?status=active")
}