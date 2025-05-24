import { RouterProvider } from "react-router"
import router from "./routes/routes"
import { AuthProvider } from "./context/AuthContext"
import { ThemeProvider } from "./context/ThemeContext"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
