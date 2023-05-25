import React, { useState } from "react";
import User from "components/user";
import SearchStatus from "components/searchStatus";
import Pagination from "components/pagination";
import api from "../api";
import { paginate } from "utils/pagination";
import GroupList from "components/groupList";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const count = users.length;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    console.log("page: ", pageIndex);
  };

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

  const userCrop = paginate(users, currentPage, pageSize);
  console.log(userCrop);

  return (
    <div>
      <GroupList />
      <SearchStatus usersLength={count} />
      {count !== 0 && (
        <table className="table">
          {getTableHeader()}
          <tbody>
            {userCrop.map((u) => (
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
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Users;
