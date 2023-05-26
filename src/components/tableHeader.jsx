const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort((selectedSort) => ({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      }));
    } else {
      onSort({ path: item, order: "asc" });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((c) => (
          <th
            key={c}
            onClick={columns[c].path ? () => handleSort(columns[c].path) : null}
            scope="col"
            role="button"
          >
            {columns[c].name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
