export default function Login() {
    return(
        <>
        <h1>Login</h1>
        <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />
        <br />
        <button type="submit">Login</button>
        </form>
        </>
    );
}