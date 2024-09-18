import {Routes, Route ,Navigate} from "react-router-dom";
import './App.css'
import Chat from "./pages/chat";
import Register from "./pages/resgister";
import Login from "./pages/login";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap";
import NavBar from "./component/Navbar";
function App() {
  return (

    <>
    <NavBar/>
    <Container >
   <Routes>
   <Route path="/" element={<Chat/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="*" element={<Navigate to="/"/>}/>
   </Routes>
    </Container></>
  )
}

export default App
