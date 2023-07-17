import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
<div className='sidebar' style={{ width: '200px', background: '#f0f0f0', padding: '20px' , height: '100vh'}}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <h3 className="logo">Ticket</h3>
        </li>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/create-ticket">Create Ticket</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
