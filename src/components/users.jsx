import React, { useState } from "react";
import User from "components/user";
import SearchStatus from "components/searchStatus";
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
          <th scope="col">Избранное</th>
          <th scope="col">*</th>
        </tr>
      </thead>
    );
  };

  const handleDelete = (id) => {
    setUsers((prevState) => prevState.filter((u) => u._id !== id));
  };

  const handleSelectToFavorite = (id) => {
    setUsers((prevState) =>
      prevState.map((u) => {
        if (u._id === id) {
          u.bookmark = !u.bookmark;
        }
        return u;
      })
    );
  };

  return (
    <div>
      <SearchStatus usersLength={users.length} />
      {users.length !== 0 && (
        <table className="table">
          {getTableHeader()}
          <tbody>
            {users.map((u) => (
              <User
                key={u._id}
                user={u}
                onSelectToFavorite={handleSelectToFavorite}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
