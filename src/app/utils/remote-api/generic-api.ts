import { moltinBaseAPI } from '../config';
import axios from 'axios';
import { accessToken } from '../services/handle-token';

export async function getRequest(specificPath: string): Promise<any> {
    try {
        const path = moltinBaseAPI + specificPath;
        const headers = setAuthHeaders();

        const result = await axios.get(
            path,
            { headers }
        );

        return result;
    }  catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export async function postRequest(specificPath: string, body: any): Promise<any> {
    try {
        const path = moltinBaseAPI + specificPath;
        const headers = setAuthHeaders();

        const result = await axios.post(
            path,
            body,
            { headers }
        );

        return result;
    }  catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

function setAuthHeaders() {
    const token = accessToken();
    const headers: any = {};
    headers['Authorization'] = `Bearer ${token}`;

    return headers;
}
