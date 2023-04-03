import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";
import "./Register.css";
import { registerInitiate } from "./../../Redux/actions";
const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { currentUser } = useSelector((state) => state.user);
  // const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      // history.push("/");

      window.location.href = "/";
    }
  }, [currentUser]);
  const { email, password, displayName, passwordConfirm } = state;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      {/* <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <br />
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign up
          </h1>
          <input
            type="text"
            id="displayName"
            placeholder="Full Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />
          <input
            type="email"
            id="user-email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type="password"
            id="inputRePassword"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          <button className="btn btn-secondary btn-block" type="submit">
            Sign Up
          </button>
          <Link to="/login">Back</Link>
        </form>
        <br />
      </div> */}
      <section className="h-100 ">
        <div className="py-5 h-full">
          <div className="w-full">
            <div className="rounded-lg shadow-lg">
              <div className="flex justify-around">
                <div className="w-2/5 px-5 py-8 bg-stone-100">
                  <div className="flex justify-center items-center ">
                    <img
                      src={require("../../Images/logo.png")}
                      style={{ width: 160 }}
                      alt="logo"
                    />
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-5">
                      <input
                        type="text"
                        id="displayName"
                        name="displayName"
                        onChange={handleChange}
                        value={displayName}
                        required
                        className="form-input w-96 px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                        placeholder="Họ và tên"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        id="user-email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                        className="form-input w-96 px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                        placeholder="Nhập địa chỉ email"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                        className="form-input w-96 px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                        placeholder="Nhập mật khẩu"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        id="inputRePassword"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={passwordConfirm}
                        required
                        className="form-input w-96 px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                        placeholder="Nhập lại mật khẩu"
                      />
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className="btn bg-amber-600 text-white text-lg font-bold py-2 px-6 rounded-lg"
                        type="submit"
                      >
                        Đăng ký
                      </button>
                    </div>
                    <div className="flex items-center justify-center pb-4">
                      <button
                        type="button"
                        className="btn bg-transparent text-indigo-500 font-bold"
                      >
                        <Link to="/login">
                          <button type="button">Quay về</button>
                        </Link>{" "}
                      </button>
                    </div>
                  </form>
                </div>

                <div className="w-3/5 px-5 py-8">
                  <div className="text-white">
                    <div className="text-center">
                      <img
                        src={require("../../Images/login.png")}
                        style={{ width: 550 }}
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
