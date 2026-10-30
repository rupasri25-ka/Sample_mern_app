
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let navigate = useNavigate();

    let handleLogin = async (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "admin") {
            navigate("/adminhome");
        } else {
            let req = await fetch("http://localhost:3000/api/emp/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            let res = await req.json();
            console.log(res);

            if (res.user) {
                localStorage.setItem("currentuser", JSON.stringify(res.user));
                if (res.user.role === "HR") {
                    navigate("/hrhome");
                } else {
                    navigate("/emphome");
                }
            } else {
                console.log(res.msg);
            }
        }
    };

    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
