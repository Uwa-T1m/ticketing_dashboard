import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', background: '#f0f0f0', padding: '20px' , height: '100vh'}}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-ticket">Create Ticket</Link>
        </li>
        <li>
          <Link to="/admin">Admin Dashboard</Link>
        </li>
         <li>
         <Link to="/login">Login</Link>
       </li>
      </ul>
    </div>
  );
};

export default Sidebar;
