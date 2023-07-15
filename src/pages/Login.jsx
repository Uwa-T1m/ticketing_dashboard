import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import 'toastr/build/toastr.min.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  toastr.options = {
    closeButton: true,
    positionClass: 'toast-top-right',
    timeOut: 5000,
    extendedTimeOut: 2000,
    progressBar: true
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      toastr.success('Login successful');
      setUsername('');
      setPassword('');
      setError('');
      navigate('/')
    } else {
      toastr.error('Invalid username or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && toastr.error(error)}
      <form onSubmit={handleLogin}>
          <input
            type="text"
            id="username"
            value={username}
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            value={password}
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
            required
          />
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
