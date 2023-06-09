import React, { useState } from "react";
import LoginForm from "components/loginForm";
import RegisterForm from "components/registerForm";
import { useParams } from "react-router-dom";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const toggleFormType = (params) => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-3">
          <h3 className="mb-4">
            {formType === "register" ? "Register" : "Login"}
          </h3>
          {formType === "register" ? (
            <>
              <RegisterForm />
              <p>
                Already have account?
                <a role="button" onClick={toggleFormType}>
                  Sign In
                </a>
              </p>
            </>
          ) : (
            <>
              <LoginForm />
              <p>
                Dont have account?
                <a role="button" onClick={toggleFormType}>
                  Sign Up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
