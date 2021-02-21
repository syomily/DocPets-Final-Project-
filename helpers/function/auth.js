
export async function getHeaders(){
    const token = await localStorage.getItem('APP_AUTH_TOKEN')
    return {
        'Content-Type' : 'application/json',
        Authorization: 'Bearer ' + token,
    }
}

export async function getAccountId() {
    return await localStorage.getItem('APP_ACCOUNT_ID');
}

export async function saveToken(token) {
    localStorage.setItem('APP_AUTH_TOKEN', token);
}

export async function saveAccountId(id) {
    localStorage.setItem('APP_ACCOUNT_ID', String(id));
}

export async function removeToken(token) {
    localStorage.removeItem('APP_AUTH_TOKEN');
}

export async function removeAccountId(id) {
    localStorage.removeItem('APP_ACCOUNT_ID');
}