import React, { useState } from "react";

import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const getTableHeader = () => {
    return (
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">*</th>
        </tr>
      </thead>
    );
  };

  const getUserBagesList = (qualities) => {
    const classes = "badge rounded-pill m-1 ";
    return (
      <div>
        {qualities.map((q) => (
          <span key={q._id} className={classes + "bg-" + q.color}>
            {q.name}
          </span>
        ))}
      </div>
    );
  };

  const getTableRow = (user) => {
    return (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>{getUserBagesList(user.qualities)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(user._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((u) => u._id !== id));
  };

  return (
    <div>
      {users.length !== 0 && (
        <div>
          <h1>Количество человек {users.length}</h1>
          <table className="table">
            {getTableHeader()}
            <tbody>{users.map(getTableRow)}</tbody>
          </table>
        </div>
      )}
      {users.length === 0 && <h1>Никто не прийдет</h1>}
    </div>
  );
};

export default Users;
