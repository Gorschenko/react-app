const RadioField = ({ options, name, onChange, value, label }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div>
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
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor={o.name + "_" + o.value}
            >
              {o.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioField;
