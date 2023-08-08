import { useAuth } from "../../hooks/useAuth";


export default function LoginPage(params) {

    const { login } = useAuth();

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => login({
                email: "xx",
                password: "xx"
            })}>go</button>
        </div>
    )
}