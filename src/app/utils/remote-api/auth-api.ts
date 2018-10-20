import { clientId, moltinBaseAPI, moltinAPI } from '../config';
import axios from 'axios';
import { AccessToken } from '../../store/models';

export async function getAccessToken(): Promise<AccessToken> {

    try {
        const authTokenPath = moltinBaseAPI + moltinAPI.accessTokenAPI;

        let formData = new FormData();
        formData.set('client_id', clientId);
        formData.set('grant_type', 'implicit');

        const authToken = await axios.post(
            authTokenPath,
            formData,
            { headers: {'Content-Type': 'multipart/form-data' }}
        ).then(res => res.data);

        return authToken;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}
