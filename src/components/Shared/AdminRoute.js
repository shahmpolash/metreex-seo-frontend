// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";

// const AdminRoute = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [user] = useAuthState(auth);

//   useEffect(() => {
//     fetch("http://localhost:5000/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data.reverse()));
//   }, []);

//   // Check if the user's email matches an admin 
//   const isAdminOrManager = users.some((u) => {
//     return (
//       user?.email === u.userEmail &&
//       (u.userRole === "Admin")
//     );
//   });

//   return isAdminOrManager ? (
//     children
//   ) : (
//     <div className="text-center payment-setting" data-aos="fade-up" data-aos-duration={2000}><h4>You are not authorized to access this page. <br></br>(your not admin)</h4></div>
//   );
// };

// export default AdminRoute;

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AdminRoute = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, loading, error] = useAuthState(auth); // Add loading and error states for authentication

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.reverse()))
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while authentication is in progress
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message if authentication fails
  }

  // Check if the user's email matches an admin or manager
  const isAdminOrManager = users.some(
    (u) =>
      user?.email === u.userEmail && (u.userRole === "Admin" || u.userRole === "Manager")
  );

  return isAdminOrManager ? (
    children
  ) : (
    <div className="text-center payment-setting" data-aos="fade-up" data-aos-duration={2000}>
      <h4>You are not authorized to access this page. <br /> (You are not an admin or manager)</h4>
    </div>
  );
};

export default AdminRoute;
