import { useState } from "react";

const TextField = ({ label, type, name, onChange, value, error }) => {
  const [showPassword, setShowPassword] = useState();
  const getInputClasses = () => {
    return "form-control is-" + (error ? "invalid" : "valid");
  };
  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
        />
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toggleShowPassword}
          >
            Показать
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default TextField;
