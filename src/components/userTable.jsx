import TableHeader from "components/tableHeader";
import TableBody from "components/tableBody";
import Bookmark from "components/bookmark";
import QualitiesList from "components/qualitiesList";

const UserTable = ({
  users,
  onDelete,
  onSelectToFavorite,
  onSort,
  selectedSort,
}) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    professions: { path: "profession.name", name: "Профессии" },
    completedMeetings: { path: "completedMeetings", name: "Встретился раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <Bookmark
          bookmark={user.bookmark}
          onSelect={() => onSelectToFavorite(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(user._id)}
        >
          Delete
        </button>
      ),
    },
  };
  return (
    <table className="table">
      <TableHeader
        onSort={onSort}
        selectedSort={selectedSort}
        columns={columns}
      />
      <TableBody columns={columns} data={users} />
    </table>
  );
};

export default UserTable;
