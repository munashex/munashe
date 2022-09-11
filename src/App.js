
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react' 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home' 
import Projects from './Pages/Projects' 
import Resume from './Pages/Resume' 


const App = () => {

return (
<BrowserRouter> 
<Routes>
  <Route path="/" element={<Home/>}/> 
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/resume" element={<Resume/>}/> 
</Routes>
</BrowserRouter>
)
}

export default App