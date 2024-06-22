
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal, Button, Form } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Crud from './Crud';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/crud' element={<Crud/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
