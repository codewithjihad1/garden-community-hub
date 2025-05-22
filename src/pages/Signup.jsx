import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Signup = () => {
    const [active, setActive] = useState(false);
    const navigate = useNavigate()
    const { signupWithEmailPassword, loginWithGoogle, errorMessage } = useContext(AuthContext)

    // Document title update
    useDocumentTitle("Signup - Gardening Community")

    // create account with email and password
    const handleEmailPasswordSignup = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;

        signupWithEmailPassword(email, password, name, photoUrl)
            .then(() => {
                navigate(`${location.state ? location.state : "/"}`)
            })
    }

    // handle google login 
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        loginWithGoogle()
            .then(() => {
                navigate(location.state || "/")
            })
    }

    return (
        <main className="w-full min-h-[100vh] h-auto bg-gray-100 flex items-center justify-center sm:py-12 p-6">
            <form onSubmit={handleEmailPasswordSignup} className="w-full sm:w-[40%] bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex items-center justify-center flex-col gap-5">
                <h3 className="text-[1.8rem] font-[700] text-gray-900 text-center">
                    Create a Account
                </h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="py-3 px-4 border focus:outline-primary border-gray-300  rounded-lg w-full"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="py-3 px-4 border focus:outline-primary border-gray-300 rounded-lg w-full"
                    required
                />

                <input
                    type="text"
                    name="photoUrl"
                    placeholder="Profile photo url"
                    className="py-3 px-4 border focus:outline-primary border-gray-300  rounded-lg w-full"
                    required
                />

                <div className="w-full flex items-center gap-4 justify-between sm:flex-row flex-col">
                    <div className="w-full relative">
                        <input
                            type={active ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="py-3 px-4 border focus:outline-primary border-gray-300 rounded-lg w-full"
                            pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                            required
                        />
                        {active ? (
                            <BsEyeSlash
                                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                                onClick={() => setActive(false)}
                            />
                        ) : (
                            <BsEye
                                className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                                onClick={() => setActive(true)}
                            />
                        )}
                    </div>
                </div>

                <div className="text-[1rem] ">
                    <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
                    <label htmlFor="checkbox" className="cursor-pointer">
                        By clicking, I agree to signup{" "}
                        <a href="#" className=" text-primary">
                            Terms of Use
                        </a>{" "}
                        and{" "}
                        <a href="#" className=" text-primary">
                            Privacy Policy
                        </a>
                    </label>
                </div>
                {/* error message show */}
                {errorMessage && <span className="text-red-600">{errorMessage}</span>}

                <div className="w-full flex items-center justify-center">

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-primary text-white border-none outline-none rounded-lg mt-3 cursor-pointer">
                        Sign up
                    </button>
                </div>
                <div className="flex items-center justify-center w-full gap-1">
                    <span className="text-[1rem] text-gray-600 font-[500]">
                        You have already an account?{" "}
                    </span>
                    <span>
                        <Link
                            to={"/auth/login"}
                            className="text-[1rem] text-primary font-[500]">
                            Login
                        </Link>
                    </span>
                </div>

                <div className="w-full my-1 flex items-center justify-center gap-3">
                    <hr className="w-[45%] bg-gray-400 h-[2px]" />
                    <p>or</p>
                    <hr className="w-[45%] bg-gray-400 h-[2px]" />
                </div>

                <div className="flex items-center justify-between w-full gap-5 sm:flex-row flex-col">
                    <button onClick={handleGoogleLogin} className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full text-[1rem] font-[500] text-gray-600 cursor-pointer">
                        <FcGoogle className="text-[2rem]" />
                        Signup with Google
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Signup;