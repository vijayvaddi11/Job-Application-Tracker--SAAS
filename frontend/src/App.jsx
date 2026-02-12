import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Layout from "./components/Layout/Layout.jsx";
import AddJob from "./components/AddJob.jsx";
import EditJob from "./components/EditJob.jsx";
import Dashboard from "./components/Dashboard.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/* Public routes with out Layout */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

         {/* Private routes with Layout */}
        <Route element={<Layout/>}>
        <Route path="/profile" element={<Profile />} />
        <Route path='/addjob' element={<AddJob/>}/>
        <Route path='/editjob' element={<EditJob/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
