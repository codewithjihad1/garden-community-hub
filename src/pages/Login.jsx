import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Login = () => {
  const [active, setActive] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  const { loginWithEmailPassword, loginWithGoogle, errorMessage } = useContext(AuthContext)

  // Document title update
  useDocumentTitle("Login - EventExplorer")


  const handleEmailPasswordLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginWithEmailPassword(email, password)
      .then(() => {
        navigate(location.state || "/")
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
    <section className="w-full h-auto bg-gray-100 flex items-center justify-center p-6">
      <form onSubmit={handleEmailPasswordLogin} className="w-full sm:w-[40%] bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex items-center justify-center flex-col gap-5">
        <h3 className="text-[1.8rem] font-[700] text-gray-900">Sign in</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="py-3 px-4 border focus:outline-primary border-gray-300 mt-5 rounded-lg w-full"
          required
        />
        <div className="w-full relative">
          <input
            type={active ? "text" : "password"}
            placeholder="Password"
            name="password"
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
        <Link to="/auth/reset" className="text-[1rem] text-primary font-[500]">
          Forget password
        </Link>

        {/* error message show */}
        {errorMessage && <span className="text-red-600">{errorMessage}</span>}

        <button
          type="submit"
          className="w-full py-3 px-4 bg-primary text-white border-none outline-none rounded-lg mt-3 cursor-pointer">
          Login
        </button>
        <div className="flex items-center justify-center w-full gap-1">
          <span className="text-[1rem] text-gray-600 font-[500]">
            Don't have an account?{" "}
          </span>
          <span>
            <Link to={"/auth/register"} className="text-[1rem] text-primary font-[500]">
              Signup
            </Link>
          </span>
        </div>

        <div className="w-full my-1 flex items-center gap-3">
          <hr className="w-[45%] bg-gray-500 h-[2px]" />
          <p>or</p>
          <hr className="w-[45%] bg-gray-500 h-[2px]" />
        </div>

        <button onClick={handleGoogleLogin} className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full text-[1rem] font-[500] text-gray-600 cursor-pointer">
          <FcGoogle className="text-[2rem]" />
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default Login;
