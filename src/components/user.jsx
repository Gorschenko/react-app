import React, { useEffect, useState } from "react";
import QualitiesList from "components/qualitiesList";
import { useHistory } from "react-router-dom";
import api from "../api";

const User = ({ id }) => {
  const history = useHistory();
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getById(id).then((data) => setUser(data));
  }, [id]);

  return (
    user && (
      <div className="p-2">
        <p>{user.name}</p>
        <QualitiesList qualities={user.qualities} />
        <p>{user.profession.name}</p>
        <p>{user.completedMeetings}</p>
        <p>{user.rate}</p>

        <button
          className="btn btn-sm btn-primary"
          onClick={() => history.push("/users")}
        >
          Ко всем пользователям
        </button>
      </div>
    )
  );
};

export default User;
