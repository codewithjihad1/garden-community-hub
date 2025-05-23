import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/",
});


// Get Featured gardeners
export const getFeaturedGardeners = () => {
    return api.get("/gardeners?status=active")
}