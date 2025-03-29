import { useNavigate } from "react-router";
import { useRegister } from "../services/authService";
import { useUserContext } from "../contexts/userContext";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Register() {
    usePageTitle('Register Page');
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            console.error('Password missmatch');

            return;
        }

        const authData = await register(email, password);

        userLoginHandler(authData);

        navigate('/');
    }
    return(
        <>
        <h1>Register</h1>
        <form action={registerHandler}>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter your password" required />
        <br />
        <br />
        <label>Confirm Password:</label>
        <input type="password" name="confirm-password" placeholder="Confirm your password" required />
        <br />
        <button type="submit">Register</button>
        </form>
        </>
    );
}