import {FaPencilAlt, FaTrash} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react';

const TableInfo = ({ticket, setTickets}) => {
  const handleCheckboxChange = (ticketId) => {
    const updatedTickets = () => {
      if (ticket.id === ticketId) {
        return { ...ticket, isChecked: !ticket.isChecked };
      }
      return ticket;
    };
    setTickets(updatedTickets);
  };

  const messages = ["Pending", "In Progress", "Completed"];
  const [randomMessage, setRandomMessage] = useState('');

// const handleDelete = ()
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[randomIndex]);
     // eslint-disable-next-line
  }, []);

  return (
    <tr>
        <td> <input
                  type="checkbox"
                  checked={ticket.isChecked}
                  onChange={() => handleCheckboxChange(ticket.id)}
                /></td>
        <td>user</td>
        <td>{ticket.title}</td>
        <td>{ticket.category}</td>
        <td>{Math.floor(Math.random()*100 + 1)}</td>
        <td>{ticket.date}</td>
        <td><span className='badge bg-primary'>{randomMessage}</span></td>
        <td style={{display: 'flex', gap: '10px'}}>
            <button className='btn'><FaPencilAlt /></button>
            <button className='btn'><FaTrash /> </button>
        </td>
    </tr>
  )
}

export default TableInfo