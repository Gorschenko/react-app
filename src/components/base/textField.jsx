const TextField = ({ label, type, name, onChange, value, error }) => {
  const getInputClasses = () => {
    return "form-control is-" + (error ? "invalid" : "valid");
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={getInputClasses()}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextField;
