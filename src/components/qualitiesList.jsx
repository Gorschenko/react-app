const QualitiesList = ({ qualities }) => {
  const classes = "badge rounded-pill m-1 ";
  return (
    <>
      {qualities.map((q) => (
        <span key={q._id} className={classes + "bg-" + q.color}>
          {q.name}
        </span>
      ))}
    </>
  );
};

export default QualitiesList;
