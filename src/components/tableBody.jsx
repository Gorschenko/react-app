import React from "react";
import _ from "lodash";

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>
              {columns[column].component || _.get(item, columns[column].path)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
