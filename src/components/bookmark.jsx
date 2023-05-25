const Bookmark = ({ bookmark, onSelect }) => {
  return (
    <i
      className={"bi bi-bookmark" + (bookmark ? "-fill" : "")}
      onClick={onSelect}
    />
  );
};

export default Bookmark;
