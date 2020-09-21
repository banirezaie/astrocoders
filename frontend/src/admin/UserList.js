import React, { useEffect, useState, useCallback } from "react";
import AdminNavbar from "../navbar/AdminNavbar";
import DeleteUser from "./DeleteUser";

const apiBaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_LOCAL_API_URL;

function UserRoleSelect({ user, setUser }) {
  const updateUserRole = (e) => {
    const role = e.currentTarget.value;

    fetch(apiBaseUrl + "/admin/users/" + user._id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: role,
      }),
    })
      .then((request) => request.json())
      .then((response) => setUser({ ...user, role: role }));
  };

  return (
    <div>
      <select
        className="custom-select"
        value={user.role}
        onChange={updateUserRole}
      >
        <option value="student">Student</option>
        <option value="mentor">Mentor</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}

export default function UserList({ props }) {
  const [users, setUsers] = useState([]);

  const loadUser = useCallback(() => {
    fetch(`${apiBaseUrl}/admin/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (!users) {
    return <div>Loading...</div>;
  }

  const handleOnDeleteUser = () => {
    loadUser();
  };

  return (
    <div className="same-background">
      <AdminNavbar background="#888" hoverBackground="#ccc" linkColor="#eee" />
      <div className="wrapper" style={{ paddingTop: "75px" }}>
        <div className="text-center pb-2 pt-2 text-white">
          <h1>Users List</h1>
        </div>
        <table className="table table-striped container bg-white table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <UserRoleSelect
                    user={user}
                    setUser={(newUser) =>
                      setUsers(
                        users.map((oldUser) =>
                          oldUser === user ? newUser : oldUser
                        )
                      )
                    }
                  />
                </td>
                <td>
                  <DeleteUser
                    props={{
                      id: user._id,
                      onDeleteUser: handleOnDeleteUser,
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
