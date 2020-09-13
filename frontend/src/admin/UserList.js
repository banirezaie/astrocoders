import React, { useEffect, useState } from 'react'
import { FaTrash } from "react-icons/fa";

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
      <select className="custom-select" value={user.role} onChange={updateUserRole}>
        <option value="student">Student</option>
        <option value="mentor">Mentor</option>
        <option value="admin">Admin</option>
      </select>
    );
}

export default function UserList() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch(`${apiBaseUrl}/admin/users`)
            .then(response => response.json())
            .then(users =>  setUsers(users));
    }, []);

    return (
      <div className="">

        <div className="table">
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
                    <FaTrash color="purple" onClick="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
