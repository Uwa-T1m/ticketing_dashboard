import { useState } from 'react';
import { useParams , Link, useNavigate} from 'react-router-dom';
import useCreateDate from '../hooks/useCreateDate';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoArrowBack } from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.css';

const EditTicket = ({ tickets, setTickets }) => {
  const { id } = useParams();
  const ticket = tickets.find(item => item.id === id);
  const [title, setTitle] = useState(ticket?.title || '');
  const [description, setDescription] = useState(ticket?.description || '');
  const [category, setCategory] = useState(ticket?.category || '');
  const date = useCreateDate();
  const navigate = useNavigate()

  const handleForm = (e) => { 
    e.preventDefault();

    if (title && description && category) {
      const newTicket = { ...ticket, title, description, category, date };

      const newTickets = tickets.map(item => {
        if (item.id === id) {
          item = newTicket;
        }
        return item;
      });

      setTickets(newTickets);
      navigate('/')
    }
  };

  const handleDelete = () => {
    const newTicket = tickets.filter(item => item.id !== id);
    setTickets(newTicket);
    navigate('/')

  };

  return (
    <section>
      <Link to="/" className="top-left xxl">
        <IoArrowBack />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
        <form style={{ margin: 'auto' }} onSubmit={handleForm}>
          <div>
                      <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>       
         <div>
         <label htmlFor="category">Category:</label>
         <input
            type="text"
            id="category"
            placeholder="Category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          />
         </div>
          <div>          <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
          </div>
          <div className="btn-holder" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button type="submit" className="btn" onClick={handleForm}>Save</button>
            <button className="btn bg-danger" onClick={handleDelete}><RiDeleteBin6Line /></button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditTicket;
