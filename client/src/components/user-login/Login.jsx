import { Link, useNavigate } from "react-router";
import { useActionState, useContext } from "react";
import { toast } from 'react-toastify'

import { useLogin } from "../../services/authService";
import { UserContext } from "../../contexts/userContext";
import { usePageTitle } from "../../hooks/usePageTitle";

export default function Login() {
    usePageTitle('Login Page');
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (previousState, formData) => {
        const values = Object.fromEntries(formData);

        try {
            const authData = await login(values.email, values.password);
            userLoginHandler(authData);
            toast.success('Login successful')
            navigate('/');
        } catch (err) {
            toast.error(err.message);
        }
    };

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    return (
        <>
            <h1>Login</h1>
            <form action={loginAction}>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter your email" required />
                <br />
                <label>Password:</label>
                <input type="password" name="password" autoComplete="on" placeholder="Enter your password" required />
                <br />
                <button type="submit" disabled={isPending}>Login</button>
                <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
            </form>
        </>
    )
}