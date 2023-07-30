import { Link } from 'react-router-dom';
import { FaPencilAlt, FaPlus } from 'react-icons/fa';
import Sidebar from '../components/Sidebar'

const AllTicket = ({ tickets, setTickets }) => {
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    width: '100%'
  }

  return (
    <>
      <section>
        <div style={{ display: 'flex' }}>
          <Sidebar />
        </div>
        <div style={{ width: '100%' }}>
          <header style={headerStyles}>
            <span className='font-bold'>Welcome, Admin</span>

              <Link to='/create-ticket' className='btn bg-sky-500'><span className='flex items-center justify-center gap-1'><FaPlus />Add Ticket</span></Link>
          </header>
          <div className="table-holder w-full m-auto">
            <table className='m-auto w-full' border='3'>
              <thead>
                <tr>
                  <th> <input
                    type="checkbox"
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