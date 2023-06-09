import TextField from "components/base/textField";
import { useState, useEffect } from "react";
import { validator } from "utils/validator";
import api from "../api";

const RegisterForm = () => {
  const [professions, setProfession] = useState();

  useEffect(() => {
    api.professions
      .fetchAll()
      .then((professions) => setProfession(professions));
  }, []);

  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    email: {
      isRequired: { message: "Поле необходимо заполнить" },
      isEmail: {
        message: "Поле должно быть email",
      },
    },
    password: {
      isRequired: { message: "Поле необходимо заполнить" },
      isCapitalSymbol: {
        message: "Должна быть одна заглавная бука",
      },
      isContainDigit: {
        message: "Должна быть одна цифра",
      },
      min: {
        message: "Минимум 8 символов",
        value: 8,
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        type="text"
        name="email"
        value={data.email}
        error={errors.email}
        onChange={handleChange}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        error={errors.password}
        onChange={handleChange}
      />
      <div className="mb-4">
        <label htmlFor="validationCustom04" className="form-label">
          State
        </label>
        <select
          className="form-select"
          id="validationCustom04"
          required
          name="profession"
          value={data.profession}
          onChange={handleChange}
        >
          <option disabled value="">
            Choose...
          </option>
          {professions &&
            Object.keys(professions).map((professionName) => (
              <option
                key={professions[professionName]._id}
                value={professions[professionName]._id}
              >
                {professions[professionName].name}
              </option>
            ))}
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <button
        className="btn btn-primary w-100 mx-auto"
        disabled={Object.keys(errors).length}
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
