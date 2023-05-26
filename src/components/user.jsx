import React from "react";
import Qualitie from "components/qualitie";
import Bookmark from "components/bookmark";

const User = ({ user, onDelete, onSelectToFavorite }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((q) => (
          <Qualitie key={q._id} qualitie={q} />
        ))}
      </td>
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
