import TableHeader from "components/tableHeader";
import TableBody from "components/tableBody";
import Bookmark from "components/bookmark";

const UserTable = ({
  users,
  onDelete,
  onSelectToFavorite,
  onSort,
  selectedSort,
}) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { path: "profession.name", name: "Профессии" },
    completedMeetings: { path: "completedMeetings", name: "Встретился раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: { path: "bookmark", name: "Избранное", component: "bookmark" },
    delete: {},
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
