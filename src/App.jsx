import { RouterProvider } from "react-router"
import router from "./routes/routes"
import { AuthProvider } from "./context/AuthContext"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
