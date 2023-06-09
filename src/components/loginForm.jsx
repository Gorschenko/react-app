import TextField from "components/base/textField";
import CheckboxField from "components/base/checkboxField";
import { useState, useEffect } from "react";
// import { validator } from "utils/validator";
import * as yup from "yup";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    licence: false,
  });

  const [errors, setErrors] = useState({});
  const validateSchema = yup.object().shape({
    password: yup
      .string()
      .required("Поле необходимо заполнить")
      .matches(/^(?=.*[A-Z])/, "Должна быть одна заглавная бука")
      .matches(/^(?=.*[1-9])/, "Должна быть одна цифра")
      .matches(/(?=.{8,})/, "Минимум 8 символов"),
    email: yup
      .string()
      .required("Поле должно быть email")
      .email("Поле должно быть email"),
  });
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  // const validatorConfig = {
  //   email: {
  //     isRequired: { message: "Поле необходимо заполнить" },
  //     isEmail: {
  //       message: "Поле должно быть email",
  //     },
  //   },
  //   password: {
  //     isRequired: { message: "Поле необходимо заполнить" },
  //     isCapitalSymbol: {
  //       message: "Должна быть одна заглавная бука",
  //     },
  //     isContainDigit: {
  //       message: "Должна быть одна цифра",
  //     },
  //     min: {
  //       message: "Минимум 8 символов",
  //       value: 8,
  //     },
  //   },
  //   licence: {
  //     isRequired: { message: "Поле необходимо заполнить" },
  //   },
  // };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    // const errors = validator(data, validatorConfig);
    validateSchema
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
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
      <CheckboxField
        value={data.licence}
        onChange={handleChange}
        name="licence"
        error={errors.licence}
      >
        Подтвердить соглашение
      </CheckboxField>
      <button
        className="btn btn-primary w-100 mx-auto"
        disabled={Object.keys(errors).length}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
