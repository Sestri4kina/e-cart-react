function handleNotSupported(err: any) {
    console.log(`
            Probably local storage is not supported.
            ${JSON.stringify(err)}
        `);
    throw new Error(err);
}

//check whether there is access token in localStorage
function hasAccessToken() {
    try {
        return !!localStorage.getItem('accessToken');
    } catch(err) {
        handleNotSupported(err);
    }
}

function accessTokenObject() {
    try {
        const accessTokenStringified: string = localStorage.getItem('accessToken') || '';
        return JSON.parse(accessTokenStringified);
        
    } catch(err) {
        handleNotSupported(err);
    }
}

function accessTokenExpiresAt() {
    try {
        if (hasAccessToken()) {
            return accessTokenObject().expiresAt;
        } 
        return undefined;
    } catch(err) {
        handleNotSupported(err);
    }
}

//check whether token is expired
export function accessTokenIsExpired() {
    try {
        const now = Date.now();
        if (hasAccessToken()) {
            return accessTokenExpiresAt() > now;
        }
        return true;
    } catch(err) {
        handleNotSupported(err);
    }
} 

export function persistAccessToken(value: string, expiresAt: number) {
    try {
        const expireTime = expiresAt * 1000;
        const accessToken = JSON.stringify({ value, expiresAt: expireTime })
        localStorage.setItem('accessToken', accessToken);
    } catch(err) {
        handleNotSupported(err);
    }
}

export function removeAccessToken() {
    try {
        if (hasAccessToken()) {
            localStorage.removeItem('accessToken');
        }
    } catch(err) {
        handleNotSupported(err);
    }
}

export function accessToken() {
    try {
        if (hasAccessToken()) {
            return accessTokenObject().value;
        } 
        return undefined;
    } catch(err) {
        handleNotSupported(err);
    }
}
