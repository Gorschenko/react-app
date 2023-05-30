import React from "react";
import Bookmark from "components/bookmark";
import QualitiesList from "components/qualitiesList";

const User = ({ user, onDelete, onSelectToFavorite }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <QualitiesList qualities={user.qualities} />
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <Bookmark
          bookmark={user.bookmark}
          onSelect={() => onSelectToFavorite(user._id)}
        />
      </td>
      <td>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(user._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
