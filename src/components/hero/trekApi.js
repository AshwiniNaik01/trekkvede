import axios from "axios";
import { API_BASE_URL } from "../config/constants";
// import { API_BASE_URL } from "@/config/env";

// Single function to fetch treks
export const fetchTreks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/trek`);
        return response.data; // returns the whole response object
    } catch (error) {
        console.error("Error fetching treks:", error);
        return { success: false, data: [], error: error.message };
    }
};
