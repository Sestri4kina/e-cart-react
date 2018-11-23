import { clientId, moltinBaseAPI, moltinAPI } from '@utils/config';
import axios from 'axios';
import { AccessToken } from '@store/models';
import { handleError } from './generic-api';

export async function getAccessToken(): Promise<AccessToken> {

    try {
        const authTokenPath = moltinBaseAPI + moltinAPI.accessTokenAPI;
        let formData = new FormData();
        formData.append('client_id', clientId);
        formData.append('grant_type', 'implicit');
        const authToken = await axios.post(
            authTokenPath,
            formData,
            { headers: {'Content-Type': 'multipart/form-data' }}
        ).then(res => {
            return res.data
        });

        return authToken;
    } catch (err) {
        return handleError(err);
    }
}

export interface AuthAPI {
    getAccessToken(): Promise<AccessToken>
}
