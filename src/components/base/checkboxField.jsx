const CheckboxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name, value: !value });
  };

  const getInputClasses = () => {
    return "form-check-input " + (error ? "is-invalid" : "");
  };

  return (
    <div className="form-check mb-4">
      <input
        className={getInputClasses()}
        type="checkbox"
        value=""
        id={name}
        checked={value}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {children}
      </label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default CheckboxField;
