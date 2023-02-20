import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing, Error, Dashboard, Register} from "./pages/index";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App(){
return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<Landing />} />
        <Route path="Register" element={<Register />} />
        <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    )
}

export default App