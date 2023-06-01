const TextField = ({ label, type, name, onChange, value, error }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextField;
