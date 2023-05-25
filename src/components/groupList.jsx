import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className="list-group">
      {Object.keys(items).map((k) => (
        <li
          className={
            "list-group-item" + (selectedItem === items[k] ? " active" : "")
          }
          key={items[k][valueProperty]}
          onClick={() => onItemSelect(items[k])}
          role="button"
        >
          {items[k][contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
};

GroupList.defaultProps = {
  contentProperty: "name",
  valueProperty: "_id",
};

export default GroupList;
