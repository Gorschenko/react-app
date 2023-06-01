import TextField from "components/base/textField";
import { useState, useEffect } from "react";
import { validator } from "utils/validator";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
    password: { isRequired: { message: "Поле необходимо заполнить" } },
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
        type="passwrod"
        name="password"
        value={data.password}
        error={errors.password}
        onChange={handleChange}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Login;
