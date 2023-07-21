import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import useCreateDate from '../hooks/useCreateDate'
import { IoArrowBack } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const CreateTicket = ({tickets, setTickets}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory]= useState('');
  const date = useCreateDate()
  const navigate = useNavigate()

  toastr.options = {
    closeButton: true,
    positionClass: 'toast-top-right',
    timeOut: 5000,
    extendedTimeOut: 2000,
    progressBar: true
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    // Create a new ticket object
    const newTicket = {
      id: uuid(), title, description, category, date,
    };

    // Update the tickets state by adding the new ticket
    setTickets([...tickets, newTicket]);
    toastr.success('Ticket Created Successfully', 'Success');
    navigate('/')
  };

  return (

<section>
<Link to="/" className="top-left xxl">
        <IoArrowBack />
      </Link>      
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection: 'column', margin: 'auto' }}>
      <h1>Create a New Ticket</h1>
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

        <label htmlFor="category">Category:</label>
        <input
            type="text"
            id="category"
            value={category}
            onChange={e => { setCategory(e.target.value) }}
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
        <button type="submit" className='btn'>Create Ticket</button>
      </form>
    </div>

</section>
    );
};

export default CreateTicket;
