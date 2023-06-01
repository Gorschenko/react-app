import TextField from "components/base/textField";
import { useState, useEffect } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState();

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  useEffect(() => {
    validate();
  });

  const validate = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <TextField
        label="Пароль"
        type="passwrod"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Login;
