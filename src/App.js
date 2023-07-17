import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllTicket from './pages/AllTicket';
import CreateTicket from './pages/CreateTicket';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';
import EditTicket from './pages/EditTicket';

function App() {
  const [tickets, setTickets] = useState(JSON.parse(localStorage.getItem('ticket')) || [])

  useEffect(() => {
    localStorage.setItem('ticket', JSON.stringify(tickets))
  },[tickets])
  return (
    // CREATE TICKET
    // ASSIGN TICKET
    // EDIT TICKET
    // DELETE TICKET
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AllTicket tickets={tickets} setTickets={setTickets} />} />
    <Route path='/create-ticket' element={<CreateTicket tickets={tickets} setTickets={setTickets}/> } />
    <Route path='/login' element={<Login />}/>
    <Route path='/edit-ticket/:id' element={<EditTicket tickets={tickets} setTickets={setTickets}/>}/>
  </Routes>
  </BrowserRouter>
    </>
    );
}

export default App;
