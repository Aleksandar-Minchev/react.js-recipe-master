import { Navigate } from "react-router";
import { useLogout } from "../services/authService";

export default function Logout() {
    const { isLoggedOut } = useLogout()

    return isLoggedOut
        ? <Navigate to="/" />
        : null; // spinner is better
}