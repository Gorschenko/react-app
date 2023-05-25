const Bookmark = ({ bookmark, onSelect }) => {
  return (
    <i
      className={"bi bi-bookmark" + (bookmark ? "-fill" : "")}
      role="button"
      onClick={onSelect}
    />
  );
};

export default Bookmark;
