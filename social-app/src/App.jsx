
import Home from "./pages/Home"
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './pages/Profile'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}