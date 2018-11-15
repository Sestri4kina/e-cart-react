import { moltinBaseAPI } from '../config';
import axios from 'axios';
import { accessToken } from '../services/handle-token';

export async function getRequest(specificPath: string): Promise<any> {
    const path = moltinBaseAPI + specificPath;
    const headers = setHeaders();

    const result = await axios.get(
        path,
        { headers }
    );

    return result;
}

export async function postRequest(specificPath: string, body: any): Promise<any> {
    const path = moltinBaseAPI + specificPath;
    const headers = setHeaders();

    const result = await axios.post(
        path,
        body,
        { headers }
    );

    return result;
}

export async function putRequest(specificPath: string, body: any): Promise<any> {
    const path = moltinBaseAPI + specificPath;
    const headers = setHeaders();

    const result = await axios.put(
        path,
        body,
        { headers }
    );

    return result;
}

export async function deleteRequest(specificPath: string): Promise<any> {
    const path = moltinBaseAPI + specificPath;
    const headers = setHeaders();

    const result = await axios.delete(
        path,
        { headers }
    );

    return result;
}

function setHeaders() {
    const token = accessToken();
    const headers: any = {};
    headers['Authorization'] = `Bearer ${token}`;
    headers['Content-Type'] = 'application/json';

    return headers;
}
