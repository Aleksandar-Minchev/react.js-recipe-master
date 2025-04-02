import { useContext } from "react";
import { UserContext } from "../contexts/userContext";


export default function useAuth() {
    const authData = useContext(UserContext);

    return {
        ...authData,
        userId: authData._id,
        isAuthenticated: !!authData.accessToken,
    }
};