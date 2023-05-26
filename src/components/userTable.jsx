import User from "components/user";
import TableHeader from "components/tableHeader";
const UserTable = ({
  users,
  onDelete,
  onSelectToFavorite,
  onSort,
  selectedSort,
}) => {
  const columns = {
    name: { iter: "name", name: "Имя" },
    qualities: { name: "Качества" },
    professions: { iter: "professions.name", name: "Профессии" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: { iter: "bookmark", name: "Избранное" },
    delete: {},
  };
  return (
    <table className="table">
      <TableHeader
        onSort={onSort}
        selectedSort={selectedSort}
        columns={columns}
      />
      <tbody>
        {users.map((u) => (
          <User
            key={u._id}
            user={u}
            onSelectToFavorite={onSelectToFavorite}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
