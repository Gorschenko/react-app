import TableHeader from "components/tableHeader";
import TableBody from "components/tableBody";

const Table = ({ onSort, selectedSort, columns, data }) => {
  return (
    <table className="table">
      <TableHeader
        onSort={onSort}
        selectedSort={selectedSort}
        columns={columns}
      />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
