import { GoogleOAuthProvider } from "@react-oauth/google"
import GoogleLoginButton from "./GoogleLoginButton"

const SignIn: React.FC = () => {
    return (
        <GoogleOAuthProvider clientId="444179628346-uqvkfr30bd0n3k4jprdcr25oh4d2a58i.apps.googleusercontent.com">
            <div className="App">
                <h1>React Google Login</h1>
                {/* <GoogleLoginButton /> */}
            </div>
        </GoogleOAuthProvider>
    )
}

export default SignIn