const QualitiesList = ({ qualities }) => {
  const classes = "badge rounded-pill m-1 ";
  return (
    <td>
      {qualities.map((q) => (
        <span className={classes + "bg-" + q.color}>{q.name}</span>
      ))}
    </td>
  );
};

export default QualitiesList;
