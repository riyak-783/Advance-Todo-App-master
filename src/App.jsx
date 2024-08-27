import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from "./components/Layout";
import { useAuth } from "./context/AuthContext";

function App() {

  const auth = useAuth()
  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={auth?.user?.isLoggedin ? <Home /> : <Navigate to={'/login'} />} />
          <Route element={!auth?.user?.isLoggedin ? <Outlet /> : <Navigate to={'/'} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
