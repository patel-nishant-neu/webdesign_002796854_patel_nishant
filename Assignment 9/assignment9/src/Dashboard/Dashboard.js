import React from 'react';
import { useHistory } from 'react-router-dom';

function DashboardPage() {
  //const history = useHistory();

  const handleLogout = () => {
    // perform logout logic here
    //history.push('/');
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardPage;
