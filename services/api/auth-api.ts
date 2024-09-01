import { CONSTANTS } from "../config/api-config";
import { callPostAPI } from "../utils";

export const loginAPI: any = async (values: any) => {
    let response: any;

    const body = {
        email: values.username,
        password: values.password
    }


    const url: any = `${CONSTANTS.API_BASE_URL}/v1/login`;

    response = await callPostAPI(url, body, '');
    return response;
}



export const registerAPI: any = async (values: any) => {
    let response: any;

    console.log(values)
    const body = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        gender: values.gender
    }


    const url: any = `${CONSTANTS.API_BASE_URL}/v1/register`;

    response = await callPostAPI(url, body, '');
    return response;
}