import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Single List Item
const WrappedSingleListItem = ({
  itemKey,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={() => onClickHandler(itemKey)}
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  itemKey: PropTypes.string,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedItemKey, setSelectedItemKey] = useState();

  useEffect(() => {
    setSelectedItemKey(null);
  }, [items]);

  const handleClick = (key) => {
    setSelectedItemKey(key);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items &&
        items.map((item) => (
          <SingleListItem
            key={item.key}
            itemKey={item.key}
            onClickHandler={handleClick}
            text={item.text}
            isSelected={selectedItemKey === item.key ? true : false}
          />
        ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;
