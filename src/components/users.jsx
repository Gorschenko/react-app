import React, { useState, useEffect } from "react";
import _ from "lodash";
import UserTable from "components/userTable";
import SearchStatus from "components/searchStatus";
import Pagination from "components/pagination";
import api from "../api";
import { paginate } from "utils/pagination";
import GroupList from "components/groupList";

const Users = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);
  const [professions, setProfession] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  const pageSize = 4;

  useEffect(() => {
    api.professions
      .fetchAll()
      .then((professions) => setProfession(professions));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf, searchQuery]);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
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

  const handleSearchQuery = ({ target }) => {
    setSelectedProf(null);
    setSearchQuery(target.value);
  };

  const filteredUsers = searchQuery
    ? users?.filter(
        (user) =>
          user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      )
    : selectedProf && selectedProf._id
    ? users?.filter((u) => u.profession === selectedProf)
    : users;
  const count = filteredUsers?.length;
  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
  const userCrop = paginate(sortedUsers, currentPage, pageSize);

  const handleProfessionSelect = (item) => {
    if (searchQuery !== "") setSearchQuery("");
    setSelectedProf(item);
  };

  const clearFilter = () => {
    setSelectedProf();
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Сбросить фильтры
          </button>
        </div>
      )}

      <div className="d-flex flex-column w-100">
        <SearchStatus usersLength={count} />
        <input
          type="text"
          name="searchQuery"
          placeholder="Search..."
          onChange={handleSearchQuery}
          value={searchQuery}
        />
        {count > 0 && (
          <UserTable
            users={userCrop}
            onSelectToFavorite={handleSelectToFavorite}
            onDelete={handleDelete}
            onSort={handleSort}
            selectedSort={sortBy}
          />
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
