import Axios from 'axios';

const BACKEND = {
    DEV: 'http://6c853b0e.ngrok.io',
    PROD: 'http://203.192.229.164:9001'
};

export function isValidResponse(resp) {
    return resp && resp.status === 200 && resp.data.status === 1;
}

export const backend = Axios.create({
    baseURL: BACKEND.PROD,
    timeout: 10000,
})

export const services = {
};

export const serviceResolver = {
};

export const methods = {
    DELETE: 'DELETE',
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
};

function APIError(msg) {
    this.message = msg;
    this.getMessage = function() {
        return this.message;
    }
}

export const ServiceMaker = async (url, method, service, data = {}) => {
    try {
        let result;
        const APIInstance = serviceResolver[service] || backend;
        switch (method) {
            case 'GET': {
                result = await APIInstance.get(url);
                break;
            }
            case 'POST': {
                result = await APIInstance.post(url, data);
                break;
            }
            case 'PUT': {
                result = await APIInstance.put(url, data);
                break;
            }
            default: {
                throw 'InvalidMethod';
            }
        }
        if (!isValidResponse) {
            throw 'InvalidResponse';
        }
        return result.data;
    } catch (err) {
        throw new APIError(err.response ? err.response.data : 'Something went wrong');
    }
};
