const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.iter === item) {
      onSort((selectedSort) => ({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      }));
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((c) => (
          <th
            key={c}
            onClick={columns[c].iter ? () => handleSort(columns[c].iter) : null}
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
