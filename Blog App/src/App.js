import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login";
import { Signup } from "./pages/sign-up";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { Carddetail } from "./components/fullcard";
import CreateBlog from "./components/create";
import { Private } from "./pages/privatepost";


export default function App() {

  
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/overview/:id" element={<Carddetail />} />
          <Route path="/create" element={<CreateBlog/>}/>
          <Route path="/privatepost" element={<Private/>}/>



        </Route>

      </Routes>
    </BrowserRouter>
    
  
  
  );
}
