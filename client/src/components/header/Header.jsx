import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function Header() {
    const { email, isAuthenticated } = useAuth();

    return (
        <>
            <header>
                <nav>
                    <Link id="logo" to="/"><img src="./images/logo.png" alt="img" /></Link>
                    <ul >
                        <li >
                            <Link to="/recipes"><button>Catalog</button></Link>
                        </li>
                        {isAuthenticated
                            ? (
                                <>
                                    <li >
                                        <Link to="/create"><button>Create</button></Link>
                                    </li>
                                    <li >
                                        <Link to="/logout"><button>Logout</button></Link>
                                    </li>
                                    <li >
                                        <p>Hello, {email}!</p>
                                    </li>
                                </>
                            )
                            : (
                                <>
                                    <li >
                                        <Link to="/register"><button>Register</button></Link>
                                    </li>
                                    <li >
                                        <Link to="/login"><button>Login</button></Link>
                                    </li>
                                    <li >
                                        <p>Hello, guest!</p>
                                    </li>
                                </>
                            )

                        }
                    </ul>
                </nav>
            </header>
        </>
    );
}