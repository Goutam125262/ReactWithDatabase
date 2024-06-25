import React, { useEffect, useState } from 'react';
import './App.css';
export const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.Password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
