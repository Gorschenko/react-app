import TextField from "components/base/textField";
import SelectField from "components/base/selectField";
import RadioField from "components/base/radioField";
import MyltiField from "components/base/myltiField";
import CheckboxField from "components/base/checkboxField";

import { useState, useEffect } from "react";
import { validator } from "utils/validator";
import api from "../api";

const RegisterForm = () => {
  const [professions, setProfession] = useState();
  const [qualities, setQualities] = useState({});

  useEffect(() => {
    api.professions
      .fetchAll()
      .then((professions) => setProfession(professions));
    api.qualities.fetchAll().then((qualities) => setQualities(qualities));
  }, []);

  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    sex: "male",
    qualities: [],
    licence: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
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
    profession: {
      isRequired: { message: "Поле необходимо заполнить" },
    },
    licence: {
      isRequired: { message: "Поле необходимо заполнить" },
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
      <SelectField
        label="Выберите профессию"
        type="text"
        name="profession"
        defaultOption="Choose..."
        value={data.profession}
        options={professions}
        error={errors.profession}
        onChange={handleChange}
      />
      <RadioField
        options={[
          { name: "Male", value: "male" },
          { name: "Female", value: "female" },
        ]}
        value={data.sex}
        name="sex"
        label="Выберите пол"
        onChange={handleChange}
      />
      <MyltiField
        label="Выберите качества"
        options={qualities}
        onChange={handleChange}
        name="qualities"
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

export default RegisterForm;
