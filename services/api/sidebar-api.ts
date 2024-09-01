import { CONSTANTS } from "../config/api-config";
import { callGetAPI } from "../utils";


const getSidebarAPI: any = async (): Promise<any> => {
    console.log("fun called")
    try {

        const cookie = localStorage.getItem("AuthToken");
        console.log("Token from storage:", cookie);

        if (!cookie) {
            throw new Error("No token found in local storage.");
        }


        const url = `${CONSTANTS.API_BASE_URL}/users`;


        const response = await callGetAPI(url, cookie);
        return response;
    } catch (error) {

        console.error("Error fetching sidebar data:", error);
        throw error;
    }
};

export default getSidebarAPI;
