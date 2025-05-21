import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import useDocumentTitle from '../hooks/useDocumentTitle';

const ForgetPassword = () => {
    const { resetPasswordWithEmail, errorMessage } = useContext(AuthContext)

    // Document title update
    useDocumentTitle("Forget password - EventExplorer")

    // handle reset password
    const handleResetPassword = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        try {
            await resetPasswordWithEmail(email);
            window.location.href = "https://mail.google.com/mail/u/0/#inbox";
        } catch (error) {
            alert(error)
        }
    };

    return (
        <div className="w-full h-auto bg-gray-100 flex items-center justify-center p-6">
            <form onSubmit={handleResetPassword} className="w-full sm:w-[40%] bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex items-center justify-center flex-col gap-5">
                <h3 className="text-[1.8rem] font-[700] text-gray-900">Forget Password</h3>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="py-3 px-4 border focus:outline-primary border-gray-300 mt-5 rounded-lg w-full"
                    required
                />

                {/* Show error msg */}
                {errorMessage && <p className='text-red-500 '>{errorMessage}</p>}

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-primary text-white border-none outline-none rounded-lg mt-3 cursor-pointer">
                    Reset Password
                </button>
            </form>
        </div>
    )
}

export default ForgetPassword
