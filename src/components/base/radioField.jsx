const RadioField = ({ options, name, onChange, value, label }) => {
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      {options.map((o) => (
        <div
          className="form-check form-check-inline"
          key={o.name + "_" + o.value}
        >
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={o.name + "_" + o.value}
            checked={o.value === value}
            value={o.value}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor={o.name + "_" + o.value}>
            {o.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioField;
