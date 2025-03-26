import {requester} from "../utils/requester";


const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) =>
        requester(`${baseUrl}/login`, { email, password }, 'POST');
    return {
        login,
    }
};