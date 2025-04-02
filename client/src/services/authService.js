import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import { requester } from "../utils/requester";
import { toast } from "react-toastify";


const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const login = async (email, password) =>
        requester(`${baseUrl}/login`, { email, password }, 'POST');
    return {
        login,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);

    useEffect(() => {
        if (!accessToken) {
            return;
        };

        requester(`${baseUrl}/logout`, null, 'GET')
            .finally(userLogoutHandler)
            .catch(err => toast.error(err.message))
    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};

export const useRegister = () => {
    const register = (email, password) =>
        requester(`${baseUrl}/register`, { email, password }, 'POST');

    return {
        register,
    }
};