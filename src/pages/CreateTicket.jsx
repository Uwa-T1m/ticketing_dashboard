import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import Sidebar from '../components/Sidebar';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { useNavigate } from 'react-router-dom'
import useCreateDate from '../hooks/useCreateDate'

const CreateTicket = ({tickets, setTickets}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory]= useState('');
  const date = useCreateDate()

  toastr.options = {
    closeButton: true,
    positionClass: 'toast-top-right',
    timeOut: 5000,
    extendedTimeOut: 2000,
    progressBar: true
  };
// eslint-disable-next-line
  const navigate = useNavigate()

  const handleCreateTicket = (e) => {
    e.preventDefault();
    // Create a new ticket object
    const newTicket = {
      id: uuid(), title, description, category, date,
    };

    // Update the tickets state by adding the new ticket
    setTickets([...tickets, newTicket]);
    console.log(tickets);
    toastr.success('Ticket Created Successfully', 'Success');
    // navigate('/')
  };

  return (
<section>
      <div style={{ display: 'flex' }}>
        <Sidebar />
      </div>
      <h1>Create a New Ticket</h1>
<div>
      <form onSubmit={handleCreateTicket}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => { setTitle(e.target.value) }}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={e => { setDescription(e.target.value) }}
            required
          />
        </div>
        <div>
        <input
            type="text"
            id="title"
            value={category}
            onChange={e => { setCategory(e.target.value) }}
            required
          />
        </div>
        <button type="submit" className='btn'>Create Ticket</button>
      </form>
    </div>

</section>
    );
};

export default CreateTicket;
