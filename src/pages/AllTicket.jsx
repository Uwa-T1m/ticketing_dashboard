import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar'
import Button from 'react-bootstrap/Button'

const AllTicket = ({ tickets, setTickets }) => {
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 10px',
    width: '100%'
  }


  const handleMasterCheckboxChange = (isChecked) => {
    const updatedTickets = tickets.map((ticket) => ({
      ...ticket,
      isChecked: isChecked,
    }));
    setTickets(updatedTickets);
  };

  const areAllTicketsChecked = tickets.every(ticket => ticket.isChecked)

  return (
    <>
      <section>
        <div style={{ display: 'flex' }}>
          <Sidebar />
        </div>
        <div style={{ width: '100%' }}>
          <header style={headerStyles}>
            <h4 style={{ textAlign: 'center' }}>Welcome, Admin</h4>
            <div className="actions">

             <Button>
              <Link to='/create-ticket' className='btn btn-primary'>Add Ticket</Link>
              </Button> 
            </div>
          </header>
          <div className="table-holder">
            <table>
              <thead>
                <tr>
                  <th> <input
                    type="checkbox"
                    checked={areAllTicketsChecked}
                    onChange={(e) => handleMasterCheckboxChange(e.target.checked)}
                  /></th>
                  <th>USER</th>
                  <th>TITLE</th>
                  <th>CATEGORY</th>
                  <th>PRIORITY</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {
                  tickets.map(ticket => (
                    <tr key={ticket.id}>
                      <td><input
                        type="checkbox"
                      /></td>
                      <td>user</td>
                      <td>{ticket.title}</td>
                      <td>{ticket.category}</td>
                      <td>{Math.floor(Math.random() * 100 + 1)}</td>
                      <td>{ticket.date}</td>
                      <td><span className="badge bg-primary">Pending</span></td>
                      <td>
                        <Link to={`/edit-ticket/${ticket.id}`} className='btn'><FaPencilAlt /></Link>
                      </td>
                    </tr>
                  )
                  )
                }

              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default AllTicket;