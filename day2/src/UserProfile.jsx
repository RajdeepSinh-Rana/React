import { useState } from 'react';
import './UserProfile.css'; 

const UserProfile = () => {
  const [Name,setName] = useState(["RAJDEEP","RAJ@gmail.com",18]);


  return (
    <div className="container">
      <h2>User Profile</h2>
      
    
        <div className="profile-output">
          <h3>Submitted Profile</h3>
          <p><strong>Name:</strong> {Name[0]}</p>
          <p><strong>Email:</strong> {Name[1]}</p>
          <p><strong>Age:</strong> {Name[2]}</p>
        </div>
    </div>
  );
};

export default UserProfile;
